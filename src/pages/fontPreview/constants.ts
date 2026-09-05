export const FONTS_PER_WHATSAPP_IMAGE = 8;
export const EXPORT_WIDTH = 1080;
export const EXPORT_PADDING_PX = 48;
export const EXPORT_PIXEL_RATIO = 2;

export const chunkItems = <T,>(items: T[], size: number = FONTS_PER_WHATSAPP_IMAGE): T[][] => {
  if (size <= 0) {
    return [items];
  }

  const pages: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    pages.push(items.slice(index, index + size));
  }
  return pages;
};
