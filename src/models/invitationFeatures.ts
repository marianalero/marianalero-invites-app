export type ConfirmationMethod = "form" | "whatsapp" | "none";

export interface InvitationFeatures {
  rsvp: boolean;
  questions: boolean;
  qrPass: boolean;
  album: boolean;
  seating: boolean;
  confirmationMethod?: ConfirmationMethod;
  whatsAppCountryCode?: string | null;
  whatsAppPhone?: string | null;
  whatsAppButtonLabel?: string | null;
  questionsApplicable?: boolean;
}

export const FeatureCode = {
  rsvp: "rsvp",
  questions: "questions",
  qrPass: "qrPass",
  album: "album",
  seating: "seating",
} as const;

export type FeatureCode = (typeof FeatureCode)[keyof typeof FeatureCode];

export function hasFeature(
  features: InvitationFeatures | null | undefined,
  code: FeatureCode,
): boolean {
  return features?.[code] === true;
}
