import { Typography, useMediaQuery } from '@mui/material';
import './Cover.css';
import { Fade } from 'react-awesome-reveal';
import { CoverProps } from '../CoverProps';
import { t } from 'i18next';
import { memo, useEffect, useState } from 'react';

const CoverInline = (props: CoverProps) => {
   
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isSmallerScreen = useMediaQuery('(max-width:400px)');
    const [loaded, setLoaded] = useState(false);
    const GENERIC_BLUR =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQEA8PEA8PDw8PDw8PDw8PDw8PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAAEAAQMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAgAD/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIQAxAAAAH6A//EABgQAQEBAQEAAAAAAAAAAAAAAAERAhIh/9oACAEBAAEFAk8d4o//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8BSP/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/ASf/xAAbEAADAQEBAQEAAAAAAAAAAAABERAhMUFRcf/aAAgBAQAGPwKzK0kAq0p1k//EABsQAQEAAwEBAQAAAAAAAAAAAAERACExQVFh/9oACAEBAAE/IVFZfE2PqC5nSlQ2RZ5WqX//2gAMAwEAAgADAAAAEB//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QEf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/ECL/xAAbEAEBAQEAAwEAAAAAAAAAAAABEQAhMVFhcf/aAAgBAQABPxDkXIpT+R9xKk4a5QZ2h+V5J7VZ//Z";

    const objectPositionY = isSmallScreen
        ? props.mobileBgPositionY ?? props.bgPositionY ?? "50%"
        : props.bgPositionY ?? "50%";
    const objectPositionX = isSmallScreen
        ? props.mobileBgPosition ?? props.bgPosition ?? "50%"
        : props.bgPosition ?? "50%";
    const namesFontSize = isSmallerScreen
        ? `min(${props.fontSize ?? "60px"}, 7vw)`
        : props.fontSize ?? "60px";
    const oneLineTypographySx = {
        lineHeight: 1.1,
        maxWidth: "100vw",
        whiteSpace: "nowrap",
    };

    useEffect(() => {
        if (!props.bgImage) return;

        const img = new Image();
        img.src = props.bgImage;

        img.onload = () => setLoaded(true);
    }, [props.bgImage]);

    const getJustifyContent = () => {
        switch (props.verticalPosition) {
            case 'top':
                return 'flex-start';
            case 'bottom':
                return 'flex-end';
            case 'center':
            default:
                return 'center';
        }
    };

    const getPadding = () => {
        if (props.verticalPosition === 'top') {
            return '80px 0 0 0';
        } else if (props.verticalPosition === 'bottom') {
            return '0 0 80px 0';
        }
        return '0';
    };

    return (
        <div className="cover-container" style={{ justifyContent: getJustifyContent(), padding: getPadding(), height: isSmallScreen ? props.mobileHeight : undefined }}>
            <img
                src={loaded ? props.bgImage : GENERIC_BLUR}
                alt="Cover"
                loading="eager"
                decoding="async"
                className={`cover-bg ${loaded ? "loaded" : ""}`}
                style={{
                    objectFit: props.bgSize ?? "cover",
                    objectPosition: `${objectPositionX} ${objectPositionY}`,
                    filter: loaded ? "blur(0)" : "blur(24px)",
                    opacity: loaded ? 1 : 0.85,
                }}
                {...({ fetchpriority: "high" } as any)}
            />

            {props.overlay && <div className="cover-overlay" />}
            <Fade direction="up" triggerOnce={true}>
                {props.ourWeddingStart && (
                    <h1 className={props.bodyTypoClassName ? `${props.bodyTypoClassName} holder` : "holder"} style={{ marginTop: props.margin ? props.margin : "16px", }}>
                        <span style={{fontSize:"1rem"}} >{props.subtitle ? props.subtitle : t("ourWedding")}</span>
                    </h1>
                )}

                <Typography
                    sx={{
                        ...oneLineTypographySx,
                        fontSize: namesFontSize,
                    }}
                    paddingX={1}
                    textAlign="center"
                    color='white'
                    typography="h2"
                    className={`${props.className}`}
                >
                    {props.brideName}
                    <span className={props.ampersonClassName ? props.ampersonClassName : props.className} style={{ margin: '0 0.3em' }}>
                        {props.symbolr}
                    </span>
                    {props.groomName}
                </Typography>

                {!props.ourWeddingStart && (
                    <h1 className={props.bodyTypoClassName ? `${props.bodyTypoClassName} holder` : "holder"}>
                        <span style={{fontSize:"1rem"}}>{props.subtitle ? props.subtitle : "Nuestra Boda"}</span>
                    </h1>
                )}

                <Typography
                    textTransform="uppercase"
                    marginTop={2}
                    textAlign="center"
                    color='white'
                    typography="h6"
                    className={props.bodyTypoClassName ? props.bodyTypoClassName : "pt-serif-caption-regular cover-date"}
                    sx={{
                        ...oneLineTypographySx,
                        fontWeight: 400,
                        fontSize: isSmallScreen ? "min(1.25rem, 4vw)" : undefined,
                    }}
                >
                    {props.weddingDate}
                </Typography>
            </Fade>
        </div>
    );
}

export default memo(CoverInline);
