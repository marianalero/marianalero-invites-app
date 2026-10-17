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
    open: {
        scale: 0.9,
        rotate: 8,
        y: 120,
        opacity: 0,
    },
};

export { leftVariants, rightVariants, sealVariants };
