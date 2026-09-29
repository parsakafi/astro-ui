# Events & Browser Behavior

MVP components ship **zero client-side JavaScript**. There are no
`onClick`-style string props (a deliberate break from the old template
API). All interaction uses native DOM events attached by the consuming
application. This keeps SSR output clean and lets the app control
hydration.

## Patterns

### 1. Plain forms (no JS at all)

```astro
<form method="post" action="/api/signup">
  <Label for="email">Email</Label>
  <Input id="email" name="email" type="email" required />
  <Button type="submit">Sign up</Button>
</form>
```

### 2. Progressive enhancement with an inline script

```astro
<Button id="copy-btn" variant="secondary">Copy link</Button>
<script>
  // Runs client-side only; component rendered fully on the server.
  document.getElementById("copy-btn")?.addEventListener("click", async () => {
    await navigator.clipboard.writeText(location.href);
  });
</script>
```

### 3. Framework island for rich behavior

```astro
---
import { Button } from "astro-ui";
import Counter from "../islands/Counter.jsx";
---
<Button variant="outline">Static action</Button>
<Counter client:visible />  <!-- hydration controlled by the APP, never the library -->
```

### 4. Dismissible Alert (recipe)

```astro
<Alert id="notice" variant="warning"><Fragment slot="title">Heads up</Fragment>…</Alert>
<Button id="dismiss" variant="ghost" size="sm">Dismiss</Button>
<script>
  document.getElementById("dismiss")?.addEventListener("click", () => {
    document.getElementById("notice")?.remove();
  });
</script>
```

## Rules for contributors

- Never access `window`/`document`/`localStorage` during component
  render (contract-tested). Isolate browser APIs to documented
  app-level scripts.
- Never add `client:*` directives inside the library.
- Every interactive-component doc page must state JS requirements,
  keyboard support, and ARIA behavior (see `docs/accessibility.md`).
