# Security Policy

## Supported versions

| Version                                   | Supported                           |
|-------------------------------------------|-------------------------------------|
| `1.0.x`                                   | ✅ (latest stable line)             |
| `< 1.0` (old template / pre-release code) | ❌ unsupported — migrate to `1.0.0` |

## Reporting a vulnerability

**Do not open a public issue.** Email the maintainers (see
`package.json` repository) with:

1. Affected version + component,
2. Reproduction (markup/props/snippet),
3. Impact assessment if known.

Expect acknowledgment within 72 hours. We will coordinate a fix and a
patched release before any public disclosure.

## Scope & posture

AstroUI components render server-side markup and CSS. Current posture:

- No `eval`, no raw-HTML props, no `innerHTML` in the library. If a
  future component accepts HTML, it will be explicit, opt-in, and
  documented with sanitization guidance.
- URLs (`href`, `src`, …) are rendered as provided — apps must validate
  user-controlled URLs (e.g. allow-list `http(s):`, `mailto:`).
- Attribute forwarding is allow-list-shaped per component; event-handler
  strings are never accepted as props.
- `base.css` sets no cookies, performs no requests, and stores nothing;
  theme persistence in `web/` is demo-only code.
