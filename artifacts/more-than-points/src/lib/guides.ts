export type GuideSource = "learning-styles-guide" | "learning-style-quiz" | "parents-guide";

export type VarkKey = "V" | "A" | "R" | "K";

export type VarkProfile = Record<VarkKey, number>;

export const GUIDES: Record<GuideSource, { label: string; shortLabel: string; to: string; pdfFilename?: string }> = {
  "learning-styles-guide": {
    label: "Discover Your Learning Style — the full guide",
    shortLabel: "Discover Your Learning Style",
    to: "/guides/discover-your-learning-style",
    pdfFilename: "more-than-points-learning-styles-guide.pdf",
  },
  "learning-style-quiz": {
    label: "What's my learning style? Take the quiz",
    shortLabel: "Learning Style Quiz",
    to: "/guides/learning-style-quiz",
  },
  "parents-guide": {
    label: "Beyond the Points — a parent's guide",
    shortLabel: "Parent's Guide",
    to: "/guides/parents-guide-beyond-the-points",
    pdfFilename: "more-than-points-parents-guide.pdf",
  },
};

export const GUIDE_ORDER: GuideSource[] = ["learning-style-quiz", "learning-styles-guide", "parents-guide"];

export function pdfUrl(filename: string): string {
  return `${import.meta.env.BASE_URL}${filename}`;
}

export function formatVarkProfile(profile: VarkProfile): string {
  return `V:${profile.V}% A:${profile.A}% R:${profile.R}% K:${profile.K}%`;
}
