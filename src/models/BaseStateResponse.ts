export interface BaseStateResponse<T> {

    result: T;
    state: {
      hasError: boolean;
      codigoError?: number;
      tipoError?: string;
      mensajeError?: string;
      mensajeDetalle?: string;
    };

}