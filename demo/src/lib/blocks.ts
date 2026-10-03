/**
 * Blocks registry — subject-categorized composed sections.
 *
 * Single source of truth for the /blocks/ catalog, the per-category
 * pages, per-block detail pages, the sidebar tree, the search index,
 * and the nav/footer links. Block MARKUP lives in the demo module
 * (real astro-ui JSX); this module describes each block so other
 * surfaces can link, count, and search them.
 */
import {SITE} from "./site";

/** Parses a recipe string into component names for linking/resolving. */
export function parseRecipe(recipe: string): string[] {
    return recipe.split("·").map((part) => part.trim()).filter(Boolean);
}

export interface BlockDef {
    /** URL anchor on the category page (also the section id). */
    id: string;
    /** Display name. */
    title: string;
    /** Compact label for the blocks sidebar. */
    sidebarTitle?: string;
    /** One-line description for cards/search. */
    description: string;
    /** Component recipe, e.g. "Card · Input · Button". */
    recipe: string;
    /** Roughly how much markup the block carries. */
    complexity?: "simple" | "medium" | "complex";
}

export interface BlockCategory {
    /** URL segment for the category page, e.g. "application". */
    id: string;
    /** Category label, e.g. "Application". */
    label: string;
    /** Short category description shown on catalog + category page. */
    description: string;
    /** Sidebar icon glyph. */
    icon: string;
    blocks: BlockDef[];
}

export const blockCategories: BlockCategory[] = [
    {
        id: "application",
        label: "Application",
        description: "In-product surfaces: forms, settings, members, empty states.",
        icon: "◧",
        blocks: [
            {
                id: "settings-panel",
                title: "Settings panel",
                description: "Notification switches, workspace form, and a plan row.",
                recipe: "Card · Switch · Input · Tag · Button",
                complexity: "complex",
            },
            {
                id: "team-members",
                title: "Team members",
                description: "Member list with avatars, role badges, and invite action.",
                recipe: "Card · Avatar · Badge · Button",
                complexity: "medium",
            },
            {
                id: "empty-state",
                title: "Empty state",
                description: "Zero-data panel with icon, copy, and next-step actions.",
                recipe: "Empty · Button",
                complexity: "simple",
            },
            // SOCIAL PROOF / AVATAR COMPOSITIONS
            {
                id: "compact-social-proof",
                title: "Compact social proof with initials",
                sidebarTitle: "Initials social proof",
                description: "Initial-based avatar row with a trust line for signup and onboarding flows.",
                recipe: "Avatar · Label · Text",
                complexity: "simple",
            },
            {
                id: "avatar-group-hover-tooltips",
                title: "Avatar group with hover tooltips and lift effect",
                sidebarTitle: "Hover tooltips",
                description: "Hover-spread avatar stack where each avatar shows a name tooltip on hover.",
                recipe: "Avatar · AvatarGroup · Tooltip",
                complexity: "medium",
            },
            {
                id: "avatar-social-proof-label",
                title: "Avatar social proof with text label",
                sidebarTitle: "Social proof label",
                description: "Named avatar cluster paired with a social-proof headline and count.",
                recipe: "Avatar · AvatarGroup · Label · Text",
                complexity: "simple",
            },
            {
                id: "pill-button-with-avatar",
                title: "Pill small outline button with avatar",
                sidebarTitle: "Avatar pill",
                description: "Compact pill button pairing a tiny avatar with a label for mention-style chips.",
                recipe: "Button · Avatar",
                complexity: "simple",
            },
            {
                id: "avatar-group-hover-tooltips-v2",
                title: "Avatar group with hover effect and tooltips",
                sidebarTitle: "Lift + tooltips",
                description: "Stacked avatars that lift on hover with name tooltips — denser social proof variant.",
                recipe: "Avatar · AvatarGroup · Tooltip",
                complexity: "medium",
            },
            {
                id: "avatar-empty-state",
                title: "Avatar inside an empty state example",
                sidebarTitle: "Avatar empty state",
                description: "Empty state that leads with a single avatar and a next-step CTA.",
                recipe: "Empty · Avatar · Button",
                complexity: "simple",
            },
            // BREADCRUMB COMPOSITIONS
            {
                id: "breadcrumb-project-info",
                title: "Breadcrumb with project, user and document info",
                sidebarTitle: "Project trail",
                description: "File-surface breadcrumb pairing project and user avatars with the open document and version badge.",
                recipe: "Breadcrumb · Avatar · Badge",
                complexity: "simple",
            },
            {
                id: "breadcrumb-avatars",
                title: "Breadcrumb items with avatars",
                sidebarTitle: "Avatar trail",
                description: "Navigation trail where every segment is represented by an avatar.",
                recipe: "Breadcrumb · Avatar",
                complexity: "simple",
            },
            {
                id: "breadcrumb-icons",
                title: "Breadcrumb with icons for each item",
                sidebarTitle: "Icon trail",
                description: "File-browser breadcrumb with an icon on every segment, wrapped in a card.",
                recipe: "Card · Breadcrumb",
                complexity: "simple",
            },
            {
                id: "password-generator",
                title: "Password generator",
                sidebarTitle: "Password generator",
                description: "Generate a strong password: length slider, character-set switches, and a one-click generate action.",
                recipe: "Card · Slider · Switch · Button",
                complexity: "medium",
            },
            {
                id: "capital-inflows",
                title: "Capital inflows summary",
                sidebarTitle: "Capital inflows",
                description: "Fund leaderboard: part-to-whole segmented bar, headline total with trend badge, and per-fund rows with values.",
                recipe: "Card · Chart · Badge",
                complexity: "medium",
            },
            {
                id: "chat-support",
                title: "Support chat thread",
                sidebarTitle: "Support chat",
                description: "Operator + customer conversation: grouped bubbles, reactions, quick-reply buttons, and a composer.",
                recipe: "Bubble · BubbleGroup · Avatar · Button · Input",
                complexity: "complex",
            },
        ],
    },
    {
        id: "auth",
        label: "Auth",
        description: "Sign-in, sign-up, and recovery flows built on native form controls.",
        icon: "▲",
        blocks: [
            {
                id: "signin",
                title: "Sign in",
                description: "Email + password card with remember-me, social button, and separator.",
                recipe: "Card · Input · Checkbox · Button · Separator",
                complexity: "medium",
            },
            {
                id: "signup",
                title: "Sign up",
                description: "Registration card with name/email/password fields and terms checkbox.",
                recipe: "Card · Input · Checkbox · Button",
                complexity: "medium",
            },
            {
                id: "forgot-password",
                title: "Forgot password",
                description: "Compact recovery card — one field, one action, helper text.",
                recipe: "Card · Input · Button",
                complexity: "simple",
            },
        ],
    },
    {
        id: "marketing",
        label: "Marketing",
        description: "Conversion-oriented sections: pricing tiers, metric bands, CTA.",
        icon: "◈",
        blocks: [
            {
                id: "analytics-dashboard",
                title: "Analytics dashboard",
                sidebarTitle: "Analytics",
                description: "KPI cards with trend badges over an engagement line chart and a traffic-source donut.",
                recipe: "Card · Chart · Badge · Button",
                complexity: "complex",
            },
            {
                id: "pricing-tiers",
                title: "Pricing tiers",
                description: "Three plan cards with a highlighted middle tier and feature lists.",
                recipe: "Card · Badge · Button",
                complexity: "complex",
            },
            {
                id: "stats-band",
                title: "Stats band",
                description: "Metric cards with progress bars and trend badges.",
                recipe: "Card · Progress · Badge",
                complexity: "medium",
            },
            {
                id: "stats-circles",
                title: "Circle stats",
                description: "KPI cards with circular progress rings — compact at-a-glance metrics.",
                recipe: "Card · Progress (circle) · Badge",
                complexity: "medium",
            },
            {
                id: "cta-band",
                title: "CTA band",
                description: "Full-width conversion band with gradient atmosphere.",
                recipe: "Badge · Button",
                complexity: "simple",
            },
        ],
    },
    {
        id: "content",
        label: "Content",
        description: "Answer and documentation sections that stay searchable when collapsed.",
        icon: "≡",
        blocks: [
            {
                id: "faq-accordion",
                title: "FAQ accordion",
                description: "Bordered accordion answer section with rotating chevrons.",
                recipe: "Accordion",
                complexity: "simple",
            },
            {
                id: "changelog-entry",
                title: "Changelog entry",
                description: "Dated release entry with version badge and change list.",
                recipe: "Card · Badge · Kbd",
                complexity: "simple",
            },
        ],
    },
];

/** Flat block list for search/menus. */
export const allBlocks: (BlockDef & { category: string; categoryId: string })[] =
    blockCategories.flatMap((cat) =>
        cat.blocks.map((block) => ({
            ...block,
            category: cat.label,
            categoryId: cat.id,
        })),
    );

export const blockCount = allBlocks.length;

/** URL for a block's detail page. */
export function blockHref(block: { id: string; categoryId: string }): string {
    return `/blocks/${block.categoryId}/${block.id}/`;
}

/** URL for a category page. */
export function categoryHref(categoryId: string): string {
    return `/blocks/${categoryId}/`;
}

/** All-blocks page URL. */
export const blocksIndexHref = "/blocks/";

/** Look up a category + block pair from URL params (null when invalid). */
export function findBlock(categoryId: string, blockId: string) {
    const category = blockCategories.find((c) => c.id === categoryId);
    const block = category?.blocks.find((b) => b.id === blockId);
    if (!category || !block) return null;
    const index = allBlocks.findIndex(
        (b) => b.categoryId === categoryId && b.id === blockId,
    );
    return {
        category,
        block,
        prev: index > 0 ? allBlocks[index - 1] : undefined,
        next:
            index !== -1 && index < allBlocks.length - 1
                ? allBlocks[index + 1]
                : undefined,
    };
}

export {SITE};
