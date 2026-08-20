import { RefObject } from "react";
import { MusicFabPlayerHandle } from "../MusicFabPlayer/MusicFabPlayer";

export interface EnvelopeIntroProps {
    open: boolean;
    onEnter: () => void;
    musicRef?:  RefObject<MusicFabPlayerHandle>;
    sealImage: string;
      // Personalización
    envelopeColor?: string;
    envelopeHighlight?: string;
    overlayColor?: string;
    shadowColor?: string;
}
export const DEFAULT_ANIMATION = 2200;