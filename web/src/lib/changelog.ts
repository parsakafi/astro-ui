/**
 * Tiny CHANGELOG.md parser for the Releases page and per-component
 * changelog tabs. Keeps the site data-driven from a single markdown
 * file — no git history required.
 *
 * Format convention (already used in astro-ui/CHANGELOG.md):
 *
 *   ## [0.2.0](compare-url) - 2026-09-18
 *   ### Added
 *   - Feature text `Component` more text
 *
 * Entries whose bullet text mentions the component name (case-insensitive) surface on that component's Changelog tab.
 */

export interface ChangelogEntry {
    version: string;
    date?: string;
    /** compare link URL when the heading carries one. */
    url?: string;
    /** Section bullets keyed by lowercase section name (added/fixed/…). */
    sections: Record<string, string[]>;
}

const HEADING = /^##\s+\[?([^\]\s(]+)\]?(?:\(([^)]+)\))?\s*(?:[—–-]+\s*(.+))?$/;
const SECTION = /^###\s+(.+)$/;
const BULLET = /^[-*]\s+(.+)$/;

export function parseChangelog(markdown: string): ChangelogEntry[] {
    const entries: ChangelogEntry[] = [];
    let current: ChangelogEntry | null = null;
    let currentSection = "";

    for (const raw of markdown.split(/\r?\n/)) {
        const line = raw.trimEnd();
        if (!line) continue;

        const h = HEADING.exec(line);
        if (h) {
            current = {version: h[1], url: h[2], date: h[3]?.trim(), sections: {}};
            currentSection = "";
            entries.push(current);
            continue;
        }
        if (!current) continue;

        const s = SECTION.exec(line);
        if (s) {
            currentSection = s[1].toLowerCase();
            current.sections[currentSection] = current.sections[currentSection] ?? [];
            continue;
        }
        if (currentSection) {
            const b = BULLET.exec(line);
            if (b) current.sections[currentSection]?.push(b[1]);
        }
    }
    return entries;
}

/**
 * Render a changelog bullet to safe HTML: escape everything, then
 * re-add `code` spans and **bold**. Never inject raw markdown — bullets
 * routinely mention elements like `<select>`/`<dialog>`, and an unclosed
 * literal `<select>` swallows the rest of the page in HTML parsing.
 */
export function renderBullet(markdown: string): string {
    const escaped = markdown
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    return escaped
        .replace(/`([^`]+)`/g, "<code>$1</code>")
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

/** Bullets that mention `name` (word-ish match), grouped by section. */
export function forComponent(
    entries: ChangelogEntry[],
    name: string,
): Pick<ChangelogEntry, "version" | "date" | "sections">[] {
    const re = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    return entries
        .map((e) => ({
            version: e.version,
            date: e.date,
            sections: Object.fromEntries(
                Object.entries(e.sections)
                    .map(([k, bullets]) => [k, bullets.filter((b) => re.test(b))])
                    .filter(([, bullets]) => (bullets as string[]).length > 0),
            ),
        }))
        .filter((e) => Object.keys(e.sections).length > 0);
}
