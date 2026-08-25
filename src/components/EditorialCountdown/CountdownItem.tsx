import { memo } from "react";
import { Stack, Typography } from "@mui/material";
import type { CountdownItemProps } from "./types";

const DIGIT_KEYFRAMES = {
  "@keyframes editorialCountdownFadeUp": {
    from: {
      opacity: 0,
      transform: "translateY(0.35em)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
} as const;

const CountdownItem = ({
  value,
  label,
  numberStyle,
  labelStyle,
  itemGap,
  reduceMotion = false,
}: CountdownItemProps) => {
  return (
    <Stack
      component="div"
      alignItems="center"
      sx={{ minWidth: "fit-content", gap: itemGap ?? 1.5 }}
    >
      <Typography
        key={value}
        component="span"
        aria-hidden="true"
        sx={{
          ...DIGIT_KEYFRAMES,
          fontFamily: numberStyle.fontFamily,
          color: numberStyle.color,
          fontSize: numberStyle.fontSize,
          fontWeight: numberStyle.fontWeight,
          letterSpacing: numberStyle.letterSpacing,
          lineHeight: numberStyle.lineHeight ?? 1,
          fontStyle: numberStyle.fontStyle,
          textTransform: numberStyle.textTransform,
          animation: reduceMotion
            ? "none"
            : "editorialCountdownFadeUp 200ms ease-out",
        }}
      >
        {value}
      </Typography>
      <Typography
        component="span"
        sx={{
          fontFamily: labelStyle.fontFamily,
          color: labelStyle.color,
          fontSize: labelStyle.fontSize,
          fontWeight: labelStyle.fontWeight,
          letterSpacing: labelStyle.letterSpacing,
          lineHeight: labelStyle.lineHeight ?? 1.2,
          fontStyle: labelStyle.fontStyle,
          textTransform: labelStyle.textTransform,
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
};

CountdownItem.displayName = "CountdownItem";

export default memo(CountdownItem);
