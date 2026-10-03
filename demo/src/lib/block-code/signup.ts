/** signup block — copy-paste-ready Astro markup. */
export const codeSignup = `---
import { Card, Input, Checkbox, Button } from "astro-ui";
---

<Card class="block-auth">
  <h3 slot="header">Create your account</h3>
  <div class="block-form">
    <div class="block-field">
      <label for="name">Full name</label>
      <Input name="name" id="name" placeholder="Ada Lovelace" />
    </div>
    <div class="block-field">
      <label for="email">Email</label>
      <Input type="email" name="email" id="email" placeholder="you@example.com" />
    </div>
    <div class="block-field">
      <label for="password">Password</label>
      <Input type="password" name="password" id="password" placeholder="8+ characters" />
    </div>
    <Checkbox name="terms" label="I agree to the terms of service" />
    <Button class="block-btn-full">Create account</Button>
  </div>
</Card>

<style is:global>
  .block-auth { max-width: 24rem; width: 100%; margin-inline: auto; }
  .block-form { display: grid; gap: var(--ui-space-3); }
  .block-field { display: grid; gap: var(--ui-space-1); }
  .block-field label { font-size: var(--ui-text-sm); font-weight: var(--ui-font-medium); }
  .block-btn-full { inline-size: 100%; }
</style>`;
