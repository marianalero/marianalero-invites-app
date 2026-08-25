import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Box, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "dayjs/locale/es";
import "dayjs/locale/en";
import "dayjs/locale/de";
import { useTranslation } from "react-i18next";
import CountdownItem from "./CountdownItem";
import type {
  CountdownUnit,
  EditorialCountdownProps,
  TextStyle,
} from "./types";

dayjs.extend(advancedFormat);

const DEFAULT_UNITS: CountdownUnit[] = [
  "days",
  "hours",
  "minutes",
  "seconds",
];

const UNIT_I18N: Record<CountdownUnit, string> = {
  days: "countdown.days",
  hours: "countdown.hours",
  minutes: "countdown.minutes",
  seconds: "countdown.seconds",
};

const MS = {
  second: 1000,
  minute: 60_000,
  hour: 3_600_000,
  day: 86_400_000,
} as const;

const DEFAULT_NUMBER: TextStyle = {
  fontSize: "3.25rem",
  fontWeight: 300,
  letterSpacing: "0.08em",
  lineHeight: 1,
};

const DEFAULT_LABEL: TextStyle = {
  fontSize: "0.7rem",
  fontWeight: 400,
  letterSpacing: "0.28em",
  textTransform: "uppercase",
};

const DEFAULT_TITLE: TextStyle = {
  fontSize: "1.75rem",
  fontWeight: 400,
  letterSpacing: "0.12em",
};

type TimeParts = Record<CountdownUnit, number>;

const toTimestamp = (eventDate: EditorialCountdownProps["eventDate"]): number =>
  dayjs(eventDate).valueOf();

const getRemainingMs = (targetMs: number): number =>
  Math.max(0, targetMs - Date.now());

const toParts = (remainingMs: number): TimeParts => ({
  days: Math.floor(remainingMs / MS.day),
  hours: Math.floor((remainingMs / MS.hour) % 24),
  minutes: Math.floor((remainingMs / MS.minute) % 60),
  seconds: Math.floor((remainingMs / MS.second) % 60),
});

const partsEqual = (
  a: TimeParts,
  b: TimeParts,
  units: CountdownUnit[],
): boolean => units.every((unit) => a[unit] === b[unit]);

const padValue = (value: number): string => value.toString().padStart(2, "0");

const toIsoDuration = (parts: TimeParts, units: CountdownUnit[]): string => {
  const include = (unit: CountdownUnit) => units.includes(unit);
  return `P${include("days") ? `${parts.days}D` : ""}T${
    include("hours") ? `${parts.hours}H` : ""
  }${include("minutes") ? `${parts.minutes}M` : ""}${
    include("seconds") ? `${parts.seconds}S` : ""
  }`;
};

const EditorialCountdown = ({
  eventDate,
  units = DEFAULT_UNITS,
  background,
  title,
  number,
  label,
  divider,
  spacing,
  responsive,
  labels,
  ariaLabel,
  sx,
}: EditorialCountdownProps) => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const targetMs = toTimestamp(eventDate);
  const unitsKey = units.join("|");
  const activeUnits = useMemo(
    () => unitsKey.split("|") as CountdownUnit[],
    [unitsKey],
  );

  const [parts, setParts] = useState<TimeParts>(() =>
    toParts(getRemainingMs(targetMs)),
  );
  const partsRef = useRef(parts);

  const syncParts = useCallback(() => {
    const next = toParts(getRemainingMs(targetMs));
    if (partsEqual(partsRef.current, next, activeUnits)) {
      return;
    }
    partsRef.current = next;
    setParts(next);
  }, [activeUnits, targetMs]);

  useEffect(() => {
    dayjs.locale(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    syncParts();
    const intervalId = window.setInterval(syncParts, MS.second);
    return () => window.clearInterval(intervalId);
  }, [syncParts]);

  const titleVisible = title?.visibility !== "hidden";
  const dividerVisible = divider?.visibility !== "hidden";

  const formattedDate = useMemo(() => {
    const formatted = dayjs(eventDate)
      .locale(i18n.language)
      .format(title?.dateFormat ?? "dddd DD MMMM YYYY");
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }, [eventDate, i18n.language, title?.dateFormat]);

  const titleContent = title?.text ?? formattedDate;

  const numberStyle = useMemo<TextStyle>(
    () => ({
      ...DEFAULT_NUMBER,
      ...number,
      fontSize:
        isMobile && responsive?.numberSize != null
          ? responsive.numberSize
          : (number?.fontSize ?? DEFAULT_NUMBER.fontSize),
    }),
    [isMobile, number, responsive?.numberSize],
  );

  const labelStyle = useMemo<TextStyle>(
    () => ({
      ...DEFAULT_LABEL,
      ...label,
      fontSize:
        isMobile && responsive?.labelSize != null
          ? responsive.labelSize
          : (label?.fontSize ?? DEFAULT_LABEL.fontSize),
    }),
    [isMobile, label, responsive?.labelSize],
  );

  const titleStyle = useMemo<TextStyle>(
    () => ({
      ...DEFAULT_TITLE,
      ...title,
      fontSize:
        isMobile && responsive?.titleSize != null
          ? responsive.titleSize
          : (title?.fontSize ?? DEFAULT_TITLE.fontSize),
    }),
    [isMobile, responsive?.titleSize, title],
  );

  const columnGap =
    isMobile && responsive?.columnGap != null
      ? responsive.columnGap
      : (spacing?.columnGap ?? { xs: 2.5, sm: 5 });

  const backgroundImage = isMobile
    ? (background?.imageMobile ?? background?.image)
    : background?.image;

  const overlayOpacity =
    background?.overlayOpacity ?? (background?.overlayColor ? 0.4 : 0);
  const showOverlay =
    Boolean(background?.overlayColor) && overlayOpacity > 0;

  const resolvedAriaLabel = useMemo(() => {
    if (ariaLabel) {
      return ariaLabel;
    }
    return activeUnits
      .map((unit) => `${labels?.[unit] ?? t(UNIT_I18N[unit])} ${padValue(parts[unit])}`)
      .join(", ");
  }, [activeUnits, ariaLabel, labels, parts, t]);

  return (
    <Box
      component="section"
      aria-label={resolvedAriaLabel}
      sx={[
        {
          position: "relative",
          overflow: "hidden",
          backgroundColor: background?.color,
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize: background?.size ?? "cover",
          backgroundPosition: background?.position ?? "center",
          backgroundRepeat: background?.repeat ?? "no-repeat",
          paddingTop: spacing?.paddingTop ?? { xs: 8, md: 12 },
          paddingBottom: spacing?.paddingBottom ?? { xs: 8, md: 12 },
          paddingLeft: spacing?.paddingX ?? 3,
          paddingRight: spacing?.paddingX ?? 3,
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {showOverlay && (
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: background?.overlayColor,
            opacity: overlayOpacity,
            pointerEvents: "none",
          }}
        />
      )}

      <Grid container justifyContent="center" sx={{ position: "relative", zIndex: 1 }}>
        <Grid size={12}>
          <Stack
            alignItems="center"
            spacing={spacing?.titleGap ?? 6}
            sx={{ width: "100%" }}
          >
            {titleVisible && titleContent != null && titleContent !== "" && (
              <Typography
                component="p"
                sx={{
                  margin: 0,
                  textAlign: "center",
                  fontFamily: titleStyle.fontFamily,
                  color: titleStyle.color,
                  fontSize: titleStyle.fontSize,
                  fontWeight: titleStyle.fontWeight,
                  letterSpacing: titleStyle.letterSpacing,
                  lineHeight: titleStyle.lineHeight,
                  fontStyle: titleStyle.fontStyle,
                  textTransform: titleStyle.textTransform,
                }}
              >
                {titleContent}
              </Typography>
            )}

            <Stack
              component="time"
              dateTime={toIsoDuration(parts, activeUnits)}
              direction="row"
              alignItems="center"
              justifyContent="center"
              aria-live="polite"
              aria-atomic="true"
              divider={
                dividerVisible ? (
                  <Divider
                    orientation="vertical"
                    aria-hidden="true"
                    sx={{
                      alignSelf: "center",
                      height: divider?.height ?? "2.75rem",
                      borderRightWidth: divider?.width ?? "1px",
                      borderColor: divider?.color ?? "currentColor",
                      opacity: divider?.color ? 1 : 0.28,
                    }}
                  />
                ) : undefined
              }
              sx={{
                columnGap,
                rowGap: spacing?.rowGap,
                flexWrap: "nowrap",
              }}
            >
              {activeUnits.map((unit) => (
                <CountdownItem
                  key={unit}
                  value={padValue(parts[unit])}
                  label={labels?.[unit] ?? t(UNIT_I18N[unit])}
                  numberStyle={numberStyle}
                  labelStyle={labelStyle}
                  itemGap={spacing?.itemGap}
                  reduceMotion={reduceMotion}
                />
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditorialCountdown;
