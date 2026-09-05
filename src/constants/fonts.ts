export type FontCategory = "Script" | "Serif" | "Modern" | "Classic";

export interface InvitationFont {
  id: number;
  name: string;
  fontFamily: string;
  category: FontCategory;
}

export const FONT_CATEGORIES: FontCategory[] = [
  "Script",
  "Serif",
  "Modern",
  "Classic",
];

export const fonts: InvitationFont[] = [
  { id: 1, name: "Cinzel", fontFamily: '"Cinzel", serif', category: "Classic" },
  { id: 2, name: "Alex Brush", fontFamily: '"Alex Brush", serif', category: "Script" },
  { id: 3, name: "DM Serif Display", fontFamily: '"DM Serif Display", serif', category: "Serif" },
  { id: 4, name: "Great Vibes", fontFamily: '"Great Vibes", serif', category: "Script" },
  { id: 5, name: "Montserrat", fontFamily: '"Montserrat", sans-serif', category: "Modern" },
  { id: 6, name: "PT Serif Caption", fontFamily: '"PT Serif Caption", serif', category: "Serif" },
  { id: 7, name: "Parisienne", fontFamily: '"Parisienne", serif', category: "Script" },
  { id: 8, name: "Pinyon Script", fontFamily: '"Pinyon Script", serif', category: "Script" },
  { id: 9, name: "Playfair Display", fontFamily: '"Playfair Display", serif', category: "Serif" },
  { id: 10, name: "Tangerine", fontFamily: '"Tangerine", serif', category: "Script" },
  { id: 11, name: "Boheme Floral", fontFamily: '"Boheme-Floral"', category: "Script" },
  { id: 12, name: "Southland", fontFamily: '"Southland"', category: "Script" },
  { id: 13, name: "Gistesy", fontFamily: '"Gistesy"', category: "Script" },
  { id: 14, name: "Eyesome Script", fontFamily: '"EyesomeScript"', category: "Script" },
  { id: 15, name: "The Seasons", fontFamily: '"The Seasons"', category: "Classic" },
  { id: 16, name: "Lora", fontFamily: '"Lora", serif', category: "Serif" },
  { id: 17, name: "Libre Baskerville", fontFamily: '"Libre Baskerville", serif', category: "Serif" },
  { id: 18, name: "Handelson Three", fontFamily: '"Handelson Three"', category: "Script" },
  { id: 19, name: "Noto Serif Display", fontFamily: '"Noto Serif Display", serif', category: "Serif" },
  { id: 20, name: "Roboto", fontFamily: '"Roboto", sans-serif', category: "Modern" },
  { id: 21, name: "Calistoga", fontFamily: '"Calistoga", serif', category: "Classic" },
  { id: 22, name: "Berkshire Swash", fontFamily: '"Berkshire Swash", serif', category: "Script" },
  { id: 23, name: "Genty Sans", fontFamily: '"Genty Sans", serif', category: "Serif" },
  { id: 24, name: "Cormorant Garamond", fontFamily: '"Cormorant Garamond", serif', category: "Serif" },
  { id: 25, name: "Raleway", fontFamily: '"Raleway", sans-serif', category: "Modern" },
  { id: 26, name: "Allura", fontFamily: '"Allura", cursive', category: "Script" },
  { id: 27, name: "Cinzel Decorative", fontFamily: '"Cinzel Decorative", serif', category: "Classic" },
  { id: 28, name: "Manrope", fontFamily: '"Manrope", sans-serif', category: "Modern" },
  { id: 29, name: "Edwardian Script", fontFamily: '"Edwardian Script ITC", cursive', category: "Script" },
  { id: 30, name: "Bodoni Moda", fontFamily: '"Bodoni Moda", serif', category: "Serif" },
  { id: 31, name: "Bodoni Moda Italic", fontFamily: '"Bodoni Moda Italic", serif', category: "Serif" },
  { id: 32, name: "Brittany Signature", fontFamily: '"Brittany Signature", cursive', category: "Script" },
  { id: 33, name: "Inter", fontFamily: '"Inter", sans-serif', category: "Modern" },
  { id: 34, name: "Inter Italic", fontFamily: '"Inter Italic", sans-serif', category: "Modern" },
  { id: 35, name: "Baskervville", fontFamily: '"Baskervville Regular"', category: "Serif" },
  { id: 36, name: "Prata", fontFamily: '"Prata Regular"', category: "Classic" },
  { id: 37, name: "Permian Sans Bold", fontFamily: '"PermianSansTypeface Bold"', category: "Modern" },
  { id: 38, name: "Permian Sans", fontFamily: '"PermianSansTypeface"', category: "Modern" },
  { id: 39, name: "Instrument Sans", fontFamily: '"Instrument Sans", sans-serif', category: "Modern" },
];
