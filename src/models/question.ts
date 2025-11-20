export interface Question {
  id: number;
  invitationId: number;
  text: string;
  type?: 'text' | 'select' | 'boolean'; // Puedes expandir
  options?: string[]; // Para select/radio
  isRequired: boolean;
}

export interface Answer {
  questionId: number;
  response: string;
  question?: Question;
}

export interface GuestAnswer {
  guestId: number;
  questionId: number;
  response: string;
  questionText: string;
}