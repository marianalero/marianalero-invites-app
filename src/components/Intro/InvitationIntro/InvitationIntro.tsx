import { Box, Typography } from "@mui/material";
import { RefObject } from "react";
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
  const handleEnter = () => {
    musicRef?.current?.play();
    onEnter();
  };

  return (
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

        opacity: open ? 1 : 0,

        filter: open
          ? "blur(0px)"
          : "blur(18px)",

        transform: open
          ? "scale(1)"
          : "scale(1.06)",

        transition:
          "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",

        pointerEvents: open ? "auto" : "none",
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
                src={envelopeImg}
                alt="Envelope"
                style={{
                  width: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />

              {topLeftCornerImg && (
                <img
                  src={topLeftCornerImg}
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
                  }}
                />
              )}

              {bottomRightCornerImg && (
                <img
                  src={bottomRightCornerImg}
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
                  }}
                />
              )}

              {/* Sello */}
              {sealImg && (
                <img
                  src={sealImg}
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
  );
};

export default InvitationIntro;