import { createApiAuthClient } from "./api";
import type {
  CloudinaryUploadResponse,
  CloudinaryUploadSignature,
  InvitationAsset,
} from "../models/invitationAsset";

const apiClient = createApiAuthClient();

type UploadAssetInput = {
  file: File;
  mediaKey: string;
  assetKind: string;
  invitationId?: number;
  sortOrder?: number;
  onProgress?: (percent: number) => void;
};

async function getAssets(mediaKey: string): Promise<InvitationAsset[]> {
  const { data } = await apiClient.get<InvitationAsset[]>(`media/${mediaKey}`);
  return data;
}

async function deleteInvitationAsset(id: number): Promise<void> {
  await apiClient.delete(`media/${id}`);
}

async function uploadInvitationAsset(input: UploadAssetInput): Promise<InvitationAsset> {
  const { data: signature } = await apiClient.post<CloudinaryUploadSignature>(
    "media/upload-signature",
    { mediaKey: input.mediaKey, invitationId: input.invitationId },
  );

  const body = new FormData();
  body.append("file", input.file);
  body.append("api_key", signature.apiKey);
  body.append("timestamp", String(signature.timestamp));
  body.append("folder", signature.folder);
  body.append("signature", signature.signature);

  const uploaded = await uploadToCloudinary(
    `https://api.cloudinary.com/v1_1/${signature.cloudName}/image/upload`,
    body,
    input.onProgress,
  );
  const { data } = await apiClient.post<InvitationAsset>("media", {
    invitationId: input.invitationId,
    mediaKey: input.mediaKey,
    publicId: uploaded.public_id,
    secureUrl: uploaded.secure_url,
    assetKind: input.assetKind,
    resourceType: uploaded.resource_type,
    format: uploaded.format,
    width: uploaded.width,
    height: uploaded.height,
    bytes: uploaded.bytes,
    sortOrder: input.sortOrder ?? 0,
  });
  return data;
}

function uploadToCloudinary(url: string, body: FormData, onProgress?: (percent: number) => void): Promise<CloudinaryUploadResponse> {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("POST", url);
    request.upload.onprogress = (event) => {
      if (event.lengthComputable) onProgress?.(Math.round((event.loaded / event.total) * 100));
    };
    request.onerror = () => reject(new Error("No fue posible conectar con Cloudinary."));
    request.onload = () => {
      if (request.status >= 200 && request.status < 300) return resolve(JSON.parse(request.responseText) as CloudinaryUploadResponse);
      try {
        const response = JSON.parse(request.responseText) as { error?: { message?: string } };
        reject(new Error(response.error?.message || "Cloudinary no pudo cargar la imagen."));
      } catch {
        reject(new Error("Cloudinary no pudo cargar la imagen."));
      }
    };
    request.send(body);
  });
}

export { deleteInvitationAsset, getAssets, uploadInvitationAsset };
export type { UploadAssetInput };
