export const stringJsonParser = <T>(value?: string | null): T | undefined => {
  try {
    return value ? JSON.parse(value) : undefined;
  } catch (error) {
    console.error('Error when parsing JSON', error);
    return undefined;
  }
};
