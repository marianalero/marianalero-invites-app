import { EnvelopeGeometry } from "./geometry";

const LeftFlap = ({ geometry }: { geometry: EnvelopeGeometry }) => {
    const { topX, apexX, apexY, bottomX, overlap } = geometry;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
        >
            <defs>
                <linearGradient id="envelopeSeamStroke" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(210,210,210,0.72)" />
                    <stop offset="35%" stopColor="rgba(165,165,165,0.42)" />
                    <stop offset="100%" stopColor="rgba(165,165,165,0.38)" />
                </linearGradient>
            </defs>

            <path
                fill="var(--envelope-color)"
                d={`
                    M 0 0
                    L ${topX + overlap} 0
                    L ${apexX + overlap} ${apexY}
                    L ${bottomX + overlap} 100
                    L 0 100
                    Z
                `}
            />

            <polyline
                points={`${topX},0 ${apexX},${apexY} ${bottomX},100`}
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="3"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
            />
            <polyline
                points={`${topX},0 ${apexX},${apexY} ${bottomX},100`}
                fill="none"
                stroke="url(#envelopeSeamStroke)"
                strokeWidth="1.15"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
};

export default LeftFlap;
