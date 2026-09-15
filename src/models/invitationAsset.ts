export interface InvitationAsset {
  id: number;
  invitationId?: number;
  mediaKey: string;
  publicId: string;
  secureUrl: string;
  assetKind: string;
  resourceType: string;
  format?: string;
  width?: number;
  height?: number;
  bytes?: number;
  sortOrder: number;
}

interface CloudinaryUploadSignature {
  cloudName: string;
  apiKey: string;
  timestamp: number;
  folder: string;
  signature: string;
}

interface CloudinaryUploadResponse {
  public_id: string;
  secure_url: string;
  resource_type: string;
  format?: string;
  width?: number;
  height?: number;
  bytes?: number;
}

export type { CloudinaryUploadResponse, CloudinaryUploadSignature };
