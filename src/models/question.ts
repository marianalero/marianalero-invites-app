export interface Question {
  id: number;
  invitationId: number;
  text: string;
  type?: string;
  optionsJson?: string | null;
  options?: string[];
  isRequired?: boolean;
  sortOrder?: number;
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