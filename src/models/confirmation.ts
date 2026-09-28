import { Answer, Question } from "./question";

export const DEFAULT_WHATSAPP_BUTTON = "Confirmar asistencia por WhatsApp";

export const QUESTION_TYPE_OPTIONS = [
  { value: "short_text", label: "Respuesta corta" },
  { value: "long_text", label: "Respuesta larga" },
  { value: "single_choice", label: "Selección única" },
  { value: "multiple_choice", label: "Selección múltiple" },
] as const;

export function confirmationMethodLabel(method?: string | null) {
  switch (method) {
    case "whatsapp":
      return "Confirmación por WhatsApp";
    case "none":
      return "Sin confirmación";
    default:
      return "Formulario en la invitación";
  }
}

export function normalizeQuestionType(type?: string | null) {
  if (type === "long_text" || type === "single_choice" || type === "multiple_choice") {
    return type;
  }
  return "short_text";
}

export function questionTypeLabel(type?: string | null) {
  return QUESTION_TYPE_OPTIONS.find((option) => option.value === normalizeQuestionType(type))?.label ?? "Respuesta corta";
}

export function requiresOptions(type?: string | null) {
  const normalized = normalizeQuestionType(type);
  return normalized === "single_choice" || normalized === "multiple_choice";
}

export function parseOptions(optionsJson?: string | null): string[] {
  if (!optionsJson) return [];
  try {
    const parsed = JSON.parse(optionsJson);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
  } catch {
    return [];
  }
}

export function buildWhatsAppUrl(countryCode?: string | null, phone?: string | null) {
  const digits = `${countryCode ?? ""}${phone ?? ""}`.replace(/\D/g, "");
  if (!digits) return null;
  const text = "Hola, quiero confirmar mi asistencia.";
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

const MULTIPLE_SEPARATOR = " | ";

export function readMultipleAnswer(response?: string | null): string[] {
  if (!response) return [];
  return response.split(MULTIPLE_SEPARATOR).map((item) => item.trim()).filter(Boolean);
}

export function writeMultipleAnswer(values: string[]) {
  return values.filter(Boolean).join(MULTIPLE_SEPARATOR);
}

export function questionIsAnswered(question: Question, answers: Answer[]) {
  const response = answers.find((answer) => answer.questionId === question.id)?.response?.trim() ?? "";
  if (!response) return false;
  if (normalizeQuestionType(question.type) === "multiple_choice") {
    return readMultipleAnswer(response).length > 0;
  }
  return true;
}

export function missingRequiredQuestions(questions: Question[], answers: Answer[]) {
  return questions.filter((question) => question.isRequired && !questionIsAnswered(question, answers));
}
