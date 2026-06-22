import { Button, ButtonProps } from "@mui/material";

interface CalendarButtonProps {
  title: string;
  startDate: string; // YYYYMMDDTHHmmssZ
  endDate: string;   // YYYYMMDDTHHmmssZ
  location?: string;
  description?: string;
  label?: string;
  buttonProps?: ButtonProps;
}

const CalendarButton = ({
  title,
  startDate,
  endDate,
  location,
  description,
  label = "Agregar al calendario",
  buttonProps,
}: CalendarButtonProps) => {

  const googleCalendarUrl = () => {
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: title,
      dates: `${startDate}/${endDate}`,
      details: description || "",
      location: location || "",
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  const escapeICS = (text: string) =>
    text
      .replace(/\\/g, "\\\\")
      .replace(/;/g, "\\;")
      .replace(/,/g, "\\,")
      .replace(/\n/g, "\\n");

  const downloadICS = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Mariana Lero Invitaciones//ES",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${Date.now()}@marianalero-invites.com`,
      `DTSTAMP:${startDate}`,
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      `SUMMARY:${escapeICS(title)}`,
      `DESCRIPTION:${escapeICS(description || "")}`,
      `LOCATION:${escapeICS(location || "")}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    // Safari iOS funciona mejor con esto
    window.location.href = url;

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const handleClick = () => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (isIOS) {
      downloadICS();
    } else {
      window.open(
        googleCalendarUrl(),
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <Button onClick={handleClick} {...buttonProps}>
      {label}
    </Button>
  );
};

export default CalendarButton;