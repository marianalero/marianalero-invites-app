import type { FontCategory, InvitationFont } from "../../constants/fonts";

export type FontFilterValue = "Todas" | FontCategory;

export interface FontCardProps {
  index: number;
  font: InvitationFont;
  previewText: string;
}

export interface FontPreviewGridProps {
  fonts: InvitationFont[];
  previewText: string;
  startIndex?: number;
  columns?: 1 | 2;
}

export interface FontPreviewExportHeaderProps {
  page?: number;
  totalPages?: number;
}

export interface FontCategoryFilterProps {
  value: FontFilterValue;
  onChange: (value: FontFilterValue) => void;
}

export interface FontPreviewFormProps {
  name: string;
  onNameChange: (value: string) => void;
  onSubmit: () => void;
}
