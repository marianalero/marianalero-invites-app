const MAX_EDGE = 2000;

export async function prepareAlbumImage(file: File): Promise<File> {
  if (!isImage(file) || typeof createImageBitmap !== "function") return file;

  let bitmap: ImageBitmap | null = null;
  try {
    bitmap = await createImageBitmap(file);
    const largest = Math.max(bitmap.width, bitmap.height);
    if (!largest || largest <= MAX_EDGE) return file;

    const scale = MAX_EDGE / largest;
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) return file;
    context.drawImage(bitmap, 0, 0, width, height);

    const type = file.type === "image/png" ? "image/png" : file.type === "image/webp" ? "image/webp" : "image/jpeg";
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob((result) => resolve(result), type, 0.86));
    if (!blob || blob.size >= file.size) return file;

    const extension = type === "image/png" ? "png" : type === "image/webp" ? "webp" : "jpg";
    const base = file.name.replace(/\.[^.]+$/, "") || "foto";
    return new File([blob], `${base}.${extension}`, { type, lastModified: file.lastModified });
  } catch {
    return file;
  } finally {
    bitmap?.close();
  }
}

function isImage(file: File) {
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  return ["jpg", "jpeg", "png", "webp"].includes(extension);
}
