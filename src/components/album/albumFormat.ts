import dayjs from "dayjs";
import "dayjs/locale/es";

export function formatAlbumDate(value: string) {
  return dayjs(value).locale("es").format("D [de] MMMM [de] YYYY");
}

export function momentLabel(count: number) {
  return count === 1 ? "1 momento" : `${count} momentos`;
}

export function albumTitle(name?: string | null) {
  const value = name?.trim();
  return value || "Nuestro álbum";
}

export function uploadProgressLabel(count: number) {
  return count === 1 ? "Subiendo 1 elemento..." : `Subiendo ${count} elementos...`;
}

export function uploadResultLabel(done: number) {
  if (done <= 0) return "";
  return done === 1 ? "Se agregó 1 elemento." : `Se agregaron ${done} elementos.`;
}

export function oversizeLabel(fileName: string, limit: string) {
  return `${fileName} supera el límite de ${limit}.`;
}
