import { useState } from "react";
import "./EnvelopeIntro.scss";
import LeftFlap from "./LeftFlap";
import RightFlap from "./RightFlap";
import { EnvelopeIntroProps } from "./type";
import { motion } from "motion/react";
import {
    FLAP_DELAY,
    FLAP_DURATION,
    SEAL_DURATION,
    leftVariants,
    rightVariants,
    sealVariants,
} from "./animations";
import { useEnvelopeGeometry } from "./geometry";

const EnvelopeIntro = ({
    open,
    onEnter,
    sealImage,
    musicRef,
    envelopeColor = "#111111",
    envelopeHighlight = "rgba(255,255,255,.05)",
    overlayColor = "#050505",
    shadowColor = "rgba(0,0,0,.45)",
}: EnvelopeIntroProps) => {
    const [isOpening, setIsOpening] = useState(false);
    const geometry = useEnvelopeGeometry();

    if (!open) return null;

    const handleSealClick = () => {
        if (isOpening) return;
        setIsOpening(true);
        musicRef?.current?.play();
        onEnter();
    };

    return (
        <div
            className={`envelope-overlay${isOpening ? " is-opening" : ""}`}
            style={{
                "--overlay-color": overlayColor,
                "--envelope-color": envelopeColor,
                "--highlight": envelopeHighlight,
                "--shadow": shadowColor,
                "--seal-x": `${geometry.sealX}%`,
                "--seal-y": `${geometry.sealY}%`,
            } as React.CSSProperties}
        >
            <div className="envelope">
                <motion.div
                    className="left-flap"
                    variants={leftVariants}
                    initial="closed"
                    animate={isOpening ? "open" : "closed"}
                    transition={{
                        duration: FLAP_DURATION,
                        delay: FLAP_DELAY,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                >
                    <LeftFlap geometry={geometry} />
                </motion.div>

                <motion.div
                    className="right-flap"
                    animate={isOpening ? "open" : "closed"}
                    variants={rightVariants}
                    transition={{
                        duration: FLAP_DURATION,
                        delay: FLAP_DELAY,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                >
                    <RightFlap geometry={geometry} />
                </motion.div>

                <motion.img
                    src={sealImage}
                    className="seal"
                    onClick={handleSealClick}
                    variants={sealVariants}
                    initial="closed"
                    animate={isOpening ? "open" : "closed"}
                    transition={{
                        duration: SEAL_DURATION,
                    }}
                />
            </div>
        </div>
    );
};

export default EnvelopeIntro;
