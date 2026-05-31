import { Button, ButtonProps } from "@mui/material";

interface CalendarButtonProps {
  title: string;

  startDate: string;
  endDate: string;

  location?: string;
  description?: string;

  label?: string;

  fileName?: string;

  buttonProps?: ButtonProps;
}

const CalendarButton = ({
  title,
  startDate,
  endDate,
  location,
  description,

  label = "Agregar al calendario",

  fileName = "evento",

  buttonProps,
}: CalendarButtonProps) => {
  const isAppleDevice = /iPhone|iPad|Mac/i.test(navigator.userAgent);

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

  const generateICS = () => {
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${title}
DESCRIPTION:${description || ""}
LOCATION:${location || ""}
END:VEVENT
END:VCALENDAR
    `;

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName}.ics`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  };

  const handleClick = () => {
    if (isAppleDevice) {
      generateICS();
    } else {
      window.open(googleCalendarUrl(), "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Button onClick={handleClick} {...buttonProps}>
      {label}
    </Button>
  );
};

export default CalendarButton;