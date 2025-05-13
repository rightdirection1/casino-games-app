import { ReactNode } from "react";
import { languages } from "../i18n/config";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "../globals.css";

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params; // Await params if necessary in other contexts

  return (
    <html lang={locale}>
      <body>
        <header className="p-4 border-b flex justify-end">
          <LanguageSwitcher />
        </header>
        {children}
      </body>
    </html>
  );
}
