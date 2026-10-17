import { useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import MusicFabPlayer, {
  MusicFabPlayerHandle,
} from "../../../components/MusicFabPlayer/MusicFabPlayer";
import PhotoCoverIntro from "../../../components/Intro/PhotoCoverIntro/PhotoCoverIntro";
import InvitationIntro from "../../../components/Intro/InvitationIntro/InvitationIntro";
import EnvelopeIntro from "../../../components/EnvelopeIntro/EnvelopeIntro";
import { ENVELOPE_OPEN_MS } from "../../../components/EnvelopeIntro/animations";
import { URL_REPO } from "../../../config";

type IntroOption = "foto" | "sobre" | "sello";

const URL_SONG = `${URL_REPO}/canciones/AThousandYears-ChristinaPerri-Violin.mp3`;
const COVER =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80";
const PORTRAIT =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80";
const ENVELOPE = `${URL_REPO}demos/black-envelope.png`;
const SEAL = `${URL_REPO}boda/boda-vianney-alberto/sello.png`;

const OPTIONS: {
  id: IntroOption;
  kicker: string;
  title: string;
  text: string;
}[] = [
  {
    id: "foto",
    kicker: "01",
    title: "Portada con foto",
    text: "La fotografía ocupa toda la pantalla, con la frase, los nombres, la fecha y el botón de abrir.",
  },
  {
    id: "sobre",
    kicker: "02",
    title: "Sobre clásico",
    text: "Los nombres quedan arriba y el sobre al centro. Se abre al tocarlo.",
  },
  {
    id: "sello",
    kicker: "03",
    title: "Sobre con sello",
    text: "Un sobre oscuro que se abre al tocar el sello, con las solapas en movimiento.",
  },
];

const IntroOptionsPage = () => {
  const [option, setOption] = useState<IntroOption | null>(null);
  const [introOpen, setIntroOpen] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const musicRef = useRef<MusicFabPlayerHandle>(null);

  const choose = (id: IntroOption) => {
    musicRef.current?.pause();
    setShowInvitation(false);
    setOption(id);
    setIntroOpen(true);
  };

  const handleEnter = () => {
    setShowInvitation(true);
    const wait = option === "sello" ? ENVELOPE_OPEN_MS : 900;
    window.setTimeout(() => setIntroOpen(false), wait);
  };

  const backToOptions = () => {
    musicRef.current?.pause();
    setOption(null);
    setIntroOpen(false);
    setShowInvitation(false);
  };

  const previewLocked = Boolean(option && introOpen);

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        height: previewLocked ? "100dvh" : "auto",
        overflow: previewLocked ? "hidden" : "auto",
        background:
          "linear-gradient(180deg, #f8f4ec 0%, #f3eadf 50%, #f8f4ec 100%)",
        color: "#3d342c",
      }}
    >
      {option && (
        <MusicFabPlayer
          ref={musicRef}
          src={URL_SONG}
          backgroundColor="#3d342c"
        />
      )}

      {!option && (
      <Box
        sx={{
          maxWidth: 1120,
          mx: "auto",
          px: { xs: 2.5, md: 4 },
          py: { xs: 5, md: 7 },
        }}
      >
        <Typography
          className="instrument-sans"
          sx={{
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontSize: "0.72rem",
            color: "#a08b72",
            textAlign: "center",
          }}
        >
          Intros
        </Typography>
        <Typography
          className="great-vibes-regular"
          sx={{
            fontSize: { xs: "3.1rem", md: "4.2rem" },
            textAlign: "center",
            lineHeight: 1.05,
            mt: 1,
          }}
        >
          Elige cómo empieza
        </Typography>
        <Typography
          className="instrument-sans"
          sx={{
            textAlign: "center",
            maxWidth: 520,
            mx: "auto",
            mt: 1.5,
            color: "#6d6258",
            lineHeight: 1.6,
          }}
        >
          Estas son las tres formas de abrir la invitación. Toca una para
          verla completa. Al abrirla suena la música, igual que la verán los
          invitados.
        </Typography>

        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 2.5 },
          }}
        >
          {OPTIONS.map((item) => (
            <Box
              key={item.id}
              component="button"
              type="button"
              onClick={() => choose(item.id)}
              sx={{
                p: 0,
                border: "1px solid rgba(61,52,44,0.12)",
                borderRadius: "22px",
                overflow: "hidden",
                background: "#fffdf9",
                textAlign: "left",
                cursor: "pointer",
                color: "inherit",
                boxShadow: "0 16px 40px rgba(61,52,44,0.06)",
                transition: "transform .35s ease, box-shadow .35s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 44px rgba(61,52,44,0.12)",
                },
              }}
            >
              <OptionPreview id={item.id} />
              <Box sx={{ px: 2.25, py: 2.25 }}>
                <Typography
                  className="instrument-sans"
                  sx={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.18em",
                    color: "#a08b72",
                  }}
                >
                  {item.kicker}
                </Typography>
                <Typography
                  className="prata"
                  sx={{ fontSize: "1.35rem", mt: 0.5, lineHeight: 1.2 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  className="instrument-sans"
                  sx={{
                    mt: 1,
                    color: "#6d6258",
                    fontSize: "0.92rem",
                    lineHeight: 1.55,
                  }}
                >
                  {item.text}
                </Typography>
                <Typography
                  className="instrument-sans"
                  sx={{
                    mt: 2,
                    fontSize: "0.72rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#3d342c",
                  }}
                >
                  Ver esta opción
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      )}

      {option === "foto" && (
        <PhotoCoverIntro
          open={introOpen}
          onEnter={handleEnter}
          musicRef={musicRef}
          image={COVER}
          imagePosition="center 40%"
          portraitImage={PORTRAIT}
          monogramText="AR"
          monogramTypo="allura-regular"
          phrase="nos casamos"
          names="Angela y Ramiro"
          namesTypo="great-vibes-regular"
          date="08 de enero 2028"
          extraText="Un día para celebrar juntos"
          bodyTypo="instrument-sans"
        />
      )}

      {option === "sobre" && (
        <InvitationIntro
          open={introOpen}
          onEnter={handleEnter}
          musicRef={musicRef}
          title="Una celebración está por comenzar"
          brideName="Angela"
          groomName="Ramiro"
          ampersonSymbol="y"
          namesTypo="great-vibes-regular"
          ampersonTypo="great-vibes-regular"
          guestTypo="instrument-sans"
          bodyTypo="instrument-sans"
          backgroundColor="#f6f1ea"
          primaryColor="#3d342c"
          envelopeImg={ENVELOPE}
          sealImg={SEAL}
          hideGuest
          waitForImages
        />
      )}

      {option === "sello" && (
        <EnvelopeIntro
          open={introOpen}
          onEnter={handleEnter}
          musicRef={musicRef}
          sealImage={SEAL}
          envelopeColor="#141414"
          overlayColor="#0c0c0c"
          envelopeHighlight="rgba(255,255,255,.05)"
          shadowColor="rgba(0,0,0,.5)"
        />
      )}

      {option && (
      <Box
        sx={{
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 3,
          opacity: showInvitation ? 1 : 0,
          filter: showInvitation ? "none" : "blur(16px)",
          transform: showInvitation ? "scale(1)" : "scale(1.03)",
          transition: "opacity 1.2s ease, filter 1.2s ease, transform 1.2s ease",
          background: "#f6f1ea",
        }}
      >
        <Box>
          <Typography
            className="great-vibes-regular"
            sx={{ fontSize: { xs: "3.2rem", md: "4rem" }, color: "#3d342c" }}
          >
            Angela y Ramiro
          </Typography>
          <Typography
            className="instrument-sans"
            sx={{
              mt: 1,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontSize: "0.78rem",
              color: "#6d6258",
            }}
          >
            Aquí empieza la invitación
          </Typography>
        </Box>
      </Box>
      )}

      {option && (
        <Box
          component="button"
          type="button"
          onClick={backToOptions}
          className="instrument-sans"
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 100001,
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.45)",
            background: "rgba(20,16,14,0.55)",
            color: "#fff",
            backdropFilter: "blur(8px)",
            px: 2,
            py: 1,
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Ver las tres
        </Box>
      )}
    </Box>
  );
};

const OptionPreview = ({ id }: { id: IntroOption }) => {
  if (id === "foto") {
    return (
      <Box
        sx={{
          height: { xs: 280, md: 340 },
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.45)), url(${COVER})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          color: "#fff",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          pb: 3,
          textAlign: "center",
        }}
      >
        <Box>
          <Typography className="allura-regular" sx={{ fontSize: "2rem", lineHeight: 1 }}>
            AR
          </Typography>
          <Typography className="great-vibes-regular" sx={{ fontSize: "2.2rem", lineHeight: 1 }}>
            Angela y Ramiro
          </Typography>
        </Box>
      </Box>
    );
  }

  if (id === "sobre") {
    return (
      <Box
        sx={{
          height: { xs: 280, md: 340 },
          bgcolor: "#f6f1ea",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          px: 2,
        }}
      >
        <Typography className="great-vibes-regular" sx={{ fontSize: "2rem", color: "#3d342c" }}>
          Angela y Ramiro
        </Typography>
        <Box
          component="img"
          src={ENVELOPE}
          alt=""
          sx={{ width: "58%", maxWidth: 180, display: "block" }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: { xs: 280, md: 340 },
        bgcolor: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src={SEAL}
        alt=""
        sx={{ width: 92, height: 92, objectFit: "contain" }}
      />
    </Box>
  );
};

export default IntroOptionsPage;
