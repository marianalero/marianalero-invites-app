import React from 'react';
import { Typography, Box } from '@mui/material';
export interface StatsCardsProps {
  totalAssigned?: number;
  totalConfirmed?: number;
  totalNotConfirmed?: number;
  totalWithoutResponse?: number;
}

const StatsCards: React.FC<StatsCardsProps> = ({
  totalAssigned,
  totalConfirmed,
  totalNotConfirmed,
  totalWithoutResponse,
}) => {
    const cards = [
    { label: 'Invitados', value: totalAssigned },
    { label: 'Confirmado', value: totalConfirmed },
    { label: 'No confirmado', value: totalNotConfirmed },
    { label: 'Sin Respuesta', value: totalWithoutResponse },
  ];
return (
    <Box
      display="flex"
      justifyContent="center"
      bgcolor="#f4ebd7" // fondo suave
      borderRadius={2}
      paddingBottom={2}
      gap={2}
      flexWrap="wrap"
    >
      {cards.map((card, index) => (
        <Box
          key={index}
          flex="1"
          minWidth={100}
          textAlign="center"
          padding={2}
          bgcolor="#fff"
          borderRadius={1}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#3d1f1f',
              fontFamily: 'DM Serif Display, serif',
              fontWeight: 500,
            }}
          >
            {card.value}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#3d1f1f',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.95rem',
            }}
          >
            {card.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default StatsCards;
