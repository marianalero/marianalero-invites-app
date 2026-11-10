// Album URLs already arrive limited by the API (incoming upload + CloudinaryDelivery).
// Do not append q_auto, f_auto, or video frame transforms here: each extra
// derived URL spends Cloudinary transformation credits.

export function cloudinaryUrl(url: string) {
  return url;
}

export function albumThumbnail(url: string) {
  return url;
}

export function albumLargeImage(url: string) {
  return url;
}

export function albumHeaderImage(url: string) {
  return url;
}
