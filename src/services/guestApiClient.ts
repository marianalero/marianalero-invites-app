import { AxiosInstance } from "axios";

import { Guest } from "../models/guest";
import { CreateGuestParameters } from "../models/parameters/createGuestParameters";
import { ConfirmGuestParameters } from "../models/parameters/ConfirmGuestParameters";
import { createApiClient } from "./api";
const apiClient: AxiosInstance = createApiClient();

async function getGuestById(id: number): Promise<Guest> {
  const { data } = await apiClient.get<Guest>(
    `Guests/${id}`,
  );
  return data;
}

async function CreateAndConfirm(body: CreateGuestParameters): Promise<Guest> {
  const response = await apiClient.post<Guest>("Guests/CreateAndConfirm", body);
  return response.data;
}

async function Confirm(body: ConfirmGuestParameters): Promise<Guest> {
  const response = await apiClient.put<Guest>("Guests/ConfirmGuest", body);
  return response.data; // ✅ aquí se extrae el objeto Guest del AxiosResponse
}

async function getGuestByToken(token: string): Promise<Guest> {
  const { data } = await apiClient.get<Guest>(
    `Guests/token/${token}`,
  );
  return data;
}

export {getGuestById,CreateAndConfirm,Confirm,getGuestByToken}