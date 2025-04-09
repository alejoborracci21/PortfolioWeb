// src/app/[locale]/layout.tsx
import "./globals.css";
import { NoiseBackground } from "@/components/background";
import { DarkNavbar } from "@/components/dark-navbar";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Alejo Borracci",
  description: "Mi portfolio personal"
};

const locales = ['en', 'es'];

export const generateStaticParams = async () => {
  return locales.map(locale => ({ locale }));
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale }).catch((err) => {
    console.error("❌ Error loading messages:", err);
    notFound();
  });

  return (
    <html lang={locale} className="dark">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NoiseBackground />
          <DarkNavbar />
          <div id="transition-container">{children}</div>
          <div className="vignette" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
