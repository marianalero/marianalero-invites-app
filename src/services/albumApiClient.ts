import { createApiAuthClient } from "./api";
import { readApiError } from "./invitationApiClient";
import type { ManagedAlbum, PublicAlbum, PublicAlbumItem } from "../models/album";

const apiClient = createApiAuthClient();

async function getPublicAlbum(slug: string): Promise<PublicAlbum> {
  const { data } = await apiClient.get<PublicAlbum>(`invitacion/${encodeURIComponent(slug)}/album`);
  return data;
}

type AlbumDirectUpload = {
  cloudName: string;
  apiKey: string;
  timestamp: number;
  folder: string;
  resourceType: string;
  allowedFormats: string;
  transformation?: string | null;
  signature: string;
};

type CloudinaryUploadResult = {
  public_id: string;
  secure_url: string;
  resource_type: string;
  format?: string;
  width?: number;
  height?: number;
  bytes?: number;
  duration?: number;
};

async function uploadAlbumFile(
  slug: string,
  file: File,
  onProgress?: (percent: number) => void,
): Promise<PublicAlbumItem> {
  const resourceType = isVideo(file) ? "video" : "image";
  const { data: signature } = await apiClient.post<AlbumDirectUpload>(
    `invitacion/${encodeURIComponent(slug)}/album/firma`,
    { resourceType },
  );
  const uploaded = await postToCloudinary(signature, file, onProgress);
  const { data } = await apiClient.post<PublicAlbumItem>(`invitacion/${encodeURIComponent(slug)}/album`, {
    publicId: uploaded.public_id,
    secureUrl: uploaded.secure_url,
    resourceType: uploaded.resource_type,
    format: uploaded.format,
    width: uploaded.width,
    height: uploaded.height,
    bytes: uploaded.bytes,
    duration: uploaded.duration,
  });
  return data;
}

function postToCloudinary(signature: AlbumDirectUpload, file: File, onProgress?: (percent: number) => void) {
  const body = new FormData();
  body.append("file", file);
  body.append("api_key", signature.apiKey);
  body.append("timestamp", String(signature.timestamp));
  body.append("folder", signature.folder);
  body.append("allowed_formats", signature.allowedFormats);
  if (signature.transformation) body.append("transformation", signature.transformation);
  body.append("signature", signature.signature);

  return new Promise<CloudinaryUploadResult>((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("POST", `https://api.cloudinary.com/v1_1/${signature.cloudName}/${signature.resourceType}/upload`);
    request.upload.onprogress = (event) => {
      if (event.lengthComputable) onProgress?.(Math.round((event.loaded / event.total) * 100));
    };
    request.onerror = () => reject(new Error("No se pudo subir el archivo."));
    request.onload = () => {
      if (request.status < 200 || request.status >= 300) {
        reject(new Error("No se pudo subir el archivo."));
        return;
      }
      resolve(JSON.parse(request.responseText) as CloudinaryUploadResult);
    };
    request.send(body);
  });
}

function isVideo(file: File) {
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  return ["mp4", "mov", "webm"].includes(extension);
}

async function getManagedAlbum(invitationId: number): Promise<ManagedAlbum> {
  const { data } = await apiClient.get<ManagedAlbum>(`invitation/${invitationId}/album`);
  return data;
}

async function deleteAlbumItem(invitationId: number, itemId: number): Promise<void> {
  await apiClient.delete(`invitation/${invitationId}/album/${itemId}`);
}

export { deleteAlbumItem, getManagedAlbum, getPublicAlbum, readApiError, uploadAlbumFile };
