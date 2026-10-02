/**
 * Token playground groups — the editable buckets on /docs/styling/.
 *
 * Every `--ui-*` variable in the light `:root` block of tokens.css must
 * appear in exactly one group (enforced by tests/token-groups.test.ts),
 * so the playground never drifts behind the token file.
 */
export interface TokenGroup {
  title: string;
  tokens: string[];
}

export const tokenGroups: TokenGroup[] = [
  {
    title: "Surfaces",
    tokens: [
      "--ui-background",
      "--ui-foreground",
      "--ui-secondary",
      "--ui-secondary-foreground",
      "--ui-secondary-hover",
      "--ui-muted",
      "--ui-muted-foreground",
      "--ui-border",
      "--ui-border-width",
      "--ui-input",
      "--ui-ring",
      "--ui-carbon",
      "--ui-carbon-foreground",
    ],
  },
  {
    title: "Brand",
    tokens: [
      "--ui-primary",
      "--ui-primary-foreground",
      "--ui-primary-hover",
      "--ui-accent",
      "--ui-accent-foreground",
    ],
  },
  {
    title: "Feedback",
    tokens: [
      "--ui-success",
      "--ui-success-foreground",
      "--ui-success-muted",
      "--ui-warning",
      "--ui-warning-foreground",
      "--ui-warning-muted",
      "--ui-error",
      "--ui-error-foreground",
      "--ui-error-muted",
      "--ui-info",
      "--ui-info-foreground",
      "--ui-info-muted",
    ],
  },
  {
    title: "Chart",
    tokens: [
      "--ui-chart-1",
      "--ui-chart-2",
      "--ui-chart-3",
      "--ui-chart-4",
      "--ui-chart-5",
      "--ui-chart-6",
    ],
  },
  {
    title: "Type",
    tokens: [
      "--ui-font-sans",
      "--ui-font-mono",
      "--ui-font-normal",
      "--ui-font-medium",
      "--ui-font-semibold",
      "--ui-font-bold",
      "--ui-text-2xs",
      "--ui-text-xs",
      "--ui-text-sm",
      "--ui-text-md",
      "--ui-text-base",
      "--ui-text-lg",
      "--ui-text-xl",
      "--ui-text-2xl",
      "--ui-leading-none",
      "--ui-leading-tight",
      "--ui-leading-normal",
    ],
  },
  {
    title: "Shape & space",
    tokens: [
      "--ui-radius-none",
      "--ui-radius-sm",
      "--ui-radius-md",
      "--ui-radius-lg",
      "--ui-radius-xl",
      "--ui-radius-full",
      "--ui-corner-shape",
      "--ui-space-0",
      "--ui-space-1",
      "--ui-space-2",
      "--ui-space-3",
      "--ui-space-4",
      "--ui-space-5",
      "--ui-space-6",
      "--ui-space-8",
      "--ui-space-10",
      "--ui-space-12",
      "--ui-disabled-opacity",
    ],
  },
  {
    title: "Elevation & motion",
    tokens: [
      "--ui-shadow-sm",
      "--ui-shadow-md",
      "--ui-shadow-lg",
      "--ui-shadow-xl",
      "--ui-transition-fast",
      "--ui-transition-normal",
      "--ui-transition-slow",
      "--ui-z-dropdown",
      "--ui-z-dialog",
      "--ui-z-popover",
      "--ui-z-toast",
      "--ui-z-tooltip",
      "--ui-focus-ring-width",
      "--ui-focus-ring-offset",
    ],
  },
];
