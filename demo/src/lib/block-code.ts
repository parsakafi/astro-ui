/**
 * Block source code — copy-paste-ready Astro markup for every block.
 *
 * Each snippet is SELF-CONTAINED and renders exactly like the demo:
 * frontmatter imports + markup + the block's own <style> section
 * (mirrored 1:1 from the demo's stylesheet, renamed to block-*
 * classes). Styles are `is:global` so they reach into slotted
 * astro-ui component internals; class names are namespaced to avoid
 * collisions when several blocks are pasted into one project.
 *
 * Requires astro-ui tokens.css + base.css (standard library setup).
 */
export const blockCode: Record<string, string> = {
    signin: `---
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
</style>`,

    signup: `---
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
</style>`,

    "forgot-password": `---
import { Card, Input, Button } from "astro-ui";
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
</style>`,

    "pricing-tiers": `---
import { Card, Badge, Button } from "astro-ui";
---

<div class="block-pricing">
  <Card class="block-plan">
    <h3 slot="header">Starter</h3>
    <div class="block-plan__body">
      <p class="block-price"><strong>$0</strong> <span>forever</span></p>
      <p class="block-hint">Everything you need to evaluate the library.</p>
      <ul class="block-features">
        <li>43 components</li>
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
</style>`,

    "stats-band": `---
import { Card, Badge, Progress } from "astro-ui";
---

<div class="block-canvas-grid">
  {[
    { label: "Downloads / month", value: "48.2k", progress: 72, badge: { text: "+12%", variant: "success" as const } },
    { label: "GitHub stars", value: "3,214", progress: 58, badge: { text: "+3.1%", variant: "success" as const } },
    { label: "Open issues", value: "27", progress: 18, badge: { text: "stable", variant: "info" as const } },
  ].map((stat) => (
    <Card>
      <div class="block-stat">
        <div class="block-stat-head">
          <span class="block-stat-label">{stat.label}</span>
          <Badge variant={stat.badge.variant} size="sm">{stat.badge.text}</Badge>
        </div>
        <span class="block-stat-value">{stat.value}</span>
        <Progress value={stat.progress} />
      </div>
    </Card>
  ))}
</div>

<style is:global>
  .block-canvas-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: var(--ui-space-4); }
  .block-stat { display: grid; gap: var(--ui-space-2); }
  .block-stat-head { display: flex; align-items: center; justify-content: space-between; gap: var(--ui-space-2); }
  .block-stat-label { font-size: var(--ui-text-sm); color: var(--ui-muted-foreground); }
  .block-stat-value { font-size: var(--ui-text-2xl); font-weight: var(--ui-font-semibold); letter-spacing: -0.02em; }
</style>`,

    "stats-circles": `---
import { Card, Badge, Progress } from "astro-ui";
---

<div class="block-canvas-grid">
  {[
    { label: "Storage used", value: 76, badge: { text: "4.1 GB left", variant: "muted" as const }, color: "primary" as const, size: "lg" as const },
    { label: "Build success", value: 98, badge: { text: "30-day avg", variant: "success" as const }, color: "success" as const, size: "lg" as const },
    { label: "CPU load", value: 41, badge: { text: "normal", variant: "info" as const }, color: "warning" as const, size: "lg" as const },
  ].map((stat) => (
    <Card>
      <div class="block-stat block-stat--circle">
        <div class="block-stat-head">
          <span class="block-stat-label">{stat.label}</span>
          <Badge variant={stat.badge.variant} size="sm">{stat.badge.text}</Badge>
        </div>
        <Progress
          variant="circle"
          value={stat.value}
          color={stat.color}
          size={stat.size}
          label={stat.label + " progress"}
          showValue
        />
      </div>
    </Card>
  ))}
</div>

<style is:global>
  .block-canvas-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: var(--ui-space-4); }
  .block-stat { display: grid; gap: var(--ui-space-2); }
  .block-stat--circle { justify-items: center; text-align: center; }
  .block-stat--circle .block-stat-head { inline-size: 100%; }
  .block-stat-head { display: flex; align-items: center; justify-content: space-between; gap: var(--ui-space-2); }
  .block-stat-label { font-size: var(--ui-text-sm); color: var(--ui-muted-foreground); }
</style>`,

    "cta-band": `---
import { Badge, Button } from "astro-ui";
---

<div class="block-cta">
  <Badge variant="muted">v1.0 — stable</Badge>
  <h2>Ship your next Astro site faster</h2>
  <p>Install once, import tokens, compose pages from blocks like this one.</p>
  <div class="block-cta-actions">
    <Button href="/docs/get-started/">Get started</Button>
    <Button href="/components/" variant="outline">Components</Button>
  </div>
</div>

<style is:global>
  .block-cta {
    display: grid;
    gap: var(--ui-space-4);
    justify-items: center;
    text-align: center;
    padding: var(--ui-space-10) var(--ui-space-6);
    border: 1px solid var(--ui-border);
    border-radius: var(--ui-radius-xl, var(--ui-radius-lg));
    background: radial-gradient(
      120% 140% at 50% 0%,
      color-mix(in srgb, var(--ui-primary) 14%, var(--ui-background)),
      var(--ui-background)
    );
  }
  .block-cta h2 { margin: 0; max-width: 24ch; font-size: var(--ui-text-2xl); letter-spacing: -0.02em; }
  .block-cta p { margin: 0; max-width: 52ch; color: var(--ui-muted-foreground); }
  .block-cta-actions { display: flex; flex-wrap: wrap; gap: var(--ui-space-3); justify-content: center; }
</style>`,

    "settings-panel": `---
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
</style>`,

    "team-members": `---
import { Card, Avatar, Badge, Button } from "astro-ui";
---

<Card>
  <h3 slot="header">Members</h3>
  <ul class="block-team">
    {[
      { name: "Parsa M", role: "Owner", badge: "owner" },
      { name: "Devin V", role: "Maintainer", badge: "maintainer" },
      { name: "Robin H", role: "Contributor", badge: "member" },
    ].map((member) => (
      <li class="block-team-row">
        <Avatar name={member.name} size="sm" />
        <span class="block-team-name">{member.name}</span>
        <Badge
          variant={member.badge === "owner" ? "primary" : member.badge === "maintainer" ? "info" : "muted"}
          size="sm"
        >
          {member.badge}
        </Badge>
        <span class="block-team-role">{member.role}</span>
      </li>
    ))}
  </ul>
  <Button slot="footer" variant="outline" size="sm">Invite member</Button>
</Card>

<style is:global>
  .block-team { display: grid; gap: var(--ui-space-2); margin: 0; padding: 0; list-style: none; }
  .block-team-row { display: flex; align-items: center; gap: var(--ui-space-3); padding: var(--ui-space-2) 0; }
  .block-team-name { font-size: var(--ui-text-sm); font-weight: var(--ui-font-medium); }
  .block-team-role { margin-inline-start: auto; font-size: var(--ui-text-xs); color: var(--ui-muted-foreground); }
</style>`,

    "empty-state": `---
import { Empty, Button } from "astro-ui";
---

<Empty>
  <span slot="media" class="block-empty-icon" aria-hidden="true">◈</span>
  <span slot="title">No projects yet</span>
  <span slot="description">
    Create your first project to see analytics, deploys, and team activity here.
  </span>
  <Button size="sm">New project</Button>
  <Button size="sm" variant="ghost" href="/docs/get-started/">Read the guide</Button>
</Empty>

<style is:global>
  .block-empty-icon { display: grid; place-items: center; font-size: 1.75rem; color: var(--ui-primary); }
</style>`,

    "faq-accordion": `---
import { Accordion } from "astro-ui";
---

<Accordion
  id="faq"
  variant="bordered"
  items={[
    { value: "f1", title: "Can I use blocks without the CLI?", content: "Yes — every block is plain Astro markup. Copy the section, paste it into a page, and adjust the content." },
    { value: "f2", title: "Do blocks add JavaScript?", content: "Only what their parts need. An FAQ block is zero-JS (native details); a settings block ships a few hundred bytes for the switches." },
    { value: "f3", title: "How do I theme a block?", content: "Blocks read the same tokens as components. Override --ui-primary once and every block follows." },
  ]}
/>`,

    "changelog-entry": `---
import { Card, Badge, Kbd } from "astro-ui";
---

<Card>
  <h3 slot="header">v1.1.0 <Badge variant="success" size="sm">Latest</Badge></h3>
  <p class="block-hint">Released Sep 24, 2026</p>
  <ul class="block-features">
    <li><Badge variant="success" size="sm">Added</Badge> Rating scale modes and predefined icons</li>
    <li><Badge variant="info" size="sm">Changed</Badge> Slider tooltip follows logical properties in RTL</li>
    <li><Badge variant="warning" size="sm">Fixed</Badge> Badge overlay anchoring in RTL layouts</li>
  </ul>
  <div class="block-form-row">
    <span class="block-plan-label">Full notes</span>
    <span><Kbd>Ctrl</Kbd> <Kbd>K</Kbd> to search the changelog</span>
  </div>
</Card>

<style is:global>
  .block-hint { margin: 0; color: var(--ui-muted-foreground); font-size: var(--ui-text-sm); }
  .block-features { display: grid; gap: var(--ui-space-2); margin: 0 0 var(--ui-space-4); padding: 0; list-style: none; font-size: var(--ui-text-sm); color: var(--ui-muted-foreground); }
  .block-features li { display: flex; align-items: start; gap: var(--ui-space-2); }
  .block-features li::before { content: "\\2713"; flex-shrink: 0; color: var(--ui-primary); font-weight: var(--ui-font-semibold); }
  .block-form-row { display: flex; align-items: center; justify-content: space-between; gap: var(--ui-space-3); }
  .block-plan-label { font-size: var(--ui-text-sm); color: var(--ui-muted-foreground); }
</style>`,

    "compact-social-proof": `---
import { Avatar } from "astro-ui";
---

<div class="block-social-proof">
  <div class="block-social-proof__row">
    <Avatar name="Ada Lovelace" size="xs" status="online" />
    <Avatar name="Grace Hopper" size="xs" />
    <Avatar name="Alan Turing" size="xs" />
    <Avatar name="Edsger Dijkstra" size="xs" variant="primary" />
    <Avatar name="Barbara Liskov" size="xs" />
  </div>
  <p class="block-social-proof__label">Trusted by engineers at</p>
  <p class="block-social-proof__name">Ada Lovelace, Grace Hopper, Alan Turing, and 247 more</p>
</div>

<style is:global>
  .block-social-proof { display: flex; flex-direction: column; align-items: center; gap: var(--ui-space-2); padding: var(--ui-space-6); text-align: center; }
  .block-social-proof__row { display: flex; gap: var(--ui-space-2); }
  .block-social-proof__label { margin: 0; font-size: var(--ui-text-xs); color: var(--ui-muted-foreground); text-transform: uppercase; letter-spacing: 0.05em; }
  .block-social-proof__name { margin: 0; font-size: var(--ui-text-sm); color: var(--ui-foreground); max-width: 20rem; text-align: center; }
</style>`,

    "avatar-group-hover-tooltips": `---
import { Avatar, AvatarGroup, Tooltip } from "astro-ui";
---

<AvatarGroup hover>
  {[
    { name: "Ada Lovelace", img: "47" },
    { name: "Grace Hopper", img: "45" },
    { name: "Alan Turing", img: "12" },
    { name: "Edsger Dijkstra", img: "60" },
  ].map((a) => (
    <Tooltip ariaLabel={a.name} placement="top">
      <Fragment slot="content">{a.name}</Fragment>
      <Avatar name={a.name} src={"https://i.pravatar.cc/150?img=" + a.img} />
    </Tooltip>
  ))}
  <Fragment slot="count">+2</Fragment>
</AvatarGroup>

<style is:global>
  /* AvatarGroup hover spread is built into the component; tooltips show on hover. */
</style>`,

    "avatar-social-proof-label": `---
import { Avatar, AvatarGroup } from "astro-ui";
---

<div class="block-social-proof-label">
  <AvatarGroup>
    {["Ada Lovelace", "Grace Hopper", "Alan Turing", "Edsger Dijkstra", "Barbara Liskov"].map((name) => (
      <Avatar
        name={name}
        src={"https://i.pravatar.cc/150?img=" + (47 + ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Edsger Dijkstra", "Barbara Liskov"].indexOf(name))}
        status={name === "Ada Lovelace" ? "online" : undefined}
      />
    ))}
  </AvatarGroup>
  <div class="block-social-proof-label__text">
    <p class="block-social-proof-label__headline">Joined by 2,411 developers this week</p>
    <p class="block-social-proof-label__sub">See why teams choose this stack for production Astro sites.</p>
  </div>
</div>

<style is:global>
  .block-social-proof-label { display: flex; align-items: center; gap: var(--ui-space-4); flex-wrap: wrap; }
  .block-social-proof-label__text { display: flex; flex-direction: column; gap: var(--ui-space-1); }
  .block-social-proof-label__headline { margin: 0; font-weight: var(--ui-font-semibold); color: var(--ui-foreground); font-size: var(--ui-text-base); }
  .block-social-proof-label__sub { margin: 0; color: var(--ui-muted-foreground); font-size: var(--ui-text-sm); }
</style>`,

    "pill-button-with-avatar": `---
import { Button, Avatar } from "astro-ui";
---

<div class="block-pill-buttons">
  <Button variant="outline" size="sm" shape="rounded" class="block-pill-btn">
    <Avatar name="Ada Lovelace" size="xs" />
    <span style="margin-inline-start:var(--ui-space-2)">Ada</span>
  </Button>
  <Button variant="outline" size="sm" shape="rounded" class="block-pill-btn">
    <Avatar name="Grace Hopper" size="xs" />
    <span style="margin-inline-start:var(--ui-space-2)">Grace</span>
  </Button>
  <Button variant="outline" size="sm" shape="rounded" class="block-pill-btn">
    <Avatar name="Alan Turing" size="xs" status="online" />
    <span style="margin-inline-start:var(--ui-space-2)">Alan</span>
  </Button>
</div>

<style is:global>
  .block-pill-buttons { display: flex; gap: var(--ui-space-2); flex-wrap: wrap; }
  .block-pill-btn { align-items: center; }
</style>`,

    "avatar-group-hover-tooltips-v2": `---
import { Avatar, AvatarGroup, Tooltip } from "astro-ui";
---

<div class="block-avatar-hover-tooltip">
  <AvatarGroup hover>
    {[
      { name: "Ada Lovelace", img: "47" },
      { name: "Grace Hopper", img: "45" },
      { name: "Alan Turing", img: "12" },
      { name: "Edsger Dijkstra", img: "60" },
      { name: "Barbara Liskov", img: "33" },
    ].map((a) => (
      <Tooltip ariaLabel={a.name} placement="bottom" variant="light">
        <Fragment slot="content">{a.name}</Fragment>
        <Avatar
          name={a.name}
          src={"https://i.pravatar.cc/150?img=" + a.img}
          ring={a.name === "Alan Turing" ? "success" : a.name === "Barbara Liskov" ? "primary" : undefined}
          status={a.name === "Ada Lovelace" ? "online" : undefined}
        />
      </Tooltip>
    ))}
    <Fragment slot="count">+3</Fragment>
  </AvatarGroup>
</div>

<style is:global>
  .block-avatar-hover-tooltip { display: inline-flex; }
  /* AvatarGroup hover spread + per-avatar tooltip on hover/focus. */
</style>`,

    "avatar-empty-state": `---
import { Empty, Avatar, Button } from "astro-ui";
---

<Empty size="lg" ariaLabel="No team members yet">
  <span slot="media" class="block-empty-avatar" aria-hidden="true">
    <Avatar name="Your team" size="xl" variant="primary" ring="primary" />
  </span>
  <span slot="title">No team members yet</span>
  <span slot="description">Invite your first teammate to start collaborating on projects, deploys, and analytics.</span>
  <Button size="sm">Invite member</Button>
  <Button size="sm" variant="ghost" href="/docs/get-started/">Read the guide</Button>
</Empty>

<style is:global>
  .block-empty-avatar { display: grid; place-items: center; }
  /* Empty handles layout; Avatar sits in the media slot for a human-centered empty state. */
</style>`,

    "breadcrumb-project-info": `---
import { Breadcrumb, Avatar, Badge } from "astro-ui";
---

<Breadcrumb ariaLabel="Project breadcrumb">
  <span class="aui-breadcrumb__item">
    <a class="aui-breadcrumb__link" href="#">
      <Avatar name="Acme Design" size="xs" variant="primary" />
      Acme Design
    </a>
  </span>
  <span class="aui-breadcrumb__item">
    <a class="aui-breadcrumb__link" href="#">
      <Avatar name="Ada Lovelace" size="xs" status="online" />
      Ada Lovelace
    </a>
  </span>
  <span class="aui-breadcrumb__item">
    <span class="aui-breadcrumb__current" aria-current="page">
      homepage.fig
      <Badge variant="muted" size="sm">v4</Badge>
    </span>
  </span>
</Breadcrumb>`,

    "breadcrumb-avatars": `---
import { Breadcrumb, Avatar } from "astro-ui";
---

<Breadcrumb separator="chevron" ariaLabel="Team breadcrumb">
  <span class="aui-breadcrumb__item">
    <a class="aui-breadcrumb__link" href="#">
      <Avatar name="Acme Design" size="xs" />
      Acme Design
    </a>
  </span>
  <span class="aui-breadcrumb__item">
    <a class="aui-breadcrumb__link" href="#">
      <Avatar name="Ada Lovelace" size="xs" />
      Ada Lovelace
    </a>
  </span>
  <span class="aui-breadcrumb__item">
    <span class="aui-breadcrumb__current" aria-current="page">
      <Avatar name="Grace Hopper" size="xs" status="online" />
      Grace Hopper
    </span>
  </span>
</Breadcrumb>`,

    "password-generator": `---
import { Card, Slider, Switch, Button } from "astro-ui";
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
</style>`,

    "capital-inflows": `---
import { Card, Chart, Badge, Button, Avatar } from "astro-ui";
---

<div class="capital">
  <Card class="capital__card">
    <div class="capital__head">
      <h3 class="capital__title">Capital Inflows</h3>
      <Button variant="outline" size="sm">Top 3 Funds <span aria-hidden="true">⌄</span></Button>
    </div>
    <p class="capital__total">
      $12.7M
      <Badge variant="success" size="sm">↗ $425k</Badge>
    </p>
    <Chart
      type="hbar"
      stack
      legend={false}
      labels={["WaveMark Capital", "Envato Finances", "QBridge Tech"]}
      series={[
        { name: "WaveMark Capital", data: [7652000], color: "var(--ui-success)" },
        { name: "Envato Finances", data: [3879100], color: "var(--ui-warning)" },
        { name: "QBridge Tech", data: [1248600], color: "var(--ui-error)" },
      ]}
    />
    <ul class="capital__rows">
      {["WaveMark Capital", "Envato Finances", "QBridge Tech"].map((fund: string, i: number) => (
        <li class="capital__row">
          <Avatar name={fund} size="sm" />
          <span class="capital__fund">{fund}</span>
          <span class="capital__right">
            <span class="capital__cap">Capital In</span>
            <span class="capital__val">{["$7,652,000", "$3,879,100", "$1,248,600"][i]}</span>
          </span>
        </li>
      ))}
    </ul>
  </Card>
</div>

<style is:global>
  .capital { display: grid; justify-items: center; }
  .capital__card { inline-size: min(34rem, 100%); }
  .capital__head { display: flex; align-items: center; justify-content: space-between; gap: var(--ui-space-2); padding-block-end: var(--ui-space-2); border-block-end: 1px solid var(--ui-border); }
  .capital__title { margin: 0; color: var(--ui-foreground); font-size: var(--ui-text-md); font-weight: var(--ui-font-semibold); }
  .capital__total { display: flex; align-items: center; gap: var(--ui-space-2); margin: var(--ui-space-3) 0 var(--ui-space-2); color: var(--ui-foreground); font-size: 1.75rem; line-height: 1.1; font-weight: var(--ui-font-semibold); font-variant-numeric: tabular-nums; }
  .capital__rows { display: grid; margin: var(--ui-space-3) 0 0; padding: 0; list-style: none; }
  .capital__row { display: flex; align-items: center; gap: var(--ui-space-2); padding: var(--ui-space-2) 0; }
  .capital__row + .capital__row { border-block-start: 1px solid var(--ui-border); }
  .capital__fund { color: var(--ui-foreground); font-size: var(--ui-text-md); font-weight: var(--ui-font-medium); }
  .capital__right { display: grid; justify-items: end; margin-inline-start: auto; }
  .capital__cap { color: var(--ui-muted-foreground); font-size: var(--ui-text-xs); }
  .capital__val { color: var(--ui-foreground); font-size: var(--ui-text-md); font-variant-numeric: tabular-nums; }
</style>`,

    "analytics-dashboard": `---
import { Card, Chart, Badge, Button, Tabs } from "astro-ui";
---

<div class="dash">
  {/* KPI row: value + trend badge per metric */}
  <div class="dash__kpis">
    <Card size="sm">
      <div class="dash__kpi">
        <span class="dash__kpi-label">Active users</span>
        <span class="dash__kpi-value">24,803</span>
        <Badge variant="success" size="sm">+12.4%</Badge>
      </div>
    </Card>
    <Card size="sm">
      <div class="dash__kpi">
        <span class="dash__kpi-label">Sessions</span>
        <span class="dash__kpi-value">108,392</span>
        <Badge variant="success" size="sm">+8.1%</Badge>
      </div>
    </Card>
    <Card size="sm">
      <div class="dash__kpi">
        <span class="dash__kpi-label">Bounce rate</span>
        <span class="dash__kpi-value">31.6%</span>
        <Badge variant="error" size="sm">+2.3%</Badge>
      </div>
    </Card>
    <Card size="sm">
      <div class="dash__kpi">
        <span class="dash__kpi-label">Avg. session</span>
        <span class="dash__kpi-value">4m 12s</span>
        <Badge variant="muted" size="sm">stable</Badge>
      </div>
    </Card>
  </div>

  {/* Charts: engagement trend + traffic mix */}
  <div class="dash__charts">
    <Card class="dash__engagement">
      <div class="dash__panel-head">
        <div>
          <h3 class="dash__panel-title">Engagement</h3>
          <p class="dash__panel-sub">Daily active users</p>
        </div>
      </div>
      {/* Range switcher: dissolved into the card grid via display:contents
          (dash__range) — tablist row, then the active chart below. */}
      <Tabs
        class="dash__range"
        variant="pill"
        size="xs"
        ariaLabel="Date range"
        defaultValue="7d"
        items={[
          { value: "7d", label: "7d" },
          { value: "30d", label: "30d" },
          { value: "90d", label: "90d" },
        ]}
      >
        <div data-tab="7d">
          <Chart
            type="area"
            curve
            gradient
            height={220}
            labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
            series={[
              { name: "This week", data: [4200, 5100, 4800, 6400, 7200, 5900, 8100] },
              { name: "Last week", data: [3800, 4200, 4500, 4800, 5200, 6100, 7000] },
            ]}
          />
        </div>
        <div data-tab="30d">
          <Chart
            type="area"
            curve
            gradient
            height={220}
            labels={["W1", "W2", "W3", "W4"]}
            series={[
              { name: "This month", data: [31500, 34200, 32800, 38900] },
              { name: "Last month", data: [28400, 30100, 31900, 33400] },
            ]}
          />
        </div>
        <div data-tab="90d">
          <Chart
            type="area"
            curve
            gradient
            height={220}
            labels={["May", "Jun", "Jul"]}
            series={[
              { name: "This quarter", data: [121000, 134600, 147200] },
              { name: "Last quarter", data: [108300, 115900, 124100] },
            ]}
          />
        </div>
      </Tabs>
    </Card>
    <Card>
      <div class="dash__panel-head">
        <div>
          <h3 class="dash__panel-title">Traffic sources</h3>
          <p class="dash__panel-sub">Share of sessions</p>
        </div>
      </div>
      <Chart
        type="donut"
        gradient
        height={220}
        labels={["Direct", "Search", "Social", "Referral"]}
        series={[{ name: "Share", data: [435, 286, 151, 96] }]}
      />
    </Card>
  </div>
</div>

<style is:global>
  .dash { display: grid; gap: var(--ui-space-4); }
  .dash__kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); gap: var(--ui-space-3); }
  .dash__kpi { display: grid; gap: var(--ui-space-1); justify-items: start; }
  .dash__kpi-label { color: var(--ui-muted-foreground); font-size: var(--ui-text-xs); font-weight: var(--ui-font-medium); }
  .dash__kpi-value { color: var(--ui-foreground); font-size: var(--ui-text-2xl); font-weight: var(--ui-font-semibold); letter-spacing: -0.02em; font-variant-numeric: tabular-nums; }
  .dash__charts { display: grid; grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); gap: var(--ui-space-3); }
  .dash__panel-head { display: flex; align-items: start; justify-content: space-between; gap: var(--ui-space-2); margin-block-end: var(--ui-space-3); }
  .dash__panel-title { margin: 0; color: var(--ui-foreground); font-size: var(--ui-text-md); font-weight: var(--ui-font-semibold); }
  .dash__panel-sub { margin: 0; color: var(--ui-muted-foreground); font-size: var(--ui-text-xs); }
  .dash__range { display: contents; }
  .dash__engagement .aui-tabs__panels { display: grid; }
</style>`,

    "chat-support": `---
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
  Avatar,
  Badge,
  Button,
  Input,
} from "astro-ui";
---

<div class="chat">
  <div class="chat__head">
    <Avatar name="Mira Chen" size="sm" status="online" />
    <div class="chat__who">
      <span class="chat__name">Mira · Support</span>
      <span class="chat__sub">Typically replies in minutes</span>
    </div>
    <Badge variant="success" size="sm">Online</Badge>
  </div>

  <div class="chat__thread">
    <p class="chat__meta">Today · 09:12</p>

    <!-- Operator turn: consecutive messages collapse into one group -->
    <div class="chat__turn">
      <Avatar name="Mira Chen" size="sm" />
      <BubbleGroup ariaLabel="Messages from Mira" class="chat__group">
        <Bubble align="start" variant="muted">
          <BubbleContent>👋 Hi! I'm Mira from support. I see ticket #4821 opened on your account — the double charge on last month's invoice, right?</BubbleContent>
        </Bubble>
        <Bubble align="start" variant="muted">
          <BubbleContent>I've already pulled up the billing log.</BubbleContent>
        </Bubble>
      </BubbleGroup>
    </div>

    <p class="chat__meta chat__meta--end">You · 09:14</p>
    <div class="chat__turn chat__turn--end">
      <BubbleGroup ariaLabel="Messages from you" class="chat__group">
        <Bubble align="end" variant="primary">
          <BubbleContent>Yes! My card was charged twice for the renewal 🙁</BubbleContent>
        </Bubble>
        <Bubble align="end" variant="primary">
          <BubbleContent>(and the renewal email never arrived either)</BubbleContent>
          <BubbleReactions side="bottom" align="end" ariaLabel="Reactions">
            <button type="button" aria-pressed="true" aria-label="Heart, 1 reaction">
              <span aria-hidden="true">❤️</span> 1
            </button>
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>
      <Avatar name="Sam Visitor" size="sm" />
    </div>

    <!-- Keep alternating turns; add row-gap so reaction pills have room -->
    <p class="chat__meta">Mira · 09:15</p>
    <div class="chat__turn">
      <Avatar name="Mira Chen" size="sm" />
      <Bubble align="start" variant="muted">
        <BubbleContent>Confirmed — duplicate transaction at 14:02. Refund approved, lands in 3–5 business days.</BubbleContent>
      </Bubble>
    </div>

    <p class="chat__meta chat__meta--end">You · 09:16</p>
    <div class="chat__turn chat__turn--end">
      <Bubble align="end" variant="primary">
        <BubbleContent>Amazing, thank you! Will I get a confirmation email?</BubbleContent>
        <BubbleReactions side="bottom" align="start" ariaLabel="Reactions">
          <span aria-hidden="true">🙏 2</span>
        </BubbleReactions>
      </Bubble>
    </div>

    <p class="chat__meta">Mira · 09:17</p>
    <div class="chat__turn">
      <Avatar name="Mira Chen" size="sm" />
      <BubbleGroup ariaLabel="Messages from Mira" class="chat__group">
        <Bubble align="start" variant="muted">
          <BubbleContent>You will — and here's the refund reference for your records:</BubbleContent>
        </Bubble>
        <Bubble align="start" variant="outline">
          <BubbleContent><code>RFND-2026-09482</code></BubbleContent>
        </Bubble>
      </BubbleGroup>
    </div>

    <!-- Interactive bubble: a real button the user can pick -->
    <p class="chat__meta chat__meta--end">You · 09:18</p>
    <div class="chat__turn chat__turn--end">
      <Bubble align="end" variant="tinted">
        <button type="button" class="aui-bubble__content">Perfect — anything else I should know?</button>
      </Bubble>
    </div>

    <p class="chat__meta">Mira · 09:19</p>
    <div class="chat__turn">
      <Avatar name="Mira Chen" size="sm" />
      <Bubble align="start" variant="muted">
        <BubbleContent>All set on my side! I'll stay in this thread if anything else comes up. Quick actions before you go:</BubbleContent>
      </Bubble>
    </div>

    <!-- Suggested user actions -->
    <div class="chat__quick">
      <Button variant="outline" size="sm" shape="rounded">Email me the transcript</Button>
      <Button variant="outline" size="sm" shape="rounded">Rate this chat</Button>
      <Button variant="primary" size="sm" shape="rounded">Open new ticket</Button>
    </div>

    <!-- Ghost system event closes the thread -->
    <div class="chat__resolved">
      <Bubble align="start" variant="ghost">
        <BubbleContent>Ticket #4821 marked as <strong>resolved</strong> · Mira · 09:21</BubbleContent>
      </Bubble>
    </div>
  </div>

  <div class="chat__composer">
    <Input name="chat-message" placeholder="Type and press enter…" ariaLabel="Message" />
    <Button variant="primary" size="icon" shape="rounded" ariaLabel="Send message">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
    </Button>
  </div>
</div>

<style is:global>
  .chat { display: grid; gap: var(--ui-space-3); max-inline-size: 34rem; }
  .chat__head { display: flex; align-items: center; gap: var(--ui-space-2); padding-bottom: var(--ui-space-2); border-bottom: 1px solid var(--ui-border); }
  .chat__who { display: grid; gap: 2px; margin-inline-end: auto; }
  .chat__name { font-size: var(--ui-text-sm); font-weight: var(--ui-font-semibold); color: var(--ui-foreground); }
  .chat__sub { font-size: var(--ui-text-xs); color: var(--ui-muted-foreground); }
  .chat__thread { display: flex; flex-direction: column; gap: 1.75rem; max-block-size: 30rem; overflow-y: auto; overscroll-behavior: contain; scrollbar-width: thin; }
  .chat__meta { margin: 0; font-size: var(--ui-text-xs); color: var(--ui-muted-foreground); }
  .chat__meta--end { text-align: end; }
  .chat__turn { display: flex; align-items: flex-end; gap: var(--ui-space-2); }
  .chat__turn--end { flex-direction: row-reverse; }
  .chat__group { gap: var(--ui-space-1); }
  .chat__thread :is(.aui-bubble__content p) { margin: 0; }
  .chat__thread :is(.aui-bubble__content code) { padding: 0.05em 0.35em; background: color-mix(in srgb, currentcolor 10%, transparent); border-radius: var(--ui-radius-sm); font-family: var(--ui-font-mono); font-size: 0.85em; }
  .chat__quick { display: flex; flex-wrap: wrap; gap: var(--ui-space-2); }
  .chat__resolved { padding-inline-start: var(--ui-space-2); }
  .chat__composer { display: flex; align-items: center; gap: var(--ui-space-2); padding-top: var(--ui-space-2); border-top: 1px solid var(--ui-border); }
  .chat__composer :is(input, .aui-input) { flex: 1; }
</style>`,

    "breadcrumb-icons": `---
import { Card, Breadcrumb } from "astro-ui";

const home = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>';
const folder = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>';
const file = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M15 2v5h5"/></svg>';
---

<Card size="sm">
  <Breadcrumb
    separator="chevron"
    items={[
      { href: "#", label: "Home", icon: home },
      { href: "#", label: "Library", icon: folder },
      { label: "Breadcrumb", icon: file },
    ]}
  />
</Card>`,
};
