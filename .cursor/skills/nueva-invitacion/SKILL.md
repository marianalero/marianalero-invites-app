---
name: nueva-invitacion
description: >-
  Crea una invitacion nueva copiando una existente, renombrando el componente y
  registrando la ruta. Usar cuando la usuaria quiera una invitacion nueva, no
  quiera copiar/pegar a mano, o pida agilizar el archivo de una boda, XV,
  bautizo u otro evento.
---

# Nueva invitacion

Cada invitacion vive en `src/pages/clientInvitations/*.tsx` y se registra en `src/constants/routes.tsx`. No inventar un layout desde cero si ya hay una plantilla visual parecida.

## Flujo preferido

Correr el generador desde la raiz del repo:

```bash
npm run new-invite -- --from WeddingMitzy --file WeddingLuciaPedro --slug prev-lp-1 --id 41 --images boda/boda-lucia-pedro --section borradores
```

Si faltan datos, pedirlos antes de crear archivos:

- `--from`: plantilla visual mas cercana (archivo sin `.tsx`)
- `--file`: PascalCase del archivo nuevo
- `--slug`: ruta publica sin `/`. Borradores usan `prev-xx-n`
- `--id`: `INVITATION_ID` del panel, si ya existe
- `--images`: carpeta en el repo de imagenes, ej. `boda/boda-lucia-pedro`
- `--section`: `boda` | `xv` | `bautizo` | `otros` | `borradores`

El script copia el TSX, renombra el componente, actualiza `INVITATION_ID` y `URL_IMAGES` si se pasaron, y agrega import + ruta.

## Si no se puede correr el script

1. Copiar el archivo plantilla a `src/pages/clientInvitations/{File}.tsx`.
2. Renombrar `const Componente` y `export default Componente`.
3. Actualizar `INVITATION_ID`, `URL_IMAGES` y carpeta de `src/assets/...` si aplica.
4. Agregar el import en `src/constants/routes.tsx`.
5. Agregar la ruta en la seccion correcta (`//Bodas`, `//XV`, `//Bautizo`, `//OTROS`, `//Borradores`).

## No hacer

- No duplicar una invitacion ya publicada sobre su mismo archivo.
- No registrar dos rutas con el mismo `slug`.
- No reescribir el diseno completo: solo datos del evento (nombres, fechas, lugares, RSVP, regalos, imagenes).
