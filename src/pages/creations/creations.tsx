import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  Typography,
  CardMedia,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import HeaderHome from "../../layouts/headerHome";
interface InvitationItem {
  title: string;
  category: "Bodas" | "XV Años" | "Otras" | "Bautizo"  | "Baby Shower" | "Cumpleaños"  ;
  imageUrl: string;
  link: string;
  hide: boolean;
  package?: "Esencia" | "Memorias" | "Celebra +";
}

const invitations: InvitationItem[] = [
  {
      title: "Fernanda & Mario",
      category: "Bodas",
      imageUrl: "/images/bodas/6.png",
      link: "https://marianalero-invites.com/boda-fernanda-mario",
      hide: false,
      package: "Celebra +"
  },
  {
      title: "Rocio & Mariana",
      category: "Bodas",
      imageUrl: "/images/bodas/7.png",
      link: "https://marianalero-invites.com/boda-rocio-mariana",
      hide: false,
      package: "Celebra +"
  },
  {
      title: "Steven & Arely",
      category: "Bodas",
      imageUrl: "/images/bodas/8.png",
      link: "https://marianalero-invites.com/boda-steven-arely",
      hide: false,
      package: "Celebra +"
  },
  {
      title: "Angelica & Jose",
      category: "Bodas",
      imageUrl: "/images/bodas/9.png",
      link: "https://marianalero-invites.com/boda-angelica-jose",
      hide: false,
      package: "Celebra +"
  },
  {
      title: "Adilene & Osvaldo",
      category: "Bodas",
      imageUrl: "/images/bodas/10.png",
      link: "https://marianalero-invites.com/boda-adilene-osvaldo",
      hide: false,
      package: "Celebra +"
  },
  {
      title: "Karol & Mario",
      category: "Bodas",
      imageUrl: "/images/bodas/11.png",
      link: "https://marianalero-invites.com/boda-karol-mario",
      hide: true,
      package: "Celebra +"
  },
  {
    title:"Civil Karol & Mario",
    category:"Bodas",
    imageUrl:"/images/bodas/12.png",
    link:"https://marianalero-invites.com/boda-civil-karol-mario",
    hide:true,
    package: "Memorias"
  },
  {
    title:"Cendy & Adrian",
    category:"Bodas",
    imageUrl:"/images/bodas/13.png",
    link:"https://marianalero-invites.com/boda-cendy-adrian",
    hide:false,
    package: "Celebra +"
  },
  {
    title:"Stephania & Ismael",
    category:"Bodas",
    imageUrl:"/images/bodas/22.png",
    link:"https://marianalero-invites.com/boda-stephania-ismael",
    hide:false,
    package: "Celebra +"
  },
  {
    title:"Sophia & Luis Enrique",
    category:"Bodas",
    imageUrl:"/images/bodas/14.png",
    link:"https://marianalero-invites.com/boda-sophia-luis-enrique",
    hide:false,
    package: "Celebra +"
  },
  {
    title:"Maria Lourdes & Francisco Michel",
    category:"Bodas",
    imageUrl:"/images/bodas/15.png",
    link:"https://marianalero-invites.com/boda-maria-lourdes-francisco-michel",
    hide:false,
    package: "Celebra +"
  },
  {
      title:"Glenda & Jose",
      category:"Bodas",
      imageUrl:"/images/bodas/16.png",
      link:"https://marianalero-invites.com/boda-glenda-jose",
      hide:false,
      package: "Celebra +"
  }
  ,
  {
      title: "Quinceañera Valentina",
      category: "XV Años",
      imageUrl: "/images/xv/22.png",
      link: "https://marianalero-invites.com/xv-valentina",
      hide: false,
      package: "Celebra +"
  },
  {
      title: "Quinceañera Karla Ximena",
      category: "XV Años",
      imageUrl: "/images/xv/23.png",
      link: "https://marianalero-invites.com/xv-karla-ximena",
      hide: false,
      package: "Celebra +"
  },
  {
      title: "Quinceañera Melanie Samadhi",
      category: "XV Años",
      imageUrl: "/images/xv/24.png",
      link: "https://marianalero-invites.com/xv-melani-samadhi",
      hide: false,
      package: "Celebra +",
      
  },
  {
      title: "Quinceañera Dainaly",
      category: "XV Años",
      imageUrl: "/images/xv/25.png",
      link: "https://marianalero-invites.com/xv-dainaly",
      hide: false,
      package: "Celebra +"
  },
   {
       title: "Quinceañera Alexia",
       category: "XV Años",
       imageUrl: "/images/xv/26.png",
       link: "https://marianalero-invites.com/xv-alexia",
       hide: false,
        package: "Celebra +"
   },
   {
      title:"Quinceañera Dalia",
      category:"XV Años",
      imageUrl:"/images/xv/27.png",
      link:"https://marianalero-invites.com/xv-daniela",
      hide:false,
      package: "Celebra +"
   }
    ,{
      title:"Quinceañera Emely",
      category:"XV Años",
      imageUrl:"/images/xv/28.png",
      link:"https://marianalero-invites.com/xv-emely",
      hide:false,
      package: "Celebra +"
    },
    {
      title:"Quinceañera Victoria",
      category:"XV Años",
      imageUrl:"/images/xv/29.png",
      link:"https://marianalero-invites.com/xv-victoria",
      hide:false,
      package: "Celebra +"
    },
    // {
    //   title:"Quinceañera Renata Isabela"
    //   ,category:"XV Años"
    //   ,imageUrl:"/images/xv/30.png"
    //   ,link:"https://marianalero-invites.com/xv-renata-isabela"
    //   ,hide:false
    // },
    {
      title:"Quinceañera Camila",
      category:"XV Años",
      imageUrl:"/images/xv/30.png",
      link:"https://marianalero-invites.com/xv-laura-camila",
      hide:false,
      package: "Celebra +"
   },
  {
      title: "Bautizo Alondra",
      category: "Bautizo",
      imageUrl: "/images/otras/36.png",
      link: "https://marianalero-invites.com/bau-alondra",
      hide: false,
      package: "Memorias"
  },
   {
       title: "Bautizo Matías",
       category: "Bautizo",
       imageUrl: "/images/otras/37.png",
       link: "https://marianalero-invites.com/bau-matias",
       hide: false,
       package: "Celebra +"
   },
   {
       title: "Revelación de Género",
       category: "Otras",
       imageUrl: "/images/otras/46.png",
       link: "https://marianalero-invites.com/gender-reveal",
       hide: false,
        package: "Esencia"
   },
  {
      title: "60 Silvia",
      category: "Cumpleaños",
      imageUrl: "/images/otras/38.png",
      link: "https://marianalero-invites.com/60-silvia",
      hide: false,
      package: "Esencia"
  },
  {
      title: "Bridal Shower Sophia",
      category: "Otras",
      imageUrl: "/images/otras/39.png",
      link: "https://marianalero-invites.com/bridalshower-sophia",
      hide: false,
      package: "Esencia"
  },
  {
      title: "Save the Date Dalia",
      category: "Otras",
      imageUrl: "/images/otras/40.png",
      link: "https://marianalero-invites.com/save-date-xv-dalia",
      hide: false,
      package: "Esencia"
  },
  // {
  //     title: "Showroom",
  //     category: "Otras",
  //     imageUrl: "/images/otras1.jpg",
  //     link: "https://marianalero-invites.com/showroom",
  //     hide: false
  // },
  {
     title:"Baby Shower Alec",
     category: "Baby Shower",
     imageUrl: "/images/otras/41.png",
     link: "https://marianalero-invites.com/baby-shower-alec",
     hide: false,
     package: "Esencia"
  },
  {
    title:"Posada TDR",
    category: "Otras",
    imageUrl: "/images/otras/42.png",
    link: "https://marianalero-invites.com/posada-tdr",
    hide: false,
    package: "Esencia"
  },
  {
    title:"Cumpleaños Juan Pablo",
    category: "Cumpleaños",
    imageUrl: "/images/otras/45.png",
    link: "https://marianalero-invites.com/juan-pablo-12",
    hide: false,
    package: "Esencia"
  },
  {
    title: "Boda Carlos Jaudiel & Carlos",
    category: "Bodas",
    imageUrl: "/images/bodas/17.png",
    link: "https://marianalero-invites.com/boda-carlos-jaudiel-carlos",
    hide: true,
    package: "Celebra +"
  },
  {
    title: "Boda Dania & Sergio",
    category: "Bodas",
    imageUrl: "/images/bodas/18.png",
    link: "https://marianalero-invites.com/boda-dania-sergio",
    hide: true,
    package: "Celebra +"
  },
  {
    title:"Boda Flor Maria & Cruz Roberto",
    category:"Bodas",
    imageUrl:"/images/bodas/19.png",
    link:"https://marianalero-invites.com/boda-flor-maria-cruz-roberto",
    hide: true,
    package: "Celebra +"
  },
  {
    title: "Boda Fedra & Juan",
    category: "Bodas",
    imageUrl: "/images/bodas/20.png",
    link: "https://marianalero-invites.com/boda-fedra-edlyn-juan-pablo", 
    hide: true,
    package: "Celebra +"
  },
  {
    title: "Boda Maria Isabel & Christian",
    category: "Bodas",
    imageUrl: "/images/bodas/21.png",
    link: "https://marianalero-invites.com/boda-maria-isabel-christian",
    hide: true,
    package: "Celebra +"
  },
  {
    title: "XV Brianna",
    category: "XV Años",
    imageUrl: "/images/xv/31.png",
    link: "https://marianalero-invites.com/xv-brianna",
    hide: false,
    package: "Memorias"
  },
  {
    title:"XV Camila",
    category:"XV Años",
    imageUrl:"/images/xv/32.png",
    link:"https://marianalero-invites.com/xv-camila",
    hide:false,
    package: "Memorias"
   },
   {
    title :"XV Joely",
    category:"XV Años",
    imageUrl:"/images/xv/33.png",
    link:"https://marianalero-invites.com/xv-joely-patricia",
    hide:false,
    package: "Celebra +"
   },
   {
    title:"XV Kimberly",
    category:"XV Años",
    imageUrl:"/images/xv/34.png",
    link:"https://marianalero-invites.com/xv-kimberly",
    hide:false,
    package: "Celebra +"
    },
    {
      title:"XV Regina",
      category:"XV Años",
      imageUrl:"/images/xv/35.png",
      link:"https://marianalero-invites.com/xv-regina",
      hide:false,
      package: "Celebra +"
    },
   {
    title:"Baby Shower Jose Alejandro" ,
    category:"Baby Shower",
    imageUrl:"/images/otras/43.png",
    link:"https://marianalero-invites.com/baby-shower-jose-alejandro",
    hide:false,
    package: "Esencia"
   }


];

const tabs = ["bodas", "xv", "otros"] as const;

const CreacionesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tabParam = searchParams.get("tab");

  const initialTab = tabParam
    ? Math.max(tabs.indexOf(tabParam as typeof tabs[number]), 0)
    : 0;

  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    setSearchParams({ tab: tabs[newValue] });
  };

  const filteredInvitations = invitations.filter((i) => {
    if (i.hide) return false;
    if (activeTab === 0) return i.category === "Bodas";
    if (activeTab === 1) return i.category === "XV Años";
    if (activeTab === 2) return i.category !== "Bodas" && i.category !== "XV Años";
    return true;
  });
  const categoryButtons = [
  { label: "Bodas", value: 0 },
  { label: "XV Años", value: 1 },
  { label: "Otros", value: 2 },
];

  return (
    <><HeaderHome></HeaderHome><Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f8f4ec",
        background: "linear-gradient(180deg, #f8f4ec 0%, #f2eadd 55%, #f8f4ec 100%)",
        py: { xs: 7, md: 11 },
        px: { xs: 2, md: 6 },
        textAlign: "center",
      }}
    >
      {/* HERO */}
      <Box sx={{ maxWidth: 760, mx: "auto", mb: { xs: 5, md: 7 } }}>
        <Typography
          sx={{
            fontFamily: "'DM Serif Display', serif",
            color: "#a41423",
            fontSize: { xs: "2.6rem", md: "4.6rem" },
            lineHeight: 0.95,
            mb: 2,
          }}
        >
          Diseñamos invitaciones
          <br />
          que cuentan historias.
        </Typography>

        <Typography
          sx={{
            color: "#7d5f55",
            fontFamily: "Montserrat, sans-serif",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: 1.8,
            maxWidth: 580,
            mx: "auto",
          }}
        >
          Cada celebración es única. Descubre algunas de las experiencias
          digitales que hemos creado para nuestros clientes.
        </Typography>
      </Box>

          <Stack
  spacing={1.5}
  alignItems="center"
  sx={{
    mb: { xs: 4, md: 6 },
  }}
>
  <Stack direction="row" spacing={1.5} justifyContent="center">
    {categoryButtons.slice(0, 2).map((item) => {
      const active = activeTab === item.value;

      return (
        <Button
          key={item.label}
          onClick={() => handleTabChange({} as React.SyntheticEvent, item.value)}
          sx={{
            minWidth: 110,
            borderRadius: "999px",
            px: 3,
            py: 1,
            bgcolor: active ? "#a41423" : "rgba(255,255,255,.35)",
            color: active ? "#fff" : "#a41423",
            border: active
              ? "1px solid #a41423"
              : "1px solid rgba(200,173,120,.45)",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            textTransform: "none",
            boxShadow: active
              ? "0 10px 24px rgba(164,20,35,.18)"
              : "none",
            "&:hover": {
              bgcolor: active ? "#7f0f1b" : "rgba(164,20,35,.06)",
              transform: "translateY(-2px)",
            },
          }}
        >
          {item.label}
        </Button>
      );
    })}
  </Stack>

  <Button
    onClick={() => handleTabChange({} as React.SyntheticEvent, 2)}
    sx={{
      minWidth: 110,
      borderRadius: "999px",
      px: 3,
      py: 1,
      bgcolor: activeTab === 2 ? "#a41423" : "rgba(255,255,255,.35)",
      color: activeTab === 2 ? "#fff" : "#a41423",
      border:
        activeTab === 2
          ? "1px solid #a41423"
          : "1px solid rgba(200,173,120,.45)",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      textTransform: "none",
      boxShadow:
        activeTab === 2 ? "0 10px 24px rgba(164,20,35,.18)" : "none",
      "&:hover": {
        bgcolor: activeTab === 2 ? "#7f0f1b" : "rgba(164,20,35,.06)",
        transform: "translateY(-2px)",
      },
    }}
  >
    Otros
  </Button>
</Stack>
      {/* TABS 
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        TabIndicatorProps={{ sx: { display: "none" } }}
        sx={{
          mb: { xs: 4, md: 6 },
          "& .MuiTabs-flexContainer": {
            gap: 1.5,
            justifyContent: "center",
            flexWrap: "wrap",
          },
          "& .MuiTab-root": {
            fontFamily: "Montserrat, sans-serif",
            textTransform: "none",
            color: "#a41423",
            fontWeight: 500,
            minHeight: "auto",
            px: 3,
            py: 1.2,
            borderRadius: "999px",
            border: "1px solid rgba(200,173,120,.45)",
            bgcolor: "rgba(255,255,255,.35)",
            transition: "all .25s ease",
          },
          "& .Mui-selected": {
            color: "#fff !important",
            bgcolor: "#a41423",
            borderColor: "#a41423",
            boxShadow: "0 10px 24px rgba(164,20,35,.18)",
          },
        }}
      >
        <Tab label="Bodas" />
        <Tab label="XV Años" />
        <Tab label="Momentos especiales" />
      </Tabs>
*/}
      {/* GALLERY */}
      <Grid
        container
        spacing={{ xs: 4, md: 5 }}
        sx={{
          maxWidth: 1320,
          mx: "auto",
          justifyContent: "center",
        }}
      >
        {filteredInvitations.map((item, index) => (
          <Grid
            key={`${item.title}-${index}`}
            size={{ xs: 6, sm: 6, md: 4, lg: 3 }}
          >
            <Box
              onClick={() => window.open(item.link, "_blank")}
              sx={{
                cursor: "pointer",
                textAlign: "left",
                maxWidth: 300,
                mx: "auto",
                "&:hover .creation-img": {
                  transform: "scale(1.035)",
                },
                "&:hover .creation-overlay": {
                  opacity: 1,
                },
                "&:hover .creation-title": {
                  color: "#b3151d",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "28px",
                  aspectRatio: "1 / 2",
                  boxShadow: "0 18px 40px rgba(75,45,35,.13)",
                  bgcolor: "#eadfcd",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.imageUrl}
                  alt={item.title}
                  className="creation-img"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    transition: "transform .7s ease",
                  }} />

                <Box
                  className="creation-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0,
                    transition: "opacity .35s ease",
                    background: "linear-gradient(180deg, rgba(0,0,0,.03) 0%, rgba(0,0,0,.45) 100%)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    pb: 3,
                  }}
                >
                  <Box
                    sx={{
                      color: "#fff",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: ".78rem",
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(255,255,255,.65)",
                      borderRadius: "999px",
                      px: 2.5,
                      py: 1,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    Ver invitación
                  </Box>
                </Box>
              </Box>

              <Box sx={{ mt: 2.2, px: 0.5 }}>
                <Box sx={{display:"flex", justifyContent:"space-between", gap: 1, mb: 0.8}}>
                    <Typography
                    className="creation-title"
                    sx={{
                      fontFamily: "'DM Serif Display', serif",
                      color: "#a41423",
                      fontSize: "1.35rem",
                      lineHeight: 1.1,
                      transition: "color .25s ease",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Chip                    label={item.package}
                    size="small"
                    sx={{ 
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                      bgcolor: "rgba(164,20,35,.12)",
                      color: "#a41423",
                      border: "1px solid rgba(164,20,35,.18)",
                    }}
                  />
                </Box>
                

                <Typography
                  sx={{
                    mt: 0.8,
                    fontFamily: "Montserrat, sans-serif",
                    color: "#bdaa8c",
                    fontSize: ".72rem",
                    fontWeight: 600,
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.category}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* CTA FINAL */}
      <Box
        sx={{
          mt: { xs: 8, md: 12 },
          maxWidth: 720,
          mx: "auto",
          px: { xs: 3, md: 6 },
          py: { xs: 5, md: 6 },
          borderRadius: "32px",
          bgcolor: "rgba(255,255,255,.42)",
          border: "1px solid rgba(200,173,120,.35)",
          boxShadow: "0 20px 50px rgba(75,45,35,.08)",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'DM Serif Display', serif",
            color: "#a41423",
            fontSize: { xs: "2rem", md: "2.8rem" },
            mb: 1.5,
          }}
        >
          ¿Lista para crear la tuya?
        </Typography>

        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            color: "#7d5f55",
            lineHeight: 1.7,
            mb: 3,
          }}
        >
          Creamos una invitación personalizada para que tus invitados vivan la
          emoción desde el primer clic.
        </Typography>

        <Box
          component="a"
          href="https://wa.me/526621234567"
          target="_blank"
          sx={{
            display: "inline-flex",
            textDecoration: "none",
            fontFamily: "Montserrat, sans-serif",
            bgcolor: "#a41423",
            color: "#fff",
            px: 4,
            py: 1.4,
            borderRadius: "999px",
            fontWeight: 600,
            boxShadow: "0 12px 26px rgba(164,20,35,.22)",
            transition: "all .25s ease",
            "&:hover": {
              bgcolor: "#7f0f1b",
              transform: "translateY(-2px)",
            },
          }}
        >
          Solicitar información
        </Box>
      </Box>
    </Box></>
);
};

export default CreacionesPage;
