import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";

/**
 * `components` — one markdown file per component. Prose lives in the body
 * (overview, FAQ) while structured API data lives in frontmatter, so
 * pages stay data-driven and editors only touch markdown.
 */
const components = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/content/components"}),
    schema: z.object({
        /** URL slug, e.g. "button". */
        slug: z.string(),
        /** Display name. */
        name: z.string(),
        /** One-sentence summary for cards. */
        description: z.string(),
        // The overview prose is the markdown BODY (rendered via Content).
        /** Import snippet shown in the Usage section. */
        usage: z.string(),
        /** Category id from the registry. */
        category: z.enum([
            "general",
            "layout",
            "navigation",
            "forms",
            "data-display",
            "feedback",
            "overlay",
        ]),
        importPath: z.string(),
        exportName: z.string(),
        /** Component requires client JS to function. */
        js: z.boolean().default(false),
        /** Version the component appeared in. */
        since: z.string(),
        /** Flags the component as new. */
        isNew: z.boolean().default(false),
        /** Related component slugs. */
        related: z.array(z.string()).default([]),
        /** Feature bullets. */
        features: z.array(z.string()).default([]),
        /** Implemented accessibility notes (empty/omitted = purely presentational). */
        a11y: z.array(z.string()).default([]),
        /** API prop rows: [name, type, default, description]. */
        props: z
            .array(
                z.object({
                    name: z.string(),
                    type: z.string(),
                    def: z.string(),
                    description: z.string(),
                }),
            )
            .default([]),
        /** Slot rows. */
        slots: z
            .array(
                z.object({
                    name: z.string(),
                    description: z.string(),
                }),
            )
            .default([]),
        /** Q&A pairs shown in the FAQ section. */
        faq: z
            .array(
                z.object({
                    q: z.string(),
                    a: z.string(),
                }),
            )
            .default([]),
        /** Demo ids to render from the registry's Demos.astro (order + gating). */
        demoIds: z.array(z.string()).default([]),
        // NOTE: demo preview markup is intentionally NOT in frontmatter —
        // previews are real astro-ui components authored in Demos.astro;
        // the registry supplies their code. Only content lives here.
    }),
});

export const collections = {components};
