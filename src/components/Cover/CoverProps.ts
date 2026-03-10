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
    margin?:string;
    ourWeddingStart:boolean;
    overlay:boolean;
    fontSize?:string;
    subtitle?:string;
    dateClass?:string;
    bgPositionY?:string; // Nueva propiedad para la posición vertical del fondo en patantalla completa
    ampersonClassName?:string; // Clase opcional para la tipografía del ampersand
    verticalPosition?: 'top' | 'center' | 'bottom'; // Posición vertical del contenido
}