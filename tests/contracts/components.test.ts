import {readdirSync, readFileSync} from "node:fs";
import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";
import {describe, expect, it} from "vitest";

/**
 * Static contracts every public component must satisfy:
 * typed props, consistent API names, token-driven styles,
 * SSR safety, zero client JS, semantic markup, class forwarding.
 */
const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const dir = join(root, "src", "components");
// Components live in category subdirs (general/, layout/, …).
const files: string[] = [];
const walk = (d: string) => {
  for (const e of readdirSync(d, {withFileTypes: true})) {
    if (e.isDirectory()) walk(join(d, e.name));
    else if (e.name.endsWith(".astro")) files.push(e.name);
  }
};
walk(dir);

const sources = new Map<string, string>(
  files.map((f: string): [string, string] => {
    // Resolve through the category subdir tree.
    let content = "";
    const find = (d: string): void => {
      if (content) return;
      for (const e of readdirSync(d, {withFileTypes: true})) {
        if (e.isDirectory()) find(join(d, e.name));
        else if (e.name === f) content = readFileSync(join(d, e.name), "utf8");
      }
    };
    find(dir);
    return [f, content];
  }),
);

describe("component contracts", () => {
  it("ships the MVP component set", () => {
    expect(files.sort()).toEqual(
      [
        "Accordion.astro",
        "Alert.astro",
        "AlertDialog.astro",
        "AspectRatio.astro",
        "Attachment.astro",
        "Autocomplete.astro",
        "AvatarGroup.astro",
        "Avatar.astro",
        "Badge.astro",
        "Breadcrumb.astro",
        "Bubble.astro",
        "BubbleContent.astro",
        "BubbleGroup.astro",
        "BubbleReactions.astro",
        "Button.astro",
        "ButtonGroup.astro",
        "ButtonGroupSeparator.astro",
        "ButtonGroupText.astro",
        "Card.astro",
        "Chart.astro",
        "Checkbox.astro",
        "Clipboard.astro",
        "Collapsible.astro",
        "Combobox.astro",
        "Dialog.astro",
        "Empty.astro",
        "Field.astro",
        "HoverCard.astro",
        "Input.astro",
        "Kbd.astro",
        "Label.astro",
        "Link.astro",
        "Pagination.astro",
        "Popover.astro",
        "Progress.astro",
        "Radio.astro",
        "Rating.astro",
        "ScrollArea.astro",
        "Select.astro",
        "Separator.astro",
        "Sheet.astro",
        "Skeleton.astro",
        "Slider.astro",
        "Spinner.astro",
        "Stepper.astro",
        "Switch.astro",
        "Table.astro",
        "Tabs.astro",
        "Tag.astro",
        "Textarea.astro",
        "Toaster.astro",
        "Toggle.astro",
        "ToggleGroup.astro",
        "Tooltip.astro",
      ].sort(),
    );
  });

  const JS_REQUIRED = new Set([
    "Autocomplete.astro",
    "AlertDialog.astro",
    "Collapsible.astro",
    "Dialog.astro",
    "Popover.astro",
    "Sheet.astro",
    "Tabs.astro",
    "Textarea.astro",
    "Toaster.astro",
  ]);
  const NO_PROPS_COMPONENTS = new Set(["Toaster.astro"]);

  for (const [file, src] of sources) {
    describe(file, () => {
      if (!NO_PROPS_COMPONENTS.has(file)) {
        it("declares an exported Props interface", () => {
          expect(src).toMatch(/export interface Props/);
        });

        it("supports class forwarding via cn()", () => {
          expect(src).toContain("cn(");
          expect(src).toMatch(/class: className|className,/);
        });

        it("uses semantic design tokens, not hard-coded values", () => {
          expect(src).toMatch(/var\(--ui-/);
          // No hard-coded hex colors in component styles.
          const style = src.slice(src.indexOf("<style>"));
          expect(style).not.toMatch(/#[0-9a-fA-F]{3,8}\b/);
        });

        it("is SSR-safe (no unguarded browser globals)", () => {
          // Scoped <script> blocks run client-side only (Toaster/Tabs
          // precedent), so browser APIs are allowed there. The
          // server-rendered frontmatter + template must stay clean.
          const serverSrc = src.replace(
            /<script[\s\S]*?<\/script>/g,
            "",
          );
          for (const global of [
            "window.",
            "document.",
            "localStorage",
            "navigator.",
          ]) {
            expect(serverSrc).not.toContain(global);
          }
        });

        it("ships zero client JS (no hydration directives, no handlers-as-strings)", () => {
          expect(src).not.toMatch(/client:\w+/);
          expect(src).not.toContain("onclick=");
        });
      }

      it("documents its JS requirement in a header comment", () => {
        expect(src).toMatch(/JavaScript required: (Yes|No)/);
      });
    });
  }

  it("marks JS-required components and everything else zero-JS", () => {
    const jsRequired = new Set([
      "Autocomplete.astro",
      "Combobox.astro",
      "AlertDialog.astro",
      "Collapsible.astro",
      "Dialog.astro",
      "Popover.astro",
      "Sheet.astro",
      "Tabs.astro",
      "Textarea.astro",
      "Toaster.astro",
    ]);
    for (const [file, src] of sources) {
      if (jsRequired.has(file)) {
        expect(src).toMatch(/JavaScript required: Yes/);
      } else {
        expect(src).toMatch(/JavaScript required: No/);
      }
    }
  });

  it("uses consistent prop names across components (variant/size/disabled/class/id)", () => {
    const withVariants = [
      "Button.astro",
      "Badge.astro",
      "Card.astro",
      "Alert.astro",
    ];
    for (const f of withVariants) {
      expect(sources.get(f)).toContain("variant?");
    }
    // No component invents a synonym for `variant`.
    for (const src of sources.values()) {
      expect(src).not.toMatch(/\b(theme|styleKind|colorScheme)\?:/);
    }
  });
  it("keeps visually-hidden clip recipes display:block-safe on table elements", () => {
    // The 1px + clip sr-only recipe silently leaks on display:table
    // elements: tables treat width as a minimum, so a clipped <table>
    // grows past the clip box and paints a visible duplicate of its
    // content (the Chart data-table regression). Any clip-recipe class
    // applied to a table-family element must force display: block.
    const TABLE_TAGS = "table|thead|tbody|tfoot|tr|th|td|caption|colgroup|col";
    for (const [file, src] of sources) {
      // Markup only — frontmatter template literals would false-positive.
      const template = src.split(/^---$/m).slice(2).join("---");
      // Flat CSS rule blocks using the clip recipe (modern or legacy).
      const rules = [...src.matchAll(/([^{}]+)\{([^{}]*)\}/g)].filter(
        ([, , body]) => /clip-path:\s*inset\(50%\)|clip:\s*rect\(/.test(body),
      );
      for (const [, selector, body] of rules) {
        const classes = [...selector.matchAll(/\.([a-zA-Z][\w-]*)/g)].map((m) => m[1]);
        const onTable =
          // Selector names a table-family element directly (\b won't
          // match inside compound class names like __table).
          new RegExp(`\\b(${TABLE_TAGS})\\b`).test(selector) ||
          // Or one of its classes is applied to a table-family tag.
          classes.some((cls) =>
            new RegExp(`<(${TABLE_TAGS})\\b[^>]*class="[^"]*\\b${cls}\\b[^"]*"`).test(template),
          );
        if (onTable) {
          expect(body, `${file}: "${selector.trim()}" clips a table-family element — add display: block to the recipe`).toMatch(/display:\s*block\b/);
        }
      }
    }
  });

  describe("Tabs.astro", () => {
    const src = sources.get("Tabs.astro") as string;

    it("implements the WAI-ARIA tabs pattern", () => {
      expect(src).toContain('role="tablist"');
      expect(src).toContain('role="tab"');
      expect(src).toContain("aria-selected");
      expect(src).toContain("aria-controls");
      expect(src).toContain("tabpanel");
      expect(src).toContain("aria-labelledby");
    });

    it("uses roving tabindex with a server-rendered initial tab", () => {
      expect(src).toContain('tabindex={active ? "0" : "-1"}');
      expect(src).toContain("defaultValue");
    });

    it("wires keyboard navigation in its scoped script", () => {
      expect(src).toContain("keydown");
      expect(src).toContain("ArrowRight");
      expect(src).toContain("ArrowLeft");
      expect(src).toContain("ArrowUp");
      expect(src).toContain("ArrowDown");
      expect(src).toContain('"Home"');
      expect(src).toContain('"End"');
      // Disabled tabs are skipped, never activated.
      expect(src).toContain("!tab.disabled");
    });

    it("associates panels via data-tab with an index fallback", () => {
      expect(src).toContain("data-tab");
      expect(src).toContain("data-aui-tab-panels");
      expect(src).toContain("hidden");
    });
  });
});
