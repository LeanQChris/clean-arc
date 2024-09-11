import httpClient from "@/lib/http/client";
import { ILoginDTO } from "./interface";
import { endPoints } from "@/_common/api/endpoints";

export const apiLogin = async (payload: ILoginDTO) => {
    const response = await httpClient.post(endPoints.auth.signin, payload);
    return response.data;
}