import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Fab } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

interface MusicFabPlayerProps {
  src: string;
  backgroundColor:string;
  autoPlay?: boolean;
}

export interface MusicFabPlayerHandle {
  play: () => void;
  pause: () => void;
}

const MusicFabPlayer = forwardRef<MusicFabPlayerHandle, MusicFabPlayerProps>(
  ({ src, autoPlay = false ,backgroundColor}, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const play = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.play().then(() => setIsPlaying(true));
    };

    const pause = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.pause();
      setIsPlaying(false);
    };

    const togglePlay = () => {
      if (isPlaying) {
        pause();
      } else {
        play();
       }
    };

    useEffect(() => {
      if (autoPlay) {
        play();
      }
    }, [autoPlay]);

    // Exponer funciones al componente padre
    useImperativeHandle(ref, () => ({
      play,
      pause,
    }));

    return (
      <>
        <audio ref={audioRef} src={src} preload="auto" />
        
        <Fab
          color="primary"
          onClick={togglePlay}
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 1000,
            backgroundColor: {backgroundColor},
            color: "#fff",
            "&:hover": {
              backgroundColor: {backgroundColor},
            },
          }}
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </Fab>
      </>
    );
  }
);

export default MusicFabPlayer;