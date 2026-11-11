/** forgot-password block — copy-paste-ready Astro markup. */
export const codeForgotPassword = `---
import { Card, Input, Button } from "@parsakafi/astro-ui";
---

<Card class="block-auth">
  <h3 slot="header">Reset your password</h3>
  <div class="block-form">
    <p class="block-hint">Enter your account email and we'll send a recovery link.</p>
    <div class="block-field">
      <label for="email">Email</label>
      <Input type="email" name="email" id="email" placeholder="you@example.com" />
    </div>
    <Button class="block-btn-full">Send recovery link</Button>
  </div>
</Card>

<style is:global>
  .block-auth { max-width: 24rem; width: 100%; margin-inline: auto; }
  .block-form { display: grid; gap: var(--ui-space-3); }
  .block-field { display: grid; gap: var(--ui-space-1); }
  .block-field label { font-size: var(--ui-text-sm); font-weight: var(--ui-font-medium); }
  .block-btn-full { inline-size: 100%; }
  .block-hint { margin: 0; color: var(--ui-muted-foreground); font-size: var(--ui-text-sm); }
</style>`;
