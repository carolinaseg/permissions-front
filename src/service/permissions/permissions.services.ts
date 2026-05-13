import { api } from "../../api/client";

export const getPermissions = async () => {
  const response = await api.get("/permissions");

  return response.data;
};