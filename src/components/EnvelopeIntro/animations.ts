export const SEAL_DURATION = 0.45;
export const FLAP_DELAY = 0.35;
export const FLAP_DURATION = 0.9;

/** Time from click until flaps finish; parent can unmount the intro after this. */
export const ENVELOPE_OPEN_MS = Math.round((FLAP_DELAY + FLAP_DURATION) * 1000) + 250;

const leftVariants = {
    closed: {
        rotateY: 0,
    },
    open: {
        rotateY: -170,
    },
};

const rightVariants = {
    closed: {
        rotateY: 0,
    },
    open: {
        rotateY: 170,
    },
};

const sealVariants = {
    closed: {
        scale: 1,
        rotate: 0,
        y: 0,
        opacity: 1,
    },
    /** Gentle pulse while waiting for the tap that opens the envelope. */
    idle: {
        scale: [1, 1.09, 1, 1.05, 1],
        rotate: [0, -5, 3, -2, 0],
        y: [0, -7, 0, -3, 0],
        opacity: 1,
        transition: {
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 0.7,
            ease: "easeInOut",
            times: [0, 0.22, 0.42, 0.62, 1],
        },
    },
    open: {
        scale: 0.9,
        rotate: 8,
        y: 120,
        opacity: 0,
        transition: {
            duration: SEAL_DURATION,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

export { leftVariants, rightVariants, sealVariants };
