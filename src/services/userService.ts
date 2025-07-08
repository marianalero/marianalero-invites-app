import { AxiosInstance } from "axios";
import { createApiAuthClient } from "./api";
import { User } from "../models/user";
import { CreateUserParameters } from "../models/parameters/createUserParameters";

const apiClient: AxiosInstance = createApiAuthClient();

async function getUsers(): Promise<User[]> {
  const response = await apiClient.get<User[]>(
    `User/users`,
  );
  return response.data;
}

async function getUserById(id:number): Promise<User> {
  const response = await apiClient.get<User>(
    `User/users/${id}`,
  );
  return response.data;
}
async function CreateUser(body: CreateUserParameters): Promise<User> {
  const response = await apiClient.post<User>("User/", body);
  return response.data;
}

async function UpdateUser(body: CreateUserParameters): Promise<User> {
  const response = await apiClient.put<User>("User/", body);
  return response.data;
}

async function deleteUser(id:number): Promise<any> {
  const response = await apiClient.delete(
    `User/${id}`,
  );
  return response.data;
}

async function changePassword( currentPassword: string, newPassword: string ): Promise<any> {
  const response = await apiClient.post(
    `User/change-password`,{
      currentPassword,
      newPassword
    }
  );
  return response.data;
}
export { getUsers , CreateUser,getUserById,UpdateUser,deleteUser,changePassword}

