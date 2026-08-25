import type { CSSProperties, ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ResponsiveStyleValue } from "@mui/system";
import type { Dayjs } from "dayjs";

export type Visibility = "visible" | "hidden";

export type CountdownUnit = "days" | "hours" | "minutes" | "seconds";

export type SpacingValue = ResponsiveStyleValue<string | number>;

export type TextStyle = {
  fontFamily?: string;
  color?: string;
  fontSize?: SpacingValue;
  fontWeight?: CSSProperties["fontWeight"];
  letterSpacing?: SpacingValue;
  lineHeight?: CSSProperties["lineHeight"];
  fontStyle?: CSSProperties["fontStyle"];
  textTransform?: CSSProperties["textTransform"];
};

export type EditorialCountdownBackground = {
  color?: string;
  image?: string;
  imageMobile?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  size?: CSSProperties["backgroundSize"];
  position?: CSSProperties["backgroundPosition"];
  repeat?: CSSProperties["backgroundRepeat"];
};

export type EditorialCountdownTitle = TextStyle & {
  visibility?: Visibility;
  text?: ReactNode;
  dateFormat?: string;
};

export type EditorialCountdownDivider = {
  visibility?: Visibility;
  color?: string;
  width?: SpacingValue;
  height?: SpacingValue;
};

export type EditorialCountdownSpacing = {
  paddingTop?: SpacingValue;
  paddingBottom?: SpacingValue;
  paddingX?: SpacingValue;
  columnGap?: SpacingValue;
  rowGap?: SpacingValue;
  titleGap?: SpacingValue;
  itemGap?: SpacingValue;
};

export type EditorialCountdownResponsive = {
  numberSize?: SpacingValue;
  labelSize?: SpacingValue;
  columnGap?: SpacingValue;
  titleSize?: SpacingValue;
};

export type EditorialCountdownLabels = Partial<Record<CountdownUnit, string>>;

export type CountdownItemVisual = {
  numberStyle: TextStyle;
  labelStyle: TextStyle;
  itemGap?: SpacingValue;
  reduceMotion?: boolean;
};

export type CountdownItemProps = CountdownItemVisual & {
  value: string;
  label: string;
};

export type EditorialCountdownProps = {
  eventDate: Date | string | number | Dayjs;
  units?: CountdownUnit[];
  background?: EditorialCountdownBackground;
  title?: EditorialCountdownTitle;
  number?: TextStyle;
  label?: TextStyle;
  divider?: EditorialCountdownDivider;
  spacing?: EditorialCountdownSpacing;
  responsive?: EditorialCountdownResponsive;
  labels?: EditorialCountdownLabels;
  ariaLabel?: string;
  sx?: SxProps<Theme>;
};
