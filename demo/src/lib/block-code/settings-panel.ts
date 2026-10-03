/** settings-panel block — copy-paste-ready Astro markup. */
export const codeSettingsPanel = `---
import { Card, Switch, Input, Tag, Button } from "astro-ui";
---

<div class="block-canvas-grid">
  <Card>
    <h3 slot="header">Notifications</h3>
    <div class="block-settings">
      <Switch name="product-updates" checked label="Product updates" />
      <Switch name="weekly-digest" label="Weekly digest" />
      <Switch name="security-alerts" checked label="Security alerts" />
    </div>
  </Card>
  <Card>
    <h3 slot="header">Workspace</h3>
    <div class="block-form">
      <div class="block-field">
        <label for="workspace">Workspace name</label>
        <Input name="workspace" id="workspace" value="Acme Inc" />
      </div>
      <div class="block-form-row">
        <span class="block-plan-label">Plan</span>
        <Tag variant="primary">Pro</Tag>
      </div>
      <Button variant="outline">Save changes</Button>
    </div>
  </Card>
</div>

<style is:global>
  .block-canvas-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: var(--ui-space-4); }
  .block-settings { display: grid; gap: var(--ui-space-3); }
  .block-form { display: grid; gap: var(--ui-space-3); }
  .block-field { display: grid; gap: var(--ui-space-1); }
  .block-field label { font-size: var(--ui-text-sm); font-weight: var(--ui-font-medium); }
  .block-form-row { display: flex; align-items: center; justify-content: space-between; gap: var(--ui-space-3); }
  .block-plan-label { font-size: var(--ui-text-sm); color: var(--ui-muted-foreground); }
</style>`;
