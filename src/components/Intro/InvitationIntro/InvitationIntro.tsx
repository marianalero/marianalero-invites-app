import { Box, Typography } from "@mui/material";
import { RefObject } from "react";
import { MusicFabPlayerHandle } from "../../MusicFabPlayer/MusicFabPlayer";

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

  guestName,
  guestCount,

  sealPosition = {
    top: "50%",
    left: "50%",
    width: "60px",
    height: "60px",
    transform: "translate(-50%, -50%)",
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
        )}

        {/* Titulo */}
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

        {/* Nombres */}
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
          <img
            src={envelopeImg}
            alt="Envelope"
            style={{
              width: "100%",
              maxWidth: "320px",
              objectFit: "contain",
              display: "block",
            }}
          />

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
              }}
            />
          )}

          {/* Tap to open */}
          <Typography
            className={bodyTypo}
            sx={{
              position: "absolute",
              bottom: "-45px",

              color: primaryColor,

              opacity: 0.7,

              letterSpacing: "2px",
              fontSize: "0.85rem",

              textTransform: "uppercase",
            }}
          >
            Click para abrir
          </Typography>
        </Box>

        {/* Texto inferior */}
        <Box>
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
        </Box>
      </Box>
    </Box>
  );
};

export default InvitationIntro;