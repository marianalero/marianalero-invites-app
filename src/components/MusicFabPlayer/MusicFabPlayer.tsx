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
  /** Segundo desde el que debe empezar (y volver al hacer loop). */
  startTime?: number;
}

export interface MusicFabPlayerHandle {
  play: () => void;
  pause: () => void;
}

const MusicFabPlayer = forwardRef<MusicFabPlayerHandle, MusicFabPlayerProps>(
  ({ src, backgroundColor, startTime = 0 }, ref) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const seekToStart = (audio: HTMLAudioElement) => {
      if (startTime <= 0) return;
      if (!Number.isFinite(audio.duration) || startTime >= audio.duration) return;
      audio.currentTime = startTime;
    };

    const initAudio = () => {
      if (!audioRef.current) {
        audioRef.current = new Audio(src);
        audioRef.current.preload = "metadata";
        audioRef.current.loop = startTime <= 0;

        if (startTime > 0) {
          audioRef.current.addEventListener("loadedmetadata", () => {
            if (audioRef.current) seekToStart(audioRef.current);
          });
          // Con loop nativo el audio vuelve a 0; al terminar, saltamos de nuevo a startTime.
          audioRef.current.addEventListener("ended", () => {
            const audio = audioRef.current;
            if (!audio) return;
            seekToStart(audio);
            void audio.play();
          });
        }
      }
    };

    const play = async () => {
      initAudio();
      const audio = audioRef.current;
      if (!audio) return;

      try {
        audio.volume = 0;
        if (startTime > 0 && !Number.isFinite(audio.duration)) {
          await new Promise<void>((resolve) => {
            audio.addEventListener("loadedmetadata", () => resolve(), { once: true });
          });
        }
        if (startTime > 0 && audio.currentTime < 0.25) {
          seekToStart(audio);
        }
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
