import { Button, ButtonProps } from "@mui/material";

interface CalendarButtonProps {
  title: string;
  startDate: string;
  endDate: string;
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
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

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

  const handleClick = () => {
    window.open(googleCalendarUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <Button onClick={handleClick} {...buttonProps}>
      {label}
    </Button>
  );
};

export default CalendarButton;