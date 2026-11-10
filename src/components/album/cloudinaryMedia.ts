const UPLOAD_MARKER = "/upload/";

export function cloudinaryUrl(url: string, transform: string) {
  if (!url.includes("res.cloudinary.com")) return url;
  const index = url.indexOf(UPLOAD_MARKER);
  if (index < 0) return url;
  return `${url.slice(0, index + UPLOAD_MARKER.length)}${transform}/${url.slice(index + UPLOAD_MARKER.length)}`;
}

export function albumThumbnail(url: string, resourceType: string) {
  if (resourceType === "video") return cloudinaryUrl(url, "so_0,c_limit,w_900,q_auto,f_jpg");
  return cloudinaryUrl(url, "c_limit,w_900,q_auto,f_auto");
}

export function albumLargeImage(url: string) {
  return cloudinaryUrl(url, "c_limit,w_2000,q_auto,f_auto");
}

export function albumHeaderImage(url: string) {
  return cloudinaryUrl(url, "c_limit,w_900,q_auto,f_auto");
}
