import {
  Backdrop,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import { RefObject, useEffect, useState } from "react";
import { MusicFabPlayerHandle } from "../../MusicFabPlayer/MusicFabPlayer";
import { Fade } from "react-awesome-reveal";

export interface InvitationIntroProps {
  open: boolean;
  onEnter: () => void;
  musicRef?: RefObject<MusicFabPlayerHandle | null>;

  title: string;

  brideName: string;
  groomName: string;
  ampersonSymbol: string;

  namesTypo: string;
  guestTypo: string;
  bodyTypo: string;
  ampersonTypo?: string;

  backgroundColor?: string;
  primaryColor?: string;

  envelopeImg: string;
  sealImg?: string;
  topLeftCornerImg?: string;
  bottomRightCornerImg?: string;

  guestName?: string;
  guestCount?: number;

  sealPosition?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    width?: string;
    height?: string;
    transform?: string;
  };

  topLeftCornerPosition?: {
    top?: string;
    left?: string;
    width?: string;
    height?: string;
    transform?: string;
  };

  bottomRightCornerPosition?: {
    bottom?: string;
    right?: string;
    width?: string;
    height?: string;
    transform?: string;
  };
}

const InvitationIntro = ({
  open,
  onEnter,
  musicRef,

  title,

  brideName,
  groomName,
  ampersonSymbol,

  namesTypo,
  guestTypo,
  bodyTypo,
  ampersonTypo,

  backgroundColor = "#ffffff",
  primaryColor = "#1A1A1A",

  envelopeImg,
  sealImg,
  topLeftCornerImg,
  bottomRightCornerImg,

  guestName,
  guestCount = 1,

  sealPosition = {
    top: "50%",
    left: "50%",
    width: "60px",
    height: "60px",
    transform: "translate(-50%, -50%)",
  },

  topLeftCornerPosition = {
    top: "8px",
    left: "8px",
    width: "70px",
    height: "70px",
  },

  bottomRightCornerPosition = {
    bottom: "8px",
    right: "8px",
    width: "70px",
    height: "70px",
  },
}: InvitationIntroProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const imageSources = [
      envelopeImg,
      sealImg,
      topLeftCornerImg,
      bottomRightCornerImg,
    ].filter(Boolean) as string[];

    if (imageSources.length === 0) {
      setLoaded(true);
      return;
    }

    let isActive = true;
    setLoaded(false);

    Promise.all(
      imageSources.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      )
    ).then(() => {
      if (isActive) {
        setLoaded(true);
      }
    });

    return () => {
      isActive = false;
    };
  }, [
    bottomRightCornerImg,
    envelopeImg,
    sealImg,
    topLeftCornerImg,
  ]);

  const handleEnter = () => {
    musicRef?.current?.play();
    onEnter();
  };

  const GENERIC_BLUR =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQEA8PEA8PDw8PDw8PDw8PDw8PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAAEAAQMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAgAD/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIQAxAAAAH6A//EABgQAQEBAQEAAAAAAAAAAAAAAAERAhIh/9oACAEBAAEFAk8d4o//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8BSP/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/ASf/xAAbEAADAQEBAQEAAAAAAAAAAAABERAhMUFRcf/aAAgBAQAGPwKzK0kAq0p1k//EABsQAQEAAwEBAQAAAAAAAAAAAAERACExQVFh/9oACAEBAAE/IVFZfE2PqC5nSlQ2RZ5WqX//2gAMAwEAAgADAAAAEB//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QEf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/ECL/xAAbEAEBAQEAAwEAAAAAAAAAAAABEQAhMVFhcf/aAAgBAQABPxDkXIpT+R9xKk4a5QZ2h+V5J7VZ//Z";
    
  return (
    <>
      <Backdrop
        open={!loaded}
        sx={{
          zIndex: 10000,
          color: primaryColor,
          backgroundColor,
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CircularProgress sx={{ color: primaryColor }} size={52} />
        <Typography
          className={bodyTypo}
          sx={{
            color: primaryColor,
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "0.85rem",
          }}
        >
          Cargando invitacion...
        </Typography>
      </Backdrop>

      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,

          backgroundColor,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          overflow: "hidden",
          px: 2,

          opacity: open && loaded ? 1 : 0,

          filter: open && loaded
            ? "blur(0px)"
            : "blur(18px)",

          transform: open && loaded
            ? "scale(1)"
            : "scale(1.06)",

          transition:
            "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",

          pointerEvents: open && loaded ? "auto" : "none",
        }}
      >
        <Box
          sx={{
            maxWidth: "500px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {/* Invitado */}
          {guestName && (
             <Fade direction="up" >
              <Typography
                mb={1}
                className={guestTypo}
                sx={{
                  color: primaryColor,
                  letterSpacing: "2px",
                  fontSize: "0.95rem",
                  textTransform: "uppercase",
                }}
              >
                {guestName}
              </Typography>
            </Fade>
          )}

          {/* Titulo */}
          <Fade direction="up" >
            <Typography
              className={bodyTypo}
              sx={{
                color: primaryColor,
                fontSize: "0.9rem",
                letterSpacing: "2px",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            {title}
          </Typography>
          </Fade>

          {/* Nombres */}
          <Fade direction="up" >
          <Typography
            mb={3}
            className={namesTypo}
            sx={{
              color: primaryColor,
              fontSize: {
                xs: "2.5rem",
                md: "3.5rem",
              },
              lineHeight: 1.1,
            }}
          >
            {brideName}{" "}
            <span className={ampersonTypo}>
              {ampersonSymbol}
            </span>{" "}
            {groomName}
          </Typography>
            </Fade>
          {/* Sobre */}
          <Box
            onClick={handleEnter}
            sx={{
              position: "relative",

              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",

              mb: 8,

              cursor: "pointer",

              transition:
                "transform .6s cubic-bezier(0.22, 1, 0.36, 1)",

              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            <Fade direction="up" >
              <Box
                sx={{
                  display: "inline-block",
                  justifyContent: "center",
                  position: "relative",
                  width: "min(100%, 320px)",
                }}
              >
                <img
                  src={loaded ? envelopeImg : GENERIC_BLUR}
                  alt="Envelope"
                  loading="eager"
                  decoding="async"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    display: "block",
                    filter: loaded ? "blur(0)" : "blur(24px)",
                    opacity: loaded ? 1 : 0.85,
                    transition: "opacity 0.8s ease, filter 0.8s ease",
                  }}
                />

                {topLeftCornerImg && (
                  <img
                    src={loaded ? topLeftCornerImg : GENERIC_BLUR}
                    alt="Top left decoration"
                    style={{
                      position: "absolute",
                      top: topLeftCornerPosition.top,
                      left: topLeftCornerPosition.left,
                      width: topLeftCornerPosition.width,
                      height: topLeftCornerPosition.height,
                      transform: topLeftCornerPosition.transform,
                      objectFit: "contain",
                      zIndex: 2,
                      pointerEvents: "none",
                      filter: loaded ? "none" : "blur(20px)",
                      opacity: loaded ? 1 : 0,
                      transition: "opacity 0.8s ease, filter 0.8s ease",
                    }}
                  />
                )}

                {bottomRightCornerImg && (
                  <img
                    src={loaded ? bottomRightCornerImg : GENERIC_BLUR}
                    alt="Bottom right decoration"
                    style={{
                      position: "absolute",
                      bottom: bottomRightCornerPosition.bottom,
                      right: bottomRightCornerPosition.right,
                      width: bottomRightCornerPosition.width,
                      height: bottomRightCornerPosition.height,
                      transform: bottomRightCornerPosition.transform,
                      objectFit: "contain",
                      zIndex: 2,
                      pointerEvents: "none",
                      filter: loaded ? "none" : "blur(20px)",
                      opacity: loaded ? 1 : 0,
                      transition: "opacity 0.8s ease, filter 0.8s ease",
                    }}
                  />
                )}

                {/* Sello */}
                {sealImg && (
                  <img
                    src={loaded ? sealImg : GENERIC_BLUR}
                    alt="Seal"
                    style={{
                      position: "absolute",

                      top: sealPosition.top,
                      left: sealPosition.left,
                      right: sealPosition.right,
                      bottom: sealPosition.bottom,

                      width: sealPosition.width,
                      height: sealPosition.height,

                      transform: sealPosition.transform,

                      objectFit: "contain",
                      zIndex: 3,
                      filter: loaded ? "none" : "blur(20px)",
                      opacity: loaded ? 1 : 0,
                      transition: "opacity 0.8s ease, filter 0.8s ease",
                    }}
                  />
                )}
              </Box>
            </Fade>

            {/* Tap to open */}
            
          </Box>

          {/* Texto inferior */}
          <Box>
            <Fade direction="up" >
            <Typography
              className={bodyTypo}
              sx={{
       

                color: primaryColor,

                opacity: 0.7,

                letterSpacing: "2px",
                fontSize: "0.85rem",

                textTransform: "uppercase",
              }}
            >
              Click para abrir
            </Typography>
            </Fade>
              <Fade direction="up" >
            <Typography
              className={bodyTypo}
              sx={{
                color: primaryColor,
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Hemos reservado
              {guestCount && (
                <>
                  {" "}
                  <strong>{guestCount}</strong>{" "}
                  {guestCount === 1
                    ? "lugar"
                    : "lugares"}
                </>
              )}{" "}
              para ti en este día tan especial.
            </Typography>
            </Fade>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InvitationIntro;
