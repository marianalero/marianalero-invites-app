import { AxiosInstance } from "axios";

import { createApiAuthClient } from "./api";
import { Invitation } from "../models/invitation";
import { CreateInvitationParameters } from "../models/parameters/createInvitationParameters";
import { UpdateInvitationParameters } from "../models/parameters/updateInvitationParameters";
import { Question } from "../models/question";
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

export {getInvitations,getInvitationById,createInvitation,updateInvitation,changeStatus,getQuestionsByInvitationId}