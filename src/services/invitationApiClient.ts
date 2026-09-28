import { AxiosInstance } from "axios";
import axios from "axios";

import { createApiAuthClient } from "./api";
import { Invitation } from "../models/invitation";
import { CreateInvitationParameters } from "../models/parameters/createInvitationParameters";
import { UpdateInvitationParameters } from "../models/parameters/updateInvitationParameters";
import { Question } from "../models/question";
import { InvitationFeatures } from "../models/invitationFeatures";
const apiClient: AxiosInstance = createApiAuthClient();

async function getInvitations(): Promise<Invitation[]> {
  const { data } = await apiClient.get<Invitation[]>(
    `invitation/`,
  );
  return data;
}
async function getInvitationById(id: number): Promise<Invitation> {
  const { data } = await apiClient.get<Invitation>(
    `invitation/${id}`,
  );
  return data;
}

async function createInvitation(body: CreateInvitationParameters): Promise<Invitation> {
  const response = await apiClient.post<Invitation>("invitation/", body);
  return response.data;
}

async function updateInvitation(body: UpdateInvitationParameters): Promise<Invitation> {
  const response = await apiClient.put<Invitation>("invitation/", body);
  return response.data; 
}

async function changeStatus(id:number,statusId:number): Promise<Invitation> {
  const response = await apiClient.put<Invitation>(`invitation/invitationId=${id}&statusId=${statusId}`);
  return response.data; 
}

async function getQuestionsByInvitationId  (id: number): Promise<Question[]> {
  const response = await apiClient.get<Question[]>(`questions?invitationId=${id}`);
  return response.data;
}

async function getInvitationFeatures(id: number): Promise<InvitationFeatures> {
  const { data } = await apiClient.get<InvitationFeatures>(`invitation/${id}/features`);
  return data;
}

async function updateConfirmation(id: number, body: {
  method: string;
  whatsAppCountryCode?: string;
  whatsAppPhone?: string;
  whatsAppButtonLabel?: string;
}): Promise<InvitationFeatures> {
  const { data } = await apiClient.put<InvitationFeatures>(`invitation/${id}/confirmation`, body);
  return data;
}

async function setQuestionsEnabled(id: number, enabled: boolean): Promise<InvitationFeatures> {
  const { data } = await apiClient.put<InvitationFeatures>(`invitation/${id}/features/questions`, { enabled });
  return data;
}

async function getManagedQuestions(id: number): Promise<Question[]> {
  const { data } = await apiClient.get<Question[]>(`invitation/${id}/questions`);
  return data;
}

export interface SaveQuestionBody {
  text: string;
  type: string;
  isRequired: boolean;
  options?: string[];
}

async function createQuestion(id: number, body: SaveQuestionBody): Promise<Question> {
  const { data } = await apiClient.post<Question>(`invitation/${id}/questions`, body);
  return data;
}

async function updateQuestion(id: number, questionId: number, body: SaveQuestionBody): Promise<Question> {
  const { data } = await apiClient.put<Question>(`invitation/${id}/questions/${questionId}`, body);
  return data;
}

async function deleteQuestion(id: number, questionId: number): Promise<void> {
  await apiClient.delete(`invitation/${id}/questions/${questionId}`);
}

async function reorderQuestions(id: number, questionIds: number[]): Promise<Question[]> {
  const { data } = await apiClient.put<Question[]>(`invitation/${id}/questions/order`, { questionIds });
  return data;
}

export function readApiError(error: unknown, fallback: string) {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data;
    if (typeof data === "string" && data.trim()) return data;
    if (data && typeof data === "object" && "title" in data && typeof data.title === "string") {
      return data.title;
    }
  }
  return fallback;
}

export {
  getInvitations,
  getInvitationById,
  createInvitation,
  updateInvitation,
  changeStatus,
  getQuestionsByInvitationId,
  getInvitationFeatures,
  updateConfirmation,
  setQuestionsEnabled,
  getManagedQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  reorderQuestions,
};