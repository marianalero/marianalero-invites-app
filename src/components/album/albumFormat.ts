import dayjs from "dayjs";
import "dayjs/locale/es";

export function formatAlbumDate(value: string) {
  return dayjs(value).locale("es").format("D [de] MMMM [de] YYYY");
}

export function momentLabel(count: number) {
  return count === 1 ? "1 momento" : `${count} momentos`;
}

export function coupleNames(bride?: string | null, groom?: string | null) {
  const left = bride?.trim();
  const right = groom?.trim();
  if (left && right) return `${left} & ${right}`;
  return left || right || "Nuestro álbum";
}

export function uploadSummary(done: number, failed: number) {
  const uploaded = done === 1 ? "1 archivo subido correctamente." : `${done} archivos subidos correctamente.`;
  const rejected = failed === 1 ? "1 archivo no pudo subirse." : `${failed} archivos no pudieron subirse.`;
  if (done > 0 && failed > 0) return `${uploaded} ${rejected}`;
  if (failed > 0) return rejected;
  return uploaded;
}
