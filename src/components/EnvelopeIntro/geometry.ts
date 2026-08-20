import { useEffect, useState } from "react";

/** Angle of each chevron arm, measured from vertical — matches the mobile reference. */
const SEAM_ANGLE_DEG = 17;

export type EnvelopeGeometry = {
    topX: number;
    apexX: number;
    apexY: number;
    bottomX: number;
    overlap: number;
    sealX: number;
    sealY: number;
};

export function getEnvelopeGeometry(width: number, height: number): EnvelopeGeometry {
    const ratio = height / Math.max(width, 1);
    const isPortrait = ratio >= 1.15;
    const tanA = Math.tan((SEAM_ANGLE_DEG * Math.PI) / 180);

    const apexX = isPortrait ? 38 : 47;
    const apexY = isPortrait ? 54 : 50;

    const topX = clamp(apexX + tanA * apexY * ratio, apexX + 4, 96);
    const bottomX = clamp(apexX + tanA * (100 - apexY) * ratio, apexX + 4, 96);

    return {
        topX,
        apexX,
        apexY,
        bottomX,
        overlap: Math.min(0.7, (2.5 / Math.max(width, 1)) * 100),
        sealX: apexX + (isPortrait ? 2.5 : 1.1),
        sealY: apexY - (isPortrait ? 2 : 0.4),
    };
}

export function useEnvelopeGeometry() {
    const [size, setSize] = useState(readViewport);

    useEffect(() => {
        const onResize = () => setSize(readViewport());
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return getEnvelopeGeometry(size.width, size.height);
}

function readViewport() {
    if (typeof window === "undefined") {
        return { width: 390, height: 844 };
    }
    return { width: window.innerWidth, height: window.innerHeight };
}

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
}
