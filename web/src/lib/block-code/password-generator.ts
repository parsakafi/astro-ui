/** password-generator block — copy-paste-ready Astro markup. */
export const codePasswordGenerator = `---
import { Card, Slider, Switch, Button } from "@parsakafi/astro-ui";
---

<div class="passgen">
  <Card class="passgen__card">
    <h3 slot="header" class="passgen__title">Generate Password</h3>

    <output class="passgen__out" data-passgen-output aria-live="polite">CLICK GENERATE</output>

    <div class="passgen__field">
      <span class="passgen__lab">Length <b data-passgen-length>16</b></span>
      <Slider name="passgen-length" id="passgen-length" min={4} max={32} value={16}
              ariaStartLabel="Password length" />
      <div class="passgen__bounds" aria-hidden="true">
        <span>4</span><span>32</span>
      </div>
    </div>

    <div class="passgen__field">
      <span class="passgen__lab">Settings</span>
      <div class="passgen__opts">
        <Switch name="passgen-upper" checked label="Include Uppercase" />
        <Switch name="passgen-lower" checked label="Include Lowercase" />
        <Switch name="passgen-num" checked label="Include Numbers" />
        <Switch name="passgen-sym" label="Include Symbols" />
      </div>
    </div>

    <Button variant="primary" data-passgen-generate class="passgen__btn">
      Generate Password
    </Button>
  </Card>
</div>

<script>
  // Wire every generator on the page: length readout + generate click.
  document.querySelectorAll("[data-passgen-generate]").forEach((btn) => {
    const root = btn.closest(".passgen__card");
    if (!root) return;
    const output = root.querySelector("[data-passgen-output]");
    const lenOut = root.querySelector("[data-passgen-length]");
    const range = root.querySelector("input[type='range']");
    const boxes = Array.from(root.querySelectorAll("input[type='checkbox']"));
    const SETS = [
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "abcdefghijklmnopqrstuvwxyz",
      "0123456789",
      "!@#$%^&*()_+-=[]{};:,.<>?/",
    ];
    btn.addEventListener("click", () => {
      if (!output || !range) return;
      const len = Number(range.value) || 16;
      const pool = boxes.map((b, i) => (b.checked ? SETS[i] : "")).join("");
      if (!pool) {
        output.textContent = "SELECT AT LEAST ONE SET";
        return;
      }
      const bytes = crypto.getRandomValues(new Uint32Array(len));
      let pass = "";
      for (let i = 0; i < len; i++) pass += pool[bytes[i] % pool.length];
      output.textContent = pass;
    });
    range.addEventListener("input", () => {
      if (lenOut) lenOut.textContent = range.value;
    });
  });
</script>

<style is:global>
  .passgen { display: grid; justify-items: center; }
  .passgen__card { inline-size: min(24rem, 100%); }
  .passgen__title { margin: 0; color: var(--ui-foreground); font-size: var(--ui-text-lg); font-weight: var(--ui-font-semibold); }
  .passgen__out { display: block; padding: var(--ui-space-3) var(--ui-space-4); margin-block-end: var(--ui-space-4); background-color: var(--ui-muted); border-radius: var(--ui-radius-md); color: var(--ui-foreground); font-size: var(--ui-text-md); letter-spacing: 0.08em; text-align: center; overflow-wrap: anywhere; }
  .passgen__field { display: grid; gap: var(--ui-space-2); margin-block-end: var(--ui-space-4); }
  .passgen__lab { color: var(--ui-muted-foreground); font-size: var(--ui-text-xs); font-weight: var(--ui-font-semibold); letter-spacing: 0.08em; text-transform: uppercase; }
  .passgen__lab b { color: var(--ui-foreground); }
  .passgen__bounds { display: flex; justify-content: space-between; color: var(--ui-muted-foreground); font-size: var(--ui-text-xs); }
  .passgen__opts { display: grid; gap: var(--ui-space-2); }
  .passgen__btn { inline-size: 100%; margin-block-start: var(--ui-space-2); }
</style>`;
