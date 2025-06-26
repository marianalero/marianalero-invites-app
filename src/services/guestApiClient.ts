import { AxiosInstance } from "axios";
import { Guest } from "../models/guest";
import { CreateGuestParameters } from "../models/parameters/createGuestParameters";
import { ConfirmGuestParameters } from "../models/parameters/ConfirmGuestParameters";
import { createApiAuthClient } from "./api";
import { GuestsResult } from "../models/guestsResult";
import { UpdateGuestParameters } from "../models/parameters/updateGuestParameters";
const apiClient: AxiosInstance = createApiAuthClient();

async function getGuestById(id: number): Promise<Guest> {
  const { data } = await apiClient.get<Guest>(
    `Guests/${id}`,
  );
  return data;
}
async function getGuests(id: number): Promise<GuestsResult> {
  const { data } = await apiClient.get<GuestsResult>(
    `Guests?invitacionId=${id}`,
  );
  return data;
}
async function CreateAndConfirm(body: CreateGuestParameters): Promise<Guest> {
  const response = await apiClient.post<Guest>("Guests/CreateAndConfirm", body);
  return response.data;
}

async function Confirm(body: ConfirmGuestParameters): Promise<Guest> {
  const response = await apiClient.put<Guest>("Guests/ConfirmGuest", body);
  return response.data;
}

async function getGuestByToken(token: string): Promise<Guest> {
  const { data } = await apiClient.get<Guest>(
    `Guests/token/${token}`,
  );
  return data;
}

async function createGuest(body: CreateGuestParameters): Promise<Guest> {
  const response = await apiClient.post<Guest>("Guests", body);
  return response.data;
}

async function uploadGuestExcel(file: File): Promise<{ message: string; total: number }> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await apiClient.post('/Guests/upload-excel', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}

async function updateGuest(body: UpdateGuestParameters): Promise<Guest> {
  const response = await apiClient.post<Guest>("Guests/UpdateGuest", body);
  return response.data;
}

export {getGuestById,CreateAndConfirm,Confirm,getGuestByToken,getGuests,uploadGuestExcel,createGuest,updateGuest}