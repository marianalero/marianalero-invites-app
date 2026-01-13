import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import { Fab } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

interface MusicFabPlayerProps {
  src: string;
  backgroundColor: string;
}

export interface MusicFabPlayerHandle {
  play: () => void;
  pause: () => void;
}

const MusicFabPlayer = forwardRef<MusicFabPlayerHandle, MusicFabPlayerProps>(
  ({ src, backgroundColor }, ref) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const initAudio = () => {
      if (!audioRef.current) {
        audioRef.current = new Audio(src);
        audioRef.current.loop = true;
        audioRef.current.preload = "none";
        
      }
    };

    const play = async () => {
      initAudio();
      const audio = audioRef.current;
      if (!audio) return;

      try {
        audio.volume = 0;
        await audio.play();
        setIsPlaying(true);

        const fadeInterval = setInterval(() => {
          if (!audio) return;

          audio.volume = Math.min(audio.volume + 0.05, 1);

          if (audio.volume >= 1) {
            clearInterval(fadeInterval);
          }
        }, 100);
      } catch {
        // autoplay bloqueado → requiere interacción
      }
    };

    const pause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.volume = 1; // reset
    setIsPlaying(false);
};

    const togglePlay = () => {
      isPlaying ? pause() : play();
    };

    useImperativeHandle(ref, () => ({
      play,
      pause,
    }));

    return (
      <Fab
        onClick={togglePlay}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          backgroundColor,
          color: "#fff",
          "&:hover": { backgroundColor },
        }}
      >
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </Fab>
    );
  }
);

export default MusicFabPlayer;
