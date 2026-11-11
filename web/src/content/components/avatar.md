---
slug: "avatar"
name: "Avatar"
description: >-
  User image with initials fallback, status badges, rings, groups, and loading state.
category: data-display
importPath: "astro-ui"
exportName: "Avatar"
js: false
since: "0.1.0"
isNew: false
related: ["badge", "tooltip", "card"]
features:
  - "Status badges: online/away/busy/offline on any corner, with accessible labels"
  - "Rings in five token colors plus the background key line"
  - "Radius overrides (none/sm/md/lg/full) on top of circle/square/rounded shapes"
  - "Custom explicit sizes (px or rem) alongside the 7-step size scale"
  - "Grayscale filter with optional hover-to-restore"
  - "Loading state with spinner veil over the media"
  - "Badge slot for counts, checkmarks, or icon badges"
  - "AvatarGroup: overlap stack, numeric/icon count chip, hover spread"
a11y:
  - "Root carries role=img with an accessible name (aria-label or resolved alt)"
  - "Status dot is role=status with a spoken label (Online, Away, Do not disturb, Offline)"
  - "Loading veil is aria-hidden decoration; the avatar keeps its name throughout"
  - "Group is role=group with a default User group label; the count chip keeps its text content"
usage: |-
  ---
  import { Avatar, AvatarGroup } from "astro-ui";
  ---
  
  <Avatar name="Ada Lovelace" src="/ada.jpg" />
  <Avatar name="Grace" status="online" />
  <Avatar name="Alan" ring="primary" size="lg" />
  
  <AvatarGroup hover>
    <Avatar name="Ada" /><Avatar name="Grace" />
    <Fragment slot="count">+3</Fragment>
  </AvatarGroup>
demoIds: ["basic", "shapes", "image", "radius", "sizes", "custom-size", "status", "status-positions", "badge-icon", "solid-fallback", "group-basic", "group-icon-count", "group-numeric-count", "group-status", "grayscale", "group-hover", "custom-badge", "multi-badge", "ring-gradient", "ring-animated", "loading", "compact-social-proof", "avatar-group-hover-tooltips", "avatar-social-proof-label", "pill-button-with-avatar", "avatar-group-hover-tooltips-v2", "avatar-empty-state"]
props:
  - name: "src"
    type: "string"
    def: "—"
    description: "Image URL; astro:assets optimization when resolvable."
  - name: "name"
    type: "string"
    def: "—"
    description: "Full name — drives the accessible name and initials fallback."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"2xl\" | \"3xl\""
    def: "\"md\""
    description: "Seven-step size scale."
  - name: "customSize"
    type: "string | number"
    def: "—"
    description: "Explicit box size (px number or CSS length) overriding size."
  - name: "radius"
    type: "\"none\" | \"sm\" | \"md\" | \"lg\" | \"full\""
    def: "—"
    description: "Corner override on top of shape."
  - name: "status"
    type: "\"online\" | \"away\" | \"busy\" | \"offline\""
    def: "—"
    description: "Presence dot rendered on a corner."
  - name: "statusPosition"
    type: "\"top-left\" | \"top-right\" | \"bottom-left\" | \"bottom-right\""
    def: "\"bottom-right\""
    description: "Corner carrying the status dot."
  - name: "badgePosition"
    type: "\"top-left\" | \"top-right\" | \"bottom-left\" | \"bottom-right\""
    def: "\"top-right\""
    description: "Corner anchoring slotted badges to the avatar's border."
  - name: "statusLabel"
    type: "string"
    def: "per status"
    description: "Accessible label for the status indicator."
  - name: "ring"
    type: "\"primary\" | \"success\" | \"warning\" | \"error\" | \"info\" | \"background\""
    def: "—"
    description: "Colored ring with background key line."
  - name: "filter"
    type: "\"none\" | \"grayscale\""
    def: "\"none\""
    description: "Image filter treatment."
  - name: "filterHover"
    type: "boolean"
    def: "false"
    description: "Restores color on hover when filter=grayscale."
  - name: "loading"
    type: "boolean"
    def: "false"
    description: "Spinner veil over the media."
  - name: "variant"
    type: "8 token colors"
    def: "\"inherit\""
    description: "Fallback background scheme (solid color fallbacks)."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
faq:
  - q: "How do I add a notification count?"
    a: "Use the badge slot: <Avatar><Badge slot=\"badge\" variant=\"error\">3</Badge></Avatar>. Combine with status for two independent indicators."
  - q: "How does the gradient/animated ring work?"
    a: "The ring demos compose a wrapper with a conic-gradient background behind the avatar (see each demo's code tab). The ring prop covers static rings; animated story rings stay in user CSS."
---

Avatar renders an <img> when src is provided, otherwise initials derived from name. Beyond the base surface it composes the extras design systems need: an online status badge (four states, four corners), colored rings, radius overrides, custom explicit sizes, a grayscale filter (with hover-to-restore), a loading spinner veil, and a badge slot for counts or checkmarks. AvatarGroup stacks avatars with overlap and an optional trailing count chip (numeric or icon) with an optional hover-spread.
