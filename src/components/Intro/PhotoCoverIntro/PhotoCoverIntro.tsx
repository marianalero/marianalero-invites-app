import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { RefObject, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { MusicFabPlayerHandle } from "../../MusicFabPlayer/MusicFabPlayer";

export interface PhotoCoverIntroProps {
  open: boolean;
  onEnter: () => void;
  musicRef?: RefObject<MusicFabPlayerHandle | null>;

  /** Foto de fondo a pantalla completa. */
  image: string;
  /** Recorte del fondo, por ejemplo "center 30%". */
  imagePosition?: string;
  /** Retrato opcional en la esquina superior izquierda. */
  portraitImage?: string;

  names: string;
  namesTypo: string;
  fontSizeNames?: string;

  /** Frase corta sobre los nombres. Por ejemplo "nos casamos". */
  phrase?: string;
  date?: string;
  /** Línea opcional debajo de la fecha. */
  extraText?: string;
  bodyTypo?: string;

  /** Monograma en imagen. Si no se manda, se puede usar texto. */
  monogramImage?: string;
  monogramText?: string;
  monogramTypo?: string;
  monogramWidth?: number | string;

  textColor?: string;
  buttonLabel?: string;
  showHeart?: boolean;
  /** Capa sobre la foto para que el texto se lea. */
  overlay?: string;
  waitForImages?: boolean;
}

const DEFAULT_OVERLAY =
  "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.04) 32%, rgba(0,0,0,0.1) 58%, rgba(0,0,0,0.22) 100%)";

const PhotoCoverIntro = ({
  open,
  onEnter,
  musicRef,
  image,
  imagePosition = "center center",
  portraitImage,
  names,
  namesTypo,
  fontSizeNames,
  phrase,
  date,
  extraText,
  bodyTypo,
  monogramImage,
  monogramText,
  monogramTypo,
  monogramWidth = 92,
  textColor = "#ffffff",
  buttonLabel = "Abrir invitación",
  showHeart = true,
  overlay = DEFAULT_OVERLAY,
  waitForImages = true,
}: PhotoCoverIntroProps) => {
  const [loaded, setLoaded] = useState(!waitForImages);

  useEffect(() => {
    if (!waitForImages) {
      setLoaded(true);
      return;
    }

    const sources = [image, portraitImage, monogramImage].filter(
      Boolean
    ) as string[];

    if (sources.length === 0) {
      setLoaded(true);
      return;
    }

    let isActive = true;
    setLoaded(false);

    Promise.all(
      sources.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      )
    ).then(() => {
      if (isActive) setLoaded(true);
    });

    return () => {
      isActive = false;
    };
  }, [image, monogramImage, portraitImage, waitForImages]);

  const handleEnter = () => {
    musicRef?.current?.play();
    onEnter();
  };

  const visible = open && loaded;
  const showMonogram = Boolean(monogramImage || monogramText);

  return (
    <>
      <Backdrop
        open={open && !loaded}
        sx={{
          zIndex: 10000,
          color: textColor,
          backgroundColor: "#1b242c",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CircularProgress sx={{ color: textColor }} size={52} />
        <Typography
          className={bodyTypo}
          sx={{
            color: textColor,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontSize: "0.78rem",
          }}
        >
          Cargando invitación...
        </Typography>
      </Backdrop>

      <Box
        aria-hidden={!open}
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          overflow: "auto",
          backgroundColor: "#1b242c",
          color: textColor,
          opacity: visible ? 1 : 0,
          filter: visible ? "blur(0px)" : "blur(18px)",
          transform: visible ? "scale(1)" : "scale(1.04)",
          transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <Box
          component="img"
          src={image}
          alt=""
          draggable={false}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: imagePosition,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: overlay,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            minHeight: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            px: 3,
            pt: 2,
            pb: "7vh",
          }}
        >
          {portraitImage && (
            <Box
              component="img"
              src={portraitImage}
              alt=""
              draggable={false}
              sx={{
                width: "min(40vw, 168px)",
                aspectRatio: "4 / 5",
                objectFit: "cover",
                borderRadius: "18px",
                boxShadow: "0 12px 28px rgba(0,0,0,0.28)",
                alignSelf: "flex-start",
              }}
            />
          )}

          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
            }}
          >
          <Box
            sx={{
              width: "100%",
              maxWidth: 460,
              py: 2,
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0) 72%)",
            }}
          >
            {showMonogram && (
              <Fade direction="up" triggerOnce>
                {monogramImage ? (
                  <Box
                    component="img"
                    src={monogramImage}
                    alt=""
                    draggable={false}
                    sx={{
                      width: monogramWidth,
                      maxWidth: "46%",
                      height: "auto",
                      display: "block",
                      mx: "auto",
                      mb: 0.5,
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <Typography
                    className={monogramTypo || namesTypo}
                    sx={{
                      color: "inherit",
                      fontSize: { xs: "2.7rem", sm: "3.1rem" },
                      lineHeight: 0.9,
                      mb: 0.5,
                    }}
                  >
                    {monogramText}
                  </Typography>
                )}
              </Fade>
            )}

            {phrase && (
              <Fade direction="up" triggerOnce delay={80}>
                <Typography
                  className={bodyTypo}
                  sx={{
                    color: "inherit",
                    fontSize: "1.02rem",
                    lineHeight: 1.3,
                    mb: 0.75,
                    textShadow: "0 2px 14px rgba(0,0,0,0.35)",
                  }}
                >
                  {phrase}
                </Typography>
              </Fade>
            )}

            <Fade direction="up" triggerOnce delay={140}>
              <Typography
                translate="no"
                className={namesTypo}
                sx={{
                  color: "inherit",
                  fontSize: fontSizeNames ?? {
                    xs: "2.85rem",
                    sm: "3.55rem",
                  },
                  lineHeight: 1.08,
                  mb: 1.25,
                  textShadow: "0 2px 16px rgba(0,0,0,0.35)",
                  whiteSpace: "pre-line",
                }}
              >
                {names}
              </Typography>
            </Fade>

            {date && (
              <Fade direction="up" triggerOnce delay={200}>
                <Typography
                  className={bodyTypo}
                  sx={{
                    color: "inherit",
                    fontSize: "0.74rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    lineHeight: 1.6,
                  }}
                >
                  {date}
                </Typography>
              </Fade>
            )}

            {extraText && (
              <Fade direction="up" triggerOnce delay={240}>
                <Typography
                  className={bodyTypo}
                  sx={{
                    color: "inherit",
                    fontSize: "0.95rem",
                    lineHeight: 1.5,
                    maxWidth: 300,
                    mx: "auto",
                    mt: 1.25,
                    whiteSpace: "pre-line",
                    textShadow: "0 2px 14px rgba(0,0,0,0.35)",
                  }}
                >
                  {extraText}
                </Typography>
              </Fade>
            )}

            <Fade direction="up" triggerOnce delay={300}>
              <Box
                component="button"
                type="button"
                onClick={handleEnter}
                className={bodyTypo}
                sx={{
                  mt: 4,
                  px: 3,
                  py: 1.2,
                  borderRadius: "999px",
                  border: "1px solid currentColor",
                  backgroundColor: "transparent",
                  color: "inherit",
                  letterSpacing: "0.16em",
                  fontSize: "0.68rem",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  lineHeight: 1,
                  transition:
                    "background-color .35s ease, transform .35s ease",
                  "&:hover": {
                    backgroundColor:
                      "color-mix(in srgb, currentColor 14%, transparent)",
                  },
                }}
              >
                {buttonLabel}
                {showHeart && (
                  <FavoriteBorderIcon sx={{ fontSize: 15 }} />
                )}
              </Box>
            </Fade>
          </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PhotoCoverIntro;
