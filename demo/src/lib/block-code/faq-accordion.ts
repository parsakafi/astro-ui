/** faq-accordion block — copy-paste-ready Astro markup. */
export const codeFaqAccordion = `---
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
/>`;
