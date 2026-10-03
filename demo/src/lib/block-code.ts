/**
 * Block source code — copy-paste-ready Astro markup for every block.
 * One file per block lives in ./block-code/; this barrel keeps the
 * original blockCode map for existing importers.
 */
import {codeSignin} from "./block-code/signin";
import {codeSignup} from "./block-code/signup";
import {codeForgotPassword} from "./block-code/forgot-password";
import {codePricingTiers} from "./block-code/pricing-tiers";
import {codeStatsBand} from "./block-code/stats-band";
import {codeStatsCircles} from "./block-code/stats-circles";
import {codeCtaBand} from "./block-code/cta-band";
import {codeSettingsPanel} from "./block-code/settings-panel";
import {codeTeamMembers} from "./block-code/team-members";
import {codeEmptyState} from "./block-code/empty-state";
import {codeFaqAccordion} from "./block-code/faq-accordion";
import {codeChangelogEntry} from "./block-code/changelog-entry";
import {codeCompactSocialProof} from "./block-code/compact-social-proof";
import {codeAvatarGroupHoverTooltips} from "./block-code/avatar-group-hover-tooltips";
import {codeAvatarSocialProofLabel} from "./block-code/avatar-social-proof-label";
import {codePillButtonWithAvatar} from "./block-code/pill-button-with-avatar";
import {codeAvatarGroupHoverTooltipsV2} from "./block-code/avatar-group-hover-tooltips-v2";
import {codeAvatarEmptyState} from "./block-code/avatar-empty-state";
import {codeBreadcrumbProjectInfo} from "./block-code/breadcrumb-project-info";
import {codeBreadcrumbAvatars} from "./block-code/breadcrumb-avatars";
import {codePasswordGenerator} from "./block-code/password-generator";
import {codeCapitalInflows} from "./block-code/capital-inflows";
import {codeAnalyticsDashboard} from "./block-code/analytics-dashboard";
import {codeChatSupport} from "./block-code/chat-support";
import {codeBreadcrumbIcons} from "./block-code/breadcrumb-icons";

export const blockCode: Record<string, string> = {
	"signin": codeSignin,
	"signup": codeSignup,
	"forgot-password": codeForgotPassword,
	"pricing-tiers": codePricingTiers,
	"stats-band": codeStatsBand,
	"stats-circles": codeStatsCircles,
	"cta-band": codeCtaBand,
	"settings-panel": codeSettingsPanel,
	"team-members": codeTeamMembers,
	"empty-state": codeEmptyState,
	"faq-accordion": codeFaqAccordion,
	"changelog-entry": codeChangelogEntry,
	"compact-social-proof": codeCompactSocialProof,
	"avatar-group-hover-tooltips": codeAvatarGroupHoverTooltips,
	"avatar-social-proof-label": codeAvatarSocialProofLabel,
	"pill-button-with-avatar": codePillButtonWithAvatar,
	"avatar-group-hover-tooltips-v2": codeAvatarGroupHoverTooltipsV2,
	"avatar-empty-state": codeAvatarEmptyState,
	"breadcrumb-project-info": codeBreadcrumbProjectInfo,
	"breadcrumb-avatars": codeBreadcrumbAvatars,
	"password-generator": codePasswordGenerator,
	"capital-inflows": codeCapitalInflows,
	"analytics-dashboard": codeAnalyticsDashboard,
	"chat-support": codeChatSupport,
	"breadcrumb-icons": codeBreadcrumbIcons,
};
