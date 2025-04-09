// src/app/i18n.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    throw new Error('Locale is undefined');
  }

  // Ajusta la ruta según donde estén tus archivos de mensajes
  // Si están en src/messages:
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
  
  // O si están en la raíz:
  // return {
  //   messages: (await import(`../../messages/${locale}.json`)).default
  // };
});