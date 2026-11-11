import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import {
  resolveAlbumSectionConfig,
  type AlbumCornerRadius,
  type AlbumSectionConfig,
} from "./albumSectionConfig";
import type { ResponsiveStyleValue } from "@mui/system";

interface Props {
  config?: AlbumSectionConfig;
  albumUrl: string;
}

export default function AlbumSection({ config, albumUrl }: Props) {
  const section = resolveAlbumSectionConfig(config);
  const albumPath = toAlbumPath(albumUrl);
  const corners = cssCorners(section.corners);
  const radius = corners ? undefined : cssLength(section.borderRadius);

  return (
    <Box
      component="section"
      className={section.bodyFontClass}
      sx={{
        mx: "auto",
        width: "100%",
        maxWidth: section.maxWidth,
        px: section.padding,
        py: section.padding,
        textAlign: "center",
        color: section.bodyColor || "inherit",
        backgroundColor: section.backgroundColor,
        backgroundImage: section.showBackgroundImage ? `url(${section.backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        border: section.border,
        borderStyle: section.border ? undefined : section.borderStyle,
        borderWidth: section.border ? undefined : section.borderWidth,
        borderColor: section.borderColor,
        borderRadius: radius,
        borderTopLeftRadius: corners?.topLeft,
        borderTopRightRadius: corners?.topRight,
        borderBottomRightRadius: corners?.bottomRight,
        borderBottomLeftRadius: corners?.bottomLeft,
      }}
    >
      {section.showCamera && (
        <Box
          component="img"
          src={section.cameraImage}
          alt=""
          sx={{ width: "min(180px, 46%)", height: "auto", display: "block", mx: "auto", mb: 2 }}
        />
      )}
      {section.title && (
        <Typography
          component="h2"
          className={section.titleFontClass}
          sx={{ color: section.titleColor || "inherit", fontSize: { xs: "2.4rem", md: "3.2rem" }, lineHeight: 1.05 }}
        >
          {section.title}
        </Typography>
      )}
      {section.bodyText && (
        <Typography className={section.bodyFontClass} sx={{ mt: section.title ? 1.5 : 0, color: section.bodyColor || "inherit", lineHeight: 1.5 }}>
          {section.bodyText}
        </Typography>
      )}
      <Box
        sx={{
          mt: 3,
          mx: "auto",
          width: "fit-content",
          display: "flex",
          justifyContent: "center",
          p: 1.5,
          lineHeight: 0,
          backgroundColor: section.qrContainerColor || "transparent",
          borderRadius: cssLength(section.qrBorderRadius),
        }}
      >
        <Box sx={{ p: 1, backgroundColor: section.qrBackgroundColor || "transparent", borderRadius: cssLength(section.qrBorderRadius) }}>
          <QRCodeCanvas
            value={albumUrl}
            size={section.qrSize}
            bgColor={section.qrBackgroundColor}
            includeMargin={false}
          />
        </Box>
      </Box>
      {section.qrCaption && (
        <Typography className={section.qrCaptionFontClass} sx={{ mt: 1.5, color: section.captionColor || "inherit" }}>
          {section.qrCaption}
        </Typography>
      )}
      {section.mobileLinkText && (
        <Link
          component={RouterLink}
          to={albumPath}
          className={section.bodyFontClass}
          underline="always"
          sx={{
            display: { xs: "inline-block", md: "none" },
            mt: 2,
            color: section.bodyColor || "inherit",
          }}
        >
          {section.mobileLinkText}
        </Link>
      )}
      {section.showOrnament && (
        <Box
          component="img"
          src={section.ornamentImage}
          alt=""
          sx={{ width: "min(220px, 60%)", height: "auto", display: "block", mx: "auto", mt: 3 }}
        />
      )}
    </Box>
  );
}

function cssLength(value?: ResponsiveStyleValue<number | string>) {
  if (value == null) return undefined;
  if (typeof value === "number") return `${value}px`;
  if (typeof value === "string" || Array.isArray(value)) {
    return Array.isArray(value) ? value.map((item) => (typeof item === "number" ? `${item}px` : item)) : value;
  }
  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, typeof item === "number" ? `${item}px` : item]),
  );
}

function cssCorners(corners?: AlbumCornerRadius) {
  if (!corners) return undefined;
  return {
    topLeft: cssLength(corners.topLeft),
    topRight: cssLength(corners.topRight),
    bottomRight: cssLength(corners.bottomRight),
    bottomLeft: cssLength(corners.bottomLeft),
  };
}

function toAlbumPath(albumUrl: string) {
  try {
    return new URL(albumUrl, window.location.origin).pathname;
  } catch {
    return albumUrl;
  }
}
