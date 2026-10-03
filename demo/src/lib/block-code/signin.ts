/** signin block — copy-paste-ready Astro markup. */
export const codeSignin = `---
import { Card, Input, Checkbox, Button, Separator } from "astro-ui";
---

<Card class="block-auth">
  <h3 slot="header">Sign in to your account</h3>
  <div class="block-form">
    <div class="block-field">
      <label for="email">Email</label>
      <Input type="email" name="email" id="email" placeholder="you@example.com" />
    </div>
    <div class="block-field">
      <label for="password">Password</label>
      <Input type="password" name="password" id="password" placeholder="••••••••" />
    </div>
    <div class="block-form-row">
      <Checkbox name="remember" label="Remember me" />
      <a href="/reset" class="block-link">Forgot password?</a>
    </div>
    <Button class="block-btn-full">Sign in</Button>
    <Separator label="or" />
    <Button variant="outline" class="block-btn-full">Continue with GitHub</Button>
  </div>
</Card>

<style is:global>
  .block-auth { max-width: 24rem; width: 100%; margin-inline: auto; }
  .block-form { display: grid; gap: var(--ui-space-3); }
  .block-field { display: grid; gap: var(--ui-space-1); }
  .block-field label { font-size: var(--ui-text-sm); font-weight: var(--ui-font-medium); }
  .block-btn-full { inline-size: 100%; }
  .block-form-row { display: flex; align-items: center; justify-content: space-between; gap: var(--ui-space-3); }
  .block-link { font-size: var(--ui-text-sm); color: var(--ui-primary); }
</style>`;
