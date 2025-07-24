import { AxiosInstance } from "axios";
import { Guest } from "../models/guest";
import { CreateGuestParameters } from "../models/parameters/createGuestParameters";
import { ConfirmGuestParameters } from "../models/parameters/ConfirmGuestParameters";
import { createApiAuthClient } from "./api";
import { GuestsResult } from "../models/guestsResult";
import { UpdateGuestParameters } from "../models/parameters/updateGuestParameters";
import { BaseStateResponse } from "../models/BaseStateResponse";
const apiAuthClient: AxiosInstance = createApiAuthClient();
const apiClient: AxiosInstance = createApiAuthClient();
async function getGuestById(id: number,invitacionId:number): Promise<Guest> {
  const { data } = await apiClient.get<Guest>(
    `Guests/${id}?invitationId=${invitacionId}`,
  );
  return data;
}
async function getGuests(id: number): Promise<GuestsResult> {
  const { data } = await apiAuthClient.get<GuestsResult>(
    `Guests?invitacionId=${id}`,
  );
  return data;
}
async function CreateAndConfirm(body: CreateGuestParameters): Promise<Guest> {
  const response = await apiClient.post<Guest>("Guests/CreateAndConfirm", body);
  return response.data;
}

async function Confirm(body: ConfirmGuestParameters): Promise<BaseStateResponse<Guest>> {
  const response = await apiClient.put<BaseStateResponse<Guest>>("Guests/ConfirmGuest", body);
  console.log(response);
  return response.data;
}

async function getGuestByToken(token: string): Promise<Guest> {
  const { data } = await apiClient.get<Guest>(
    `Guests/token/${token}`,
  );
  return data;
}

async function createGuest(body: CreateGuestParameters): Promise<Guest> {
  const response = await apiAuthClient.post<Guest>("Guests", body);
  return response.data;
}

async function uploadGuestExcel(file: File): Promise<{ message: string; total: number }> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await apiAuthClient.post('/Guests/upload-excel', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}

async function updateGuest(body: UpdateGuestParameters): Promise<Guest> {
  const response = await apiAuthClient.post<Guest>("Guests/UpdateGuest", body);
  return response.data;
}


async function exportGuestsToExcel(invitationId: number, rsvpStatus?: number): Promise<void> {
    try {
    const queryParams = new URLSearchParams();
    queryParams.append("invitationId", invitationId.toString());
    if (rsvpStatus !== undefined) {
      queryParams.append("rsvpStatus", rsvpStatus.toString());
    }

    const response = await apiAuthClient.get(`Guests/export?${queryParams.toString()}`, {
      responseType: "blob",
    });

    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;

    const contentDisposition = response.headers["content-disposition"];
    const fileName =
      contentDisposition?.split("filename=")[1]?.replace(/['"]/g, "") ??
      "invitados.xlsx";

    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Error al exportar invitados", error);
  }
}

export {getGuestById,CreateAndConfirm,Confirm,getGuestByToken,getGuests,uploadGuestExcel,createGuest,updateGuest,exportGuestsToExcel}