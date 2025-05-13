export const languages = ["en", "bg"] as const;
export type Locale = (typeof languages)[number];

export const defaultLocale: Locale = "en";
