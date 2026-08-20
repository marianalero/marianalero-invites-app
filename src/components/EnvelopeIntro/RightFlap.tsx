import { EnvelopeGeometry } from "./geometry";

const RightFlap = ({ geometry }: { geometry: EnvelopeGeometry }) => {
    const { topX, apexX, apexY, bottomX, overlap } = geometry;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
        >
            <path
                fill="var(--envelope-color)"
                d={`
                    M ${topX - overlap} 0
                    L 100 0
                    L 100 100
                    L ${bottomX - overlap} 100
                    L ${apexX - overlap} ${apexY}
                    Z
                `}
            />
        </svg>
    );
};

export default RightFlap;
