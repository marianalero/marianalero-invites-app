import { createApiAuthClient } from "./api";
import { readApiError } from "./invitationApiClient";
import type { ManagedAlbum, PublicAlbum, PublicAlbumItem } from "../models/album";

const apiClient = createApiAuthClient();

async function getPublicAlbum(slug: string): Promise<PublicAlbum> {
  const { data } = await apiClient.get<PublicAlbum>(`invitacion/${encodeURIComponent(slug)}/album`);
  return data;
}

async function uploadAlbumFile(
  slug: string,
  file: File,
  onProgress?: (percent: number) => void,
): Promise<PublicAlbumItem> {
  const body = new FormData();
  body.append("file", file);
  const { data } = await apiClient.post<PublicAlbumItem>(`invitacion/${encodeURIComponent(slug)}/album`, body, {
    onUploadProgress: (event) => {
      if (event.total) onProgress?.(Math.round((event.loaded / event.total) * 100));
    },
  });
  return data;
}

async function getManagedAlbum(invitationId: number): Promise<ManagedAlbum> {
  const { data } = await apiClient.get<ManagedAlbum>(`invitation/${invitationId}/album`);
  return data;
}

async function deleteAlbumItem(invitationId: number, itemId: number): Promise<void> {
  await apiClient.delete(`invitation/${invitationId}/album/${itemId}`);
}

export { deleteAlbumItem, getManagedAlbum, getPublicAlbum, readApiError, uploadAlbumFile };
