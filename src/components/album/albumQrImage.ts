import QRCode from "qrcode";

const MIN_PX = 1024;
const QUIET_MODULES = 4;

export function buildAlbumQr(url: string) {
  const qr = QRCode.create(url, { errorCorrectionLevel: "M" });
  const modules = qr.modules.size;
  const cells = modules + QUIET_MODULES * 2;
  const modulePx = Math.max(1, Math.ceil(MIN_PX / cells));
  const size = cells * modulePx;
  const dark = new Uint8Array(modules * modules);

  for (let y = 0; y < modules; y += 1) {
    for (let x = 0; x < modules; x += 1) {
      if (qr.modules.get(y, x)) dark[y * modules + x] = 1;
    }
  }

  return { modules, modulePx, size, margin: QUIET_MODULES, dark };
}

export function paintAlbumQr(canvas: HTMLCanvasElement, url: string) {
  const qr = buildAlbumQr(url);
  const ctx = canvas.getContext("2d");
  if (!ctx) return qr.size;

  canvas.width = qr.size;
  canvas.height = qr.size;
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, qr.size, qr.size);
  ctx.fillStyle = "#000000";

  for (let y = 0; y < qr.modules; y += 1) {
    for (let x = 0; x < qr.modules; x += 1) {
      if (!qr.dark[y * qr.modules + x]) continue;
      ctx.fillRect((x + qr.margin) * qr.modulePx, (y + qr.margin) * qr.modulePx, qr.modulePx, qr.modulePx);
    }
  }

  return qr.size;
}

export function downloadAlbumQr(canvas: HTMLCanvasElement, slug: string) {
  const safeSlug = slug.replace(/[^a-z0-9-]/gi, "") || "album";
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = `QR-Album-${safeSlug}.png`;
  link.click();
}
