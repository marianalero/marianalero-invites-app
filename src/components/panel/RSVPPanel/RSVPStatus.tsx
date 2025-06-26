import { Chip } from "@mui/material";
import { RSVPSTATUS } from "../../../constants/rsvpStatus";

interface RsvpStatusChipProps {
  statusId: RSVPSTATUS;
}

const RsvpStatusChip: React.FC<RsvpStatusChipProps> = ({ statusId }) => {
  const getStatusProps = () => {
    switch (statusId) {
      case RSVPSTATUS.Confirmed:
        return {
          label: 'Confirmado',
          color: '#d4edda',
          textColor: '#155724',
        };
      case RSVPSTATUS.NotConfirmed:
        return {
          label: 'No confirmado',
          color: '#f8d7da',
          textColor: '#721c24',
        };
      case RSVPSTATUS.NoResponse:
      default:
        return {
          label: 'Sin respuesta',
          color: '#e0e0e0',
          textColor: '#424242',
        };
    }
  };

  const { label, color, textColor } = getStatusProps();

  return<Chip
      label={label}
      sx={{
        backgroundColor: color,
        color: textColor,
        fontWeight: 500,
      }}
    />
};

export default RsvpStatusChip;