import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

interface HashtagSectionProps {
  imageSrc: string;
  bgColor?: string;
  bodyTypo?:string;
  hashtags:string[];
}

const HashtagSection: React.FC<HashtagSectionProps> = ({ imageSrc, bgColor = 'white',hashtags,bodyTypo }) => {
  return (
    <Box
      id="qbootstrap-started"
      sx={{
        backgroundColor: bgColor,
        paddingTop: '2em',
        py: 4,
      }}
    >
      <Container>
        <Grid container justifyContent="center">
              <Grid container justifyContent="center">
              <Grid item xs={12} sm={12} sx={{ textAlign: 'center', padding: 2 }}>
                <img
                  src={imageSrc}
                  alt="Hashtag"
                  style={{
                    width: '250px',
                    maxWidth: '500px',
                    marginLeft: '10px',
                  }}
                />
              </Grid>
            </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              variant="body1"
              align="center"
            >
              Comparte con nosotros todas tus fotografías del evento, usando el siguiente #hashtag en todas tus publicaciones.
            </Typography>
            {
                 hashtags.map((item, index) => (
                    <Typography
                    key={index}
                    variant="subtitle1"
                    align="center"
                    className={bodyTypo}
                    >
                    {item}
                    </Typography>
                ))
            }
              
          
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HashtagSection;
