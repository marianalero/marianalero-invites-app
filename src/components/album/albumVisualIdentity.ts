export interface AlbumIdentity {
  titleClass: string;
  bodyClass: string;
  background: string;
  text: string;
  accent: string;
}

const fallback: AlbumIdentity = {
  titleClass: "cormorant-garamond-400",
  bodyClass: "manrope-400",
  background: "#F7F4EF",
  text: "#3A332E",
  accent: "#8A7563",
};

const identities: Record<string, AlbumIdentity> = {
  "boda-anna-juan-angel": {
    titleClass: "edwardian",
    bodyClass: "manrope-400",
    background: "#F5F1E8",
    text: "#59635E",
    accent: "#89968E",
  },
  "demo-rose": {
    titleClass: "edwardian",
    bodyClass: "manrope-400",
    background: "#F5F1E8",
    text: "#59635E",
    accent: "#89968E",
  },
  "boda-vianey-y-alberto": {
    titleClass: "alex-brush-regular",
    bodyClass: "pt-serif-caption-regular to-upper",
    background: "#FCFBF8",
    text: "#555555",
    accent: "#A6A998",
  },
  "invitacion-rocio-juan-pedro": {
    titleClass: "great-vibes-regular",
    bodyClass: "montserrat-400",
    background: "#F7F3EB",
    text: "#292A28",
    accent: "#292A28",
  },
  "boda-berenice-y-franco": {
    titleClass: "eyesome",
    bodyClass: "montserrat-400",
    background: "#F8F3EB",
    text: "#514239",
    accent: "#A77C55",
  },
  "invitacion-elizabeth-miguel": {
    titleClass: "pinyon-script-regular",
    bodyClass: "dm-sans-500",
    background: "#F3EEE5",
    text: "#252621",
    accent: "#A8895B",
  },
  "invitacion-diana-veronica-eliel-misael": {
    titleClass: "pinyon-script-regular",
    bodyClass: "lora",
    background: "#FFFFFF",
    text: "#1F2529",
    accent: "#42677B",
  },
  "demo-blanco-y-negro": {
    titleClass: "playfair-display-400 to-upper",
    bodyClass: "lora",
    background: "#F7F7F5",
    text: "#1A1A1A",
    accent: "#1A1A1A",
  },
  "xv-kate": {
    titleClass: "alex-brush-regular",
    bodyClass: "lora",
    background: "#F5F0E8",
    text: "#21191A",
    accent: "#641D2B",
  },
  "invitacion-mitzia-jhovanny": {
    titleClass: "pinyon-script-regular",
    bodyClass: "inter-regular",
    background: "#FCFBF8",
    text: "#1F1F1F",
    accent: "#A7863D",
  },
  "invitacion-xv-isabella-grijalva": {
    titleClass: "pinyon-script-regular",
    bodyClass: "manrope-400 to-upper",
    background: "#FCFAF5",
    text: "#1d1d1d",
    accent: "#1d1d1d",
  },
  "invitacion-xv-ivanna-durazo": {
    titleClass: "pinyon-script-regular",
    bodyClass: "playfair-display-400 italic",
    background: "#FCF8F2",
    text: "#534644",
    accent: "#534644",
  },
  "invitacion-xv-melissa": {
    titleClass: "parisienne-regular",
    bodyClass: "onest-400",
    background: "#F7F2F8",
    text: "#302438",
    accent: "#302438",
  },
  "xv-camila-fernanda": {
    titleClass: "parisienne-regular",
    bodyClass: "montserat-regular to-upper",
    background: "#f8f5ee",
    text: "#4B4945",
    accent: "#4B4945",
  },
  "demo-cenicienta": {
    titleClass: "parisienne-regular",
    bodyClass: "montserat-regular to-upper",
    background: "#FCFBF7",
    text: "#4A4A4A",
    accent: "#4A4A4A",
  },
  "invitacion-maria-lourdes-francisco-michel": {
    titleClass: "alex-brush-regular",
    bodyClass: "montserrat-400",
    background: "#FBF6EE",
    text: "#3E4638",
    accent: "#738b71",
  },
};

export function getAlbumIdentity(slug: string): AlbumIdentity {
  return identities[slug] ?? fallback;
}

export function onAccent(hex: string) {
  const color = hex.replace("#", "");
  if (color.length !== 6) return "#FFFFFF";
  const red = Number.parseInt(color.slice(0, 2), 16);
  const green = Number.parseInt(color.slice(2, 4), 16);
  const blue = Number.parseInt(color.slice(4, 6), 16);
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
  return luminance > 0.72 ? "#2C2825" : "#FFFFFF";
}
