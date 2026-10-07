// ─── types ──────────────────────────────────────────────────────────────────

export type ToastTypes =
  | "default"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "loading";

export type Position =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

/** Button rendered at the inline-end of the toast (action).
 *  The toast is dismissed after `onClick` runs. */
export interface ToastAction {
  label: string;
  onClick: (event: MouseEvent) => void;
}

export interface ToastOptions {
  type?: ToastTypes;
  description?: string;
  duration?: number;
  dismissible?: boolean;
  className?: string;
  style?: Record<string, string>;
  position?: Position;
  richColors?: boolean;
  closeButton?: boolean;
  icon?: string | null;
  role?: string;
  invert?: boolean;
  /** Keep this toast's stack always expanded (skips collapsed peek mode). */
  expand?: boolean;
  /** Action button, e.g. `{ label: 'Undo', onClick: () => undo() }`. */
  action?: ToastAction;
}

export interface Toast extends ToastOptions {
  id: number | string;
  title: string;
  createdAt?: number;
}

// ─── internal state ─────────────────────────────────────────────────────────

type Listener = (toasts: Toast[]) => void;

const listeners = new Set<Listener>();
const dismissed = new Set<number | string>();
const timers = new Map<number | string, ReturnType<typeof setTimeout>>();
const toastsArr: Toast[] = [];
let nextId = 1;

function getActive(): Toast[] {
  return toastsArr.filter((t) => !dismissed.has(t.id));
}

function notify(): void {
  listeners.forEach((fn) => {
    fn(getActive());
  });
}

function clearTimer(id: number | string): void {
  const t = timers.get(id);
  if (t) {
    clearTimeout(t);
    timers.delete(id);
  }
}

// ─── store ──────────────────────────────────────────────────────────────────

function createToast(
  data: Omit<Toast, "id" | "createdAt"> & { id?: number | string },
): number | string {
  const id = data.id != null ? data.id : nextId++;

  if (dismissed.has(id)) {
    dismissed.delete(id);
    const idx = toastsArr.findIndex((t) => t.id === id);
    if (idx >= 0) toastsArr.splice(idx, 1);
  }

  dismissed.delete(id);
  toastsArr.push({ ...data, id, createdAt: Date.now() });
  notify();
  return id;
}

function dismissToast(id?: number | string): void {
  if (id === undefined) {
    getActive().forEach((t) => {
      dismissed.add(t.id);
      clearTimer(t.id);
    });
  } else if (!dismissed.has(id)) {
    dismissed.add(id);
    clearTimer(id);
  }
  notify();
}

function updateToast(id: number | string, data: Partial<Toast>): void {
  const idx = toastsArr.findIndex((t) => t.id === id && !dismissed.has(id));
  if (idx >= 0) {
    toastsArr[idx] = { ...toastsArr[idx], ...data };
    notify();
  }
}

// ─── callable object ────────────────────────────────────────────────────────

function toastFn(message: string, options?: ToastOptions): number | string {
  return createToast({
    ...options,
    title: message,
    type: options?.type ?? "default",
  });
}

type ToastFn = {
  (message: string, options?: ToastOptions): number | string;

  success: (message: string, options?: ToastOptions) => number | string;
  error: (message: string, options?: ToastOptions) => number | string;
  info: (message: string, options?: ToastOptions) => number | string;
  warning: (message: string, options?: ToastOptions) => number | string;
  loading: (message: string, options?: ToastOptions) => number | string;
  update: (id: number | string, data: Partial<Toast>) => void;
  dismiss: (id?: number | string) => void;
  subscribe: (fn: Listener) => () => void;
  toasts: Toast[];
};

const toast = toastFn as ToastFn;

toast.success = (msg, opts) =>
  createToast({ ...opts, title: msg, type: "success" });
toast.error = (msg, opts) =>
  createToast({ ...opts, title: msg, type: "error" });
toast.info = (msg, opts) => createToast({ ...opts, title: msg, type: "info" });
toast.warning = (msg, opts) =>
  createToast({ ...opts, title: msg, type: "warning" });
toast.loading = (msg, opts) =>
  createToast({ ...opts, title: msg, type: "loading" });
toast.update = updateToast;
toast.dismiss = dismissToast;
toast.subscribe = (fn: Listener): (() => void) => {
  listeners.add(fn);
  fn(getActive());
  return () => listeners.delete(fn);
};

Object.defineProperty(toast, "toasts", {
  get(): Toast[] {
    return getActive();
  },
  enumerable: true,
  configurable: true,
});

export { toast };

// ─── inline SVG icons (no React) ────────────────────────────────────────────

export const ICONS = {
  success: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.528-9.981a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>`,

  error: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd"/></svg>`,

  warning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.35-1.167 3.022 0l6.28 10.867c.673 1.167-.17 2.62-1.516 2.62H3.72c-1.347 0-2.189-1.453-1.515-2.62L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/></svg>`,

  info: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"/></svg>`,

  default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>`,

  loading: `<div class="aui-toast__spinner" style="width:16px;height:16px" aria-hidden="true"><div class="aui-toast__spinner-bar" style="width:16px;height:16px;border-width:2px;border-right-color:transparent"></div></div>`,
};

// ─── close button SVG ───────────────────────────────────────────────────────

export const CLOSE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
