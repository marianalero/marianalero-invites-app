export interface PublicAlbumItem {
  id: number;
  secureUrl: string;
  resourceType: string;
  format?: string | null;
  width?: number | null;
  height?: number | null;
  duration?: number | null;
  createdAt: string;
}

export interface PublicAlbum {
  brideName?: string | null;
  groomName?: string | null;
  quote?: string | null;
  eventDate: string;
  headerImageUrl?: string | null;
  expiresAt?: string | null;
  isExpired: boolean;
  totalItems: number;
  items: PublicAlbumItem[];
}

export interface ManagedAlbumItem extends PublicAlbumItem {
  expiresAt: string;
  isExpired: boolean;
}

export interface ManagedAlbum {
  mediaKey?: string | null;
  publicPath?: string | null;
  expiresAt?: string | null;
  isExpired: boolean;
  featureEnabled: boolean;
  totalItems: number;
  items: ManagedAlbumItem[];
}
