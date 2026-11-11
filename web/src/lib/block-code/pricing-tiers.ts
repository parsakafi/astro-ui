/** pricing-tiers block — copy-paste-ready Astro markup. */
export const codePricingTiers = `---
import { Card, Badge, Button } from "astro-ui";
---

<div class="block-pricing">
  <Card class="block-plan">
    <h3 slot="header">Starter</h3>
    <div class="block-plan__body">
      <p class="block-price"><strong>$0</strong> <span>forever</span></p>
      <p class="block-hint">Everything you need to evaluate the library.</p>
      <ul class="block-features">
        <li>63 components</li>
        <li>Tokens &amp; base CSS</li>
        <li>Community support</li>
      </ul>
    </div>
    <Button variant="outline" class="block-btn-full block-plan__cta">Start free</Button>
  </Card>

  <Card class="block-plan block-plan--featured">
    <h3 slot="header">Pro <Badge variant="primary" size="sm">Popular</Badge></h3>
    <div class="block-plan__body">
      <p class="block-price"><strong>$19</strong> <span>per month</span></p>
      <p class="block-hint">For teams shipping production sites.</p>
      <ul class="block-features">
        <li>Everything in Starter</li>
        <li>Priority examples</li>
        <li>Blocks library</li>
        <li>Email support</li>
      </ul>
    </div>
    <Button variant="primary" class="block-btn-full block-plan__cta">Get Pro</Button>
  </Card>

  <Card class="block-plan">
    <h3 slot="header">Team</h3>
    <div class="block-plan__body">
      <p class="block-price"><strong>$49</strong> <span>per month</span></p>
      <p class="block-hint">For organizations standardizing on astro-ui.</p>
      <ul class="block-features">
        <li>Everything in Pro</li>
        <li>Unlimited projects</li>
        <li>Shared token themes</li>
        <li>Slack support</li>
      </ul>
    </div>
    <Button variant="outline" class="block-btn-full block-plan__cta">Contact us</Button>
  </Card>
</div>

<style is:global>
  .block-pricing {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    gap: var(--ui-space-4);
    align-items: stretch;
  }
  .block-plan { display: flex; flex-direction: column; height: 100%; }
  .block-plan .aui-card__header h3 { display: flex; align-items: center; gap: var(--ui-space-2); margin: 0; }
  .block-plan .aui-card__content { display: flex; flex-direction: column; flex: 1; }
  .block-plan__body { display: grid; gap: var(--ui-space-3); align-content: start; flex: 1; }
  .block-plan__cta { margin-block-start: var(--ui-space-4); }
  .aui-card.block-plan.block-plan--featured { border-color: var(--ui-primary); box-shadow: 0 0 0 1px var(--ui-primary), var(--ui-shadow-lg); }
  .block-price { display: flex; align-items: baseline; gap: var(--ui-space-2); margin: 0; }
  .block-price strong { font-size: var(--ui-text-3xl); font-weight: var(--ui-font-bold); letter-spacing: -0.03em; }
  .block-price span { font-size: var(--ui-text-sm); color: var(--ui-muted-foreground); }
  .block-features { display: grid; gap: var(--ui-space-2); margin: 0; padding: 0; list-style: none; font-size: var(--ui-text-sm); color: var(--ui-muted-foreground); }
  .block-features li { display: flex; align-items: start; gap: var(--ui-space-2); }
  .block-features li::before { content: "\\2713"; flex-shrink: 0; color: var(--ui-primary); font-weight: var(--ui-font-semibold); }
  .block-btn-full { inline-size: 100%; }
  .block-hint { margin: 0; color: var(--ui-muted-foreground); font-size: var(--ui-text-sm); }
</style>`;
