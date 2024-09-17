import httpClient from "@/lib/http/client";
import { endPoints } from "@/_common/api/endpoints";
import { ICategoryDTO } from "./interface";

export const apiGetCategories = async () => {
    const response = await httpClient.get(endPoints.category.getbusinesscategories);
    return response.data;
};

export const apiGetChildCategoriesByParent = async (parentId: string) => {
    const url = `${endPoints.category.getChildCategoriesByParent}/${parentId}`;
    
    const response = await httpClient.get(url);
    return response.data;
}


export const apiCreate = async (payload: ICategoryDTO) => {
    const response = await httpClient.post(endPoints.category.create, payload);
    return response.data;
}


export const apiUpdate = async (payload: ICategoryDTO) => {
    const response = await httpClient.put(endPoints.category.update, payload);
    return response.data;
}

export const apiDelete = async (payload: ICategoryDTO) => {
    const response = await httpClient.delete(endPoints.category.delete, { data: payload });
    return response.data;
}
