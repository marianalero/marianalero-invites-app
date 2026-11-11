import type { ResponsiveStyleValue } from "@mui/system";

export type AlbumCornerRadius = {
  topLeft?: number | string;
  topRight?: number | string;
  bottomRight?: number | string;
  bottomLeft?: number | string;
};

export type AlbumSectionConfig = {
  title?: string;
  bodyText?: string;
  qrCaption?: string;
  mobileLinkText?: string;
  titleFontClass?: string;
  bodyFontClass?: string;
  qrCaptionFontClass?: string;
  titleColor?: string;
  bodyColor?: string;
  captionColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  qrBackgroundColor?: string;
  qrContainerColor?: string;
  cameraImage?: string;
  ornamentImage?: string;
  backgroundImage?: string;
  showCamera?: boolean;
  showOrnament?: boolean;
  showBackgroundImage?: boolean;
  border?: string;
  borderWidth?: ResponsiveStyleValue<number | string>;
  borderStyle?: string;
  borderRadius?: ResponsiveStyleValue<number | string>;
  corners?: AlbumCornerRadius;
  padding?: ResponsiveStyleValue<number | string>;
  maxWidth?: ResponsiveStyleValue<number | string>;
  qrSize?: number;
  qrBorderRadius?: ResponsiveStyleValue<number | string>;
};

export const albumSectionDefaults = {
  titleFontClass: "cormorant-garamond-400",
  bodyFontClass: "manrope-400",
  qrCaptionFontClass: "manrope-400",
  backgroundColor: "transparent",
  borderStyle: "solid",
  borderWidth: 0,
  borderRadius: 24,
  padding: { xs: 3, md: 6 },
  maxWidth: 720,
  qrSize: 168,
  qrBorderRadius: 16,
  mobileLinkText: "Ver álbum",
} as const;

export function resolveAlbumSectionConfig(config?: AlbumSectionConfig) {
  const source = config ?? {};
  const showCamera = source.showCamera ?? Boolean(source.cameraImage);
  const showOrnament = source.showOrnament ?? false;
  const showBackgroundImage = source.showBackgroundImage ?? Boolean(source.backgroundImage);

  return {
    ...albumSectionDefaults,
    ...source,
    qrCaptionFontClass: source.qrCaptionFontClass || source.bodyFontClass || albumSectionDefaults.qrCaptionFontClass,
    showCamera: showCamera && Boolean(source.cameraImage),
    showOrnament: showOrnament && Boolean(source.ornamentImage),
    showBackgroundImage: showBackgroundImage && Boolean(source.backgroundImage),
  };
}
