export interface CoverProps{
    brideName:string;
    symbolr:string;
    groomName:string;
    className?:string;
    bgImage?:string;
    bgImage2?:string;
    weddingDate?:string;
    bgSize?:string
    textColor?:string;
    hideText?:boolean;
    bgPosition?:string;
    mobileBgPosition?:string;
    margin?:string;
    ourWeddingStart:boolean;
    overlay:boolean;
    fontSize?:string;
    subtitle?:string;
    dateClass?:string;
    bgPositionY?:string; // Nueva propiedad para la posición vertical del fondo en patantalla completa
    mobileBgPositionY?:string;
    mobileHeight?:string;
    ampersonClassName?:string; // Clase opcional para la tipografía del ampersand
    verticalPosition?: 'top' | 'center' | 'bottom'; // Posición vertical del contenido
    bodyTypoClassName?: string; // Clase opcional para la tipografía del texto adicional
}