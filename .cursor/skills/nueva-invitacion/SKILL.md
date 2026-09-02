---
name: nueva-invitacion
description: >-
  Crea una invitacion nueva copiando una existente, renombrando el componente,
  registrando la ruta y creando public/invitacion-{nombre}/index.html. Usar
  cuando la usuaria quiera una invitacion nueva, no quiera copiar/pegar a mano,
  o pida agilizar el archivo de una boda, XV, bautizo u otro evento.
---

# Nueva invitacion

Cada invitacion vive en `src/pages/clientInvitations/*.tsx`, se registra en `src/constants/routes.tsx` y tiene una carpeta `public/invitacion-{nombre}/index.html` para la vista previa al compartir el link (Open Graph) y redirigir a la app. No inventar un layout desde cero si ya hay una plantilla visual parecida.

## Flujo preferido

Correr el generador desde la raiz del repo:

```bash
npm run new-invite -- --from WeddingMitzy --file WeddingLuciaPedro --slug prev-lp-1 --id 41 --images boda/boda-lucia-pedro --public lucia-pedro --title "Boda Lucia & Pedro" --section borradores
```

Si faltan datos, pedirlos antes de crear archivos:

- `--from`: plantilla visual mas cercana (archivo sin `.tsx`)
- `--file`: PascalCase del archivo nuevo
- `--slug`: ruta publica sin `/`. Borradores usan `prev-xx-n`
- `--id`: `INVITATION_ID` del panel, si ya existe
- `--images`: carpeta en el repo de imagenes, ej. `boda/boda-lucia-pedro`
- `--public`: nombre que manda la usuaria para la carpeta. Crea `public/invitacion-{nombre}/index.html`. Si pasa `lucia-pedro` o `invitacion-lucia-pedro`, el resultado es `public/invitacion-lucia-pedro`
- `--title`: titulo y `og:title`, ej. `Boda Lucia & Pedro`
- `--section`: `boda` | `xv` | `bautizo` | `otros` | `borradores`

El script copia el TSX, renombra el componente, actualiza `INVITATION_ID` y `URL_IMAGES` si se pasaron, agrega import + ruta, y crea el `index.html` publico copiando el formato de las otras invitaciones (titulo, og:image, og:url y redirect de `id`/`number`).

## Carpeta public

El `index.html` debe quedar como las otras, por ejemplo `public/invitacion-mitzia-jhovanny/index.html`:

- `title` y `og:title` con el nombre del evento
- `og:image` apuntando a `https://marianalero.github.io/invites-images/{carpeta}/og.jpg`
- `og:url` y el redirect a `http://marianalero-invites.com/{slug}`
- conservar query `id` y `number` al redirigir

No usar `invitation-` en ingles; en este repo la carpeta es `invitacion-`.

## Si no se puede correr el script

1. Copiar el archivo plantilla a `src/pages/clientInvitations/{File}.tsx`.
2. Renombrar `const Componente` y `export default Componente`.
3. Actualizar `INVITATION_ID`, `URL_IMAGES` y carpeta de `src/assets/...` si aplica.
4. Agregar el import en `src/constants/routes.tsx`.
5. Agregar la ruta en la seccion correcta (`//Bodas`, `//XV`, `//Bautizo`, `//OTROS`, `//Borradores`).
6. Crear `public/invitacion-{nombre}/index.html` copiando uno existente y cambiando titulo, og:image, og:url y el slug del redirect.

## No hacer

- No duplicar una invitacion ya publicada sobre su mismo archivo.
- No registrar dos rutas con el mismo `slug`.
- No crear `public/invitation-*`; el prefijo correcto es `invitacion-`.
- No reescribir el diseno completo: solo datos del evento (nombres, fechas, lugares, RSVP, regalos, imagenes).
