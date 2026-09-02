import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const INVITES_DIR = path.join(ROOT, "src", "pages", "clientInvitations");
const ROUTES_FILE = path.join(ROOT, "src", "constants", "routes.tsx");
const PUBLIC_DIR = path.join(ROOT, "public");
const APP_HOST = "http://marianalero-invites.com";
const OG_IMAGE_BASE = "https://marianalero.github.io/invites-images";

const SECTIONS = {
  boda: "  //Bodas",
  xv: "  //XV",
  bautizo: "  //Bautizo",
  otros: "  //OTROS",
  borradores: "  //Borradores",
};

function parseArgs(argv) {
  const args = {
    from: "",
    file: "",
    component: "",
    slug: "",
    id: "",
    images: "",
    assets: "",
    section: "",
    publicName: "",
    title: "",
    dryRun: false,
    help: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const current = argv[i];
    const next = argv[i + 1];
    if (current === "--help" || current === "-h") args.help = true;
    else if (current === "--dry-run") args.dryRun = true;
    else if (current === "--from") args.from = next, i += 1;
    else if (current === "--file") args.file = next, i += 1;
    else if (current === "--component") args.component = next, i += 1;
    else if (current === "--slug") args.slug = next, i += 1;
    else if (current === "--id") args.id = next, i += 1;
    else if (current === "--images") args.images = next, i += 1;
    else if (current === "--assets") args.assets = next, i += 1;
    else if (current === "--section") args.section = next, i += 1;
    else if (current === "--public") args.publicName = next, i += 1;
    else if (current === "--title") args.title = next, i += 1;
  }

  return args;
}

function printHelp() {
  console.log(`
Crea una invitacion nueva copiando una existente y registrandola en las rutas.

Uso:
  npm run new-invite -- --from WeddingMitzy --file WeddingLuciaPedro --slug prev-lp-1

Opciones:
  --from         Archivo plantilla (sin .tsx). Obligatorio.
  --file         Nombre del archivo nuevo, sin .tsx. Obligatorio.
  --component    Nombre del componente. Por defecto usa --file.
  --slug         Ruta publica, sin /. Ej: prev-lp-1 o boda-lucia-pedro
  --id           INVITATION_ID (numero del panel). Opcional.
  --images       Carpeta de URL_IMAGES, relativa al repo de imagenes.
                 Ej: boda/boda-lucia-pedro
  --assets       Carpeta en src/assets si la plantilla importa imagenes locales.
                 Ej: boda-lucia-pedro
  --section      boda | xv | bautizo | otros | borradores
                 Si el slug empieza con prev-, usa borradores.
  --public       Nombre de la carpeta en public/. Crea
                 public/invitacion-{nombre}/index.html
                 Ej: lucia-pedro  ->  public/invitacion-lucia-pedro
  --title        Titulo y og:title. Ej: "Boda Lucia & Pedro"
  --dry-run      Muestra los cambios sin escribir archivos.
  --help         Muestra esta ayuda.

Ejemplos:
  npm run new-invite -- --from WeddingVianneyAlberto --file WeddingAnaLuis --slug prev-al-1 --id 41 --images boda/boda-ana-luis --public ana-luis --title "Boda Ana & Luis" --section borradores
  npm run new-invite -- --from XVMichelle --file XVCamilaSofia --slug xv-camila-sofia --public xv-camila-sofia --section xv
`);
}

function listTemplates() {
  return fs
    .readdirSync(INVITES_DIR)
    .filter((name) => name.endsWith(".tsx"))
    .map((name) => name.replace(/\.tsx$/, ""))
    .sort((a, b) => a.localeCompare(b));
}

function detectComponentName(source) {
  const exportMatch = source.match(/export default ([A-Za-z0-9_]+)/);
  if (exportMatch) return exportMatch[1];
  const constMatch = source.match(/const ([A-Za-z0-9_]+)\s*=\s*\(\)\s*=>/);
  if (constMatch) return constMatch[1];
  throw new Error("No pude detectar el nombre del componente en la plantilla.");
}

function detectAssetsFolder(source) {
  const match = source.match(/from ["']\.\.\/\.\.\/assets\/([^"']+)\//);
  return match ? match[1] : "";
}

function detectImagesFolder(source) {
  const match = source.match(/URL_IMAGES = `\$\{URL_REPO\}([^`]+)`/);
  return match ? match[1].replace(/\/$/, "") : "";
}

function replaceIdentifier(source, oldName, newName) {
  return source.replace(new RegExp(`\\b${oldName}\\b`, "g"), newName);
}

function applyReplacements(source, { oldComponent, newComponent, id, images, assets, oldAssets, oldImages }) {
  let next = replaceIdentifier(source, oldComponent, newComponent);

  if (id) {
    if (/const INVITATION_ID = \d+;/.test(next)) {
      next = next.replace(/const INVITATION_ID = \d+;/, `const INVITATION_ID = ${id};`);
    } else {
      next = next.replace(
        /(const [A-Za-z0-9_]+ {0,2}= \(\) => \{)/,
        `const INVITATION_ID = ${id};\n\n$1`
      );
    }
  }

  if (images) {
    const clean = images.replace(/^\/+|\/+$/g, "");
    if (/URL_IMAGES = `\$\{URL_REPO\}[^`]+`/.test(next)) {
      next = next.replace(
        /URL_IMAGES = `\$\{URL_REPO\}[^`]+`/,
        `URL_IMAGES = \`\${URL_REPO}${clean}/\``
      );
    }
  } else if (oldImages && images === "") {
    // keep original
  }

  if (assets && oldAssets) {
    next = next.replaceAll(`../../assets/${oldAssets}/`, `../../assets/${assets}/`);
  }

  return next;
}

function insertImport(routesSource, component, fileName) {
  const importLine = `import ${component} from "../pages/clientInvitations/${fileName}";\n`;
  if (routesSource.includes(importLine.trim())) {
    return routesSource;
  }

  const marker = "interface RouteConfig";
  const index = routesSource.indexOf(marker);
  if (index === -1) {
    throw new Error("No encontre interface RouteConfig en routes.tsx");
  }

  return `${routesSource.slice(0, index).replace(/\s+$/, "\n\n")}${importLine}\n${routesSource.slice(index)}`;
}

function splitPascalCase(value) {
  return value.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/(\d+)$/, " $1").trim();
}

function titleFromFile(fileName, section) {
  const prefixes = [
    ["CivilWedding", "Boda civil"],
    ["BabyShower", "Baby Shower"],
    ["Wedding", "Boda"],
    ["XV", "XV"],
    ["Bau", "Bautizo"],
  ];

  for (const [prefix, label] of prefixes) {
    if (fileName.startsWith(prefix) && fileName.length > prefix.length) {
      const names = splitPascalCase(fileName.slice(prefix.length)).split(" ").filter(Boolean);
      if (names.length >= 2) {
        const last = names.pop();
        return `${label} ${names.join(" ")} & ${last}`;
      }
      if (names.length === 1) return `${label} ${names[0]}`;
      return label;
    }
  }

  if (section === "boda") return `Boda ${splitPascalCase(fileName)}`;
  if (section === "xv") return `XV ${splitPascalCase(fileName)}`;
  if (section === "bautizo") return `Bautizo ${splitPascalCase(fileName)}`;
  return splitPascalCase(fileName);
}

function defaultPublicName(slug) {
  return slug.replace(/^(prev-|demo-|boda-)/, "");
}

function publicFolderName(name) {
  const clean = name.trim().replace(/^\/+|\/+$/g, "").replace(/^(invitation-|invitacion-)/i, "");
  if (!clean) throw new Error("El nombre de la carpeta public no puede estar vacio.");
  return `invitacion-${clean}`;
}

function ogImageUrl(images, slug) {
  const folder = (images || `boda/${slug.replace(/^(prev-|demo-)/, "")}`).replace(/^\/+|\/+$/g, "");
  return `${OG_IMAGE_BASE}/${folder}/og.jpg`;
}

function buildPublicIndex({ title, slug, ogImage }) {
  const appUrl = `${APP_HOST}/${slug}`;
  return `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>${title}</title>
    <meta name="description" content="Invitación" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="Invitación" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:url" content="${appUrl}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <script>
      var params = {};
	    location.search.slice(1).split("&").forEach(function(pair) {
		pair = pair.split("=");
		params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);});
    if(params.number){
      window.location.href = "${appUrl}?number="+params.number;
    }
    if(params.id){
      window.location.href = "${appUrl}?id="+params.id;
    }
    </script>
  </body>
</html>
`;
}

function inferSection(slug, explicit) {
  if (explicit && SECTIONS[explicit]) return explicit;
  if (slug.startsWith("prev-") || slug.startsWith("demo-")) return "borradores";
  if (slug.startsWith("xv-")) return "xv";
  if (slug.startsWith("bau-") || slug.startsWith("bautizo-")) return "bautizo";
  if (slug.startsWith("boda-")) return "boda";
  return "borradores";
}

function insertRoute(routesSource, { slug, component, section }) {
  const routeLine = `  {path:'/${slug}', element:<${component}></${component}>},`;
  if (routesSource.includes(`path:'/${slug}'`) || routesSource.includes(`path: '/${slug}'`)) {
    throw new Error(`Ya existe una ruta para /${slug}`);
  }

  const sectionComment = SECTIONS[section];
  const allComments = Object.values(SECTIONS);
  const start = routesSource.indexOf(sectionComment);

  if (start === -1) {
    return routesSource.replace(/\n];\s*$/, `\n${routeLine}\n];\n`);
  }

  let end = routesSource.length;
  for (const comment of allComments) {
    if (comment === sectionComment) continue;
    const other = routesSource.indexOf(comment, start + sectionComment.length);
    if (other !== -1 && other < end) end = other;
  }

  const closing = routesSource.lastIndexOf("];");
  if (end > closing) end = closing;

  const block = routesSource.slice(start, end).replace(/\s+$/, "");
  const updatedBlock = `${block}\n${routeLine}\n`;
  return `${routesSource.slice(0, start)}${updatedBlock}${routesSource.slice(end)}`;
}

async function promptMissing(args) {
  const templates = listTemplates();
  const needsPrompt = !args.from || !args.file;
  if (!needsPrompt) return args;

  const rl = readline.createInterface({ input, output });
  try {
    if (!args.from) {
      console.log("Plantillas disponibles:\n");
      templates.forEach((name) => console.log(`  ${name}`));
      args.from = (await rl.question("\n--from (plantilla): ")).trim();
    }
    if (!args.file) {
      args.file = (await rl.question("--file (nombre del archivo nuevo): ")).trim();
    }
    if (!args.slug) {
      args.slug = (await rl.question("--slug (ej. prev-al-1): ")).trim();
    }
    if (!args.id) {
      args.id = (await rl.question("--id (INVITATION_ID, Enter para omitir): ")).trim();
    }
    if (!args.images) {
      args.images = (await rl.question("--images (ej. boda/boda-ana-luis, Enter para omitir): ")).trim();
    }
    if (!args.section) {
      args.section = (await rl.question("--section (boda|xv|bautizo|otros|borradores, Enter para inferir): ")).trim();
    }
    if (!args.publicName) {
      args.publicName = (await rl.question("--public (carpeta, ej. lucia-pedro): ")).trim();
    }
    if (!args.title) {
      args.title = (await rl.question('--title (ej. "Boda Lucia & Pedro", Enter para inferir): ')).trim();
    }
  } finally {
    rl.close();
  }

  return args;
}

async function main() {
  let args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  args = await promptMissing(args);

  if (!args.from || !args.file) {
    printHelp();
    process.exit(1);
  }

  const fromFile = args.from.replace(/\.tsx$/, "");
  const newFile = args.file.replace(/\.tsx$/, "");
  const sourcePath = path.join(INVITES_DIR, `${fromFile}.tsx`);
  const destPath = path.join(INVITES_DIR, `${newFile}.tsx`);

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`No existe la plantilla: ${fromFile}.tsx`);
  }
  if (fs.existsSync(destPath)) {
    throw new Error(`Ya existe ${newFile}.tsx`);
  }

  const source = fs.readFileSync(sourcePath, "utf8");
  const oldComponent = detectComponentName(source);
  const newComponent = args.component || newFile;
  const oldAssets = detectAssetsFolder(source);
  const oldImages = detectImagesFolder(source);
  const slug = (args.slug || newFile.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()).replace(/^\/+/, "");
  const section = inferSection(slug, args.section);
  const assets = args.assets || (oldAssets ? slug : "");
  const publicFolder = publicFolderName(args.publicName || defaultPublicName(slug));
  const publicDir = path.join(PUBLIC_DIR, publicFolder);
  const publicIndexPath = path.join(publicDir, "index.html");
  const title = args.title || titleFromFile(newFile, section);
  const ogImage = ogImageUrl(args.images, slug);
  const publicIndex = buildPublicIndex({ title, slug, ogImage });

  if (fs.existsSync(publicIndexPath)) {
    throw new Error(`Ya existe ${path.join("public", publicFolder, "index.html")}`);
  }

  const nextSource = applyReplacements(source, {
    oldComponent,
    newComponent,
    id: args.id,
    images: args.images,
    assets,
    oldAssets,
    oldImages,
  });

  let routesSource = fs.readFileSync(ROUTES_FILE, "utf8");
  routesSource = insertImport(routesSource, newComponent, newFile);
  routesSource = insertRoute(routesSource, { slug, component: newComponent, section });

  console.log(`Plantilla:   ${fromFile}.tsx (${oldComponent})`);
  console.log(`Nuevo:       ${newFile}.tsx (${newComponent})`);
  console.log(`Ruta:        /${slug}`);
  console.log(`Seccion:     ${section}`);
  if (args.id) console.log(`ID:          ${args.id}`);
  if (args.images) console.log(`Imagenes:    ${args.images}`);
  if (oldAssets && assets) console.log(`Assets:      ${oldAssets} -> ${assets}`);
  console.log(`Public:      public/${publicFolder}/index.html`);
  console.log(`Titulo OG:   ${title}`);

  if (args.dryRun) {
    console.log("\nDry-run: no se escribieron archivos.");
    return;
  }

  fs.writeFileSync(destPath, nextSource, "utf8");
  fs.writeFileSync(ROUTES_FILE, routesSource, "utf8");
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(publicIndexPath, publicIndex, "utf8");

  console.log("\nListo. Siguiente:");
  console.log("  1. Reemplaza nombres, fechas, lugares y textos.");
  console.log("  2. Actualiza RSVP, mesa de regalos y padrinos.");
  if (oldAssets) {
    console.log(`  3. Crea src/assets/${assets}/ y copia las imagenes nuevas.`);
  }
  console.log("  4. Sube og.jpg (o cambia la extension en el index.html) para la vista previa.");
  console.log(`  5. Abre http://localhost:5173/${slug}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
