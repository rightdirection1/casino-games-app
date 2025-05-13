"use client";

import { usePathname, useRouter } from "next/navigation";
import { languages } from "../i18n/config";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (lang: string) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
  };

  return (
    <select
      defaultValue={pathname.split("/")[1]}
      onChange={(e) => handleChange(e.target.value)}
      className="border p-2 rounded"
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
