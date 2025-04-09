// messages/index.ts
export async function getMessages(locale: string) {
    try {
      return (await import(`./translations/${locale}.json`)).default;
    } catch (error) {
      console.error('Failed to load messages', error);
      return {};
    }
  }