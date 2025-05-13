import type { Locale } from "./config";

export const getDictionary = async (locale: Locale) =>
  import(`../dictionaries/${locale}.json`).then((mod) => mod.default);
