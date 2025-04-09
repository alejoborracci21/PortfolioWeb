// i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale || 'en'; // Provide a default locale, e.g., 'en'
  return {
    locale: resolvedLocale,
    messages: (await import(`../src/messages/${resolvedLocale}.json`)).default
  };
});
