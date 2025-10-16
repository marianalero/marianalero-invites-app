import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
interface InvitationItem {
  title: string;
  category: "Bodas" | "XV Años" | "Otros";
  imageUrl: string;
  link: string;
  hide: boolean;
}

const invitations: InvitationItem[] = [
  {
      title: "Fernanda & Mario",
      category: "Bodas",
      imageUrl: "/images/boda1.jpg",
      link: "https://marianalero-invites.com/boda-fernanda-mario",
      hide: true
  },
  {
      title: "Rocio & Mariana",
      category: "Bodas",
      imageUrl: "/images/boda1.jpg",
      link: "https://marianalero-invites.com/boda-rocio-mariana",
      hide: true
  },
  {
      title: "Steven & Arely",
      category: "Bodas",
      imageUrl: "/images/boda1.jpg",
      link: "https://marianalero-invites.com/boda-steven-arely",
      hide: true
  },
  {
      title: "Angelica & Jose",
      category: "Bodas",
      imageUrl: "/images/boda1.jpg",
      link: "https://marianalero-invites.com/boda-angelica-jose",
      hide: false
  },
  {
      title: "Adilene & Osvaldo",
      category: "Bodas",
      imageUrl: "/images/boda1.jpg",
      link: "https://marianalero-invites.com/boda-adilene-osvaldo",
      hide: true
  },
  {
      title: "Karol & Mario",
      category: "Bodas",
      imageUrl: "/images/boda1.jpg",
      link: "https://marianalero-invites.com/boda-karol-mario",
      hide: true
  },
  {
      title: "Quinceañera Valentina",
      category: "XV Años",
      imageUrl: "/images/xv1.jpg",
      link: "https://marianalero-invites.com/xv-valentina",
      hide: false
  },
  {
      title: "Quinceañera Karla Ximena",
      category: "XV Años",
      imageUrl: "/images/xv1.jpg",
      link: "https://marianalero-invites.com/xv-karla-ximena",
      hide: false
  },
  {
      title: "Quinceañera Melanie Samadhi",
      category: "XV Años",
      imageUrl: "/images/xv1.jpg",
      link: "https://marianalero-invites.com/xv-melani-samadhi",
      hide: false
  },
  {
      title: "Quinceañera Dainaly",
      category: "XV Años",
      imageUrl: "/images/xv1.jpg",
      link: "https://marianalero-invites.com/xv-dainaly",
      hide: true
  },
   {
       title: "Quinceañera Alexia",
       category: "XV Años",
       imageUrl: "/images/xv1.jpg",
       link: "https://marianalero-invites.com/xv-alexia",
       hide: true
   },
  {
      title: "Bautizo Alondra",
      category: "Otros",
      imageUrl: "/images/otros1.jpg",
      link: "https://marianalero-invites.com/bau-alondra",
      hide: false
  },
   {
       title: "Bautizo Matías",
       category: "Otros",
       imageUrl: "/images/otros1.jpg",
       link: "https://marianalero-invites.com/bau-matias",
       hide: true
   },
   {
       title: "Revelación de Género",
       category: "Otros",
       imageUrl: "/images/otros1.jpg",
       link: "https://marianalero-invites.com/gender-reveal",
       hide: false
   },
  {
      title: "60 Silvia",
      category: "Otros",
      imageUrl: "/images/otros1.jpg",
      link: "https://marianalero-invites.com/60-silvia",
      hide: false
  },
  {
      title: "Bridal Shower Sophia",
      category: "Otros",
      imageUrl: "/images/otros1.jpg",
      link: "https://marianalero-invites.com/bridalshower-sophia",
      hide: true
  },
  {
      title: "Save the Date Dalia",
      category: "Otros",
      imageUrl: "/images/otros1.jpg",
      link: "https://marianalero-invites.com/save-date-xv-dalia",
      hide: false
  },
];

const CreacionesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("Tab changed to:", event);
    setActiveTab(newValue);
  };

  const filteredInvitations = invitations.filter((i) => {
    if (i.hide) return false;
    if (activeTab === 0) return i.category === "Bodas";
    if (activeTab === 1) return i.category === "XV Años";
    if (activeTab === 2) return i.category === "Otros";
    return true;
  });

  return (
    <Box
      sx={{
        bgcolor: "#f4ebd7",
        minHeight: "100vh",
        py: 6,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'DM Serif Display', serif",
          color: "#a41423",
          mb: 1,
        }}
      >
        Nuestras Creaciones
      </Typography>
      <Typography
        sx={{
          color: "#b3151d",
          fontFamily: "Montserrat, sans-serif",
          mb: 4,
        }}
      >
        Explora algunas de las invitaciones digitales que hemos diseñado con amor.
      </Typography>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        sx={{
          "& .MuiTab-root": {
            fontFamily: "Montserrat, sans-serif",
            textTransform: "none",
            color: "#a41423",
            fontWeight: 500,
            mx: 1,
          },
          "& .Mui-selected": {
            color: "#a41423",
            borderBottom: "2px solid #c8ad78",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#c8ad78",
          },
        }}
      >
        <Tab label="💍 Bodas" />
        <Tab label="👑 XV Años" />
        <Tab label="🎁 Otros" />
      </Tabs>

      {/* Gallery */}
      <Grid
        container
        spacing={3}
        sx={{
          mt: 4,
          px: { xs: 2, sm: 4, md: 8 },
          justifyContent: "center",
        }}
      >
        {filteredInvitations.map((item, index) => (
          <Grid size={{xs:12,sm:6,md:4}}  key={index}>
            <Card
              onClick={() => window.open(item.link, "_blank")}
              sx={{
                cursor: "pointer",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={item.imageUrl}
                alt={item.title}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'DM Serif Display', serif",
                    color: "#a41423",
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Chip
                  label={item.category}
                  variant="outlined"
                  sx={{
                    borderColor: "#c8ad78",
                    color: "#a41423",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 500,
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CreacionesPage;
