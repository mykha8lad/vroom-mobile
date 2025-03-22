import { api } from "@/shared/api/axiosInstance";
import { IVideo } from "../model/types";

export const getUserById = async(id: string): Promise<IVideo | null> => {
    try {
        const response = await api.get<{data: IVideo}>(`/videos/${id}`);
        return response.data.data;
    } catch (error) {
        console.error("Ошибка при загрузке видео:", error);
        return null;
    }
}