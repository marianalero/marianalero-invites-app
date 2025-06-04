import { AxiosInstance } from "axios";

import { createApiAuthClient } from "./api";
import { Invitation } from "../models/invitation";
import { CreateInvitationParameters } from "../models/parameters/createInvitationParameters";
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

async function updateInvitation(body: CreateInvitationParameters): Promise<Invitation> {
  const response = await apiClient.put<Invitation>("invitation/", body);
  return response.data; 
}

export {getInvitations,getInvitationById,createInvitation,updateInvitation}