import { IUser } from "@/entities/user/model/types";

export interface IVideo {
    id: number,
    title: string,
    time: string,
    avatar?: string,
    videoUrl: string,
    author: IUser,
    comments: string[],
    views: number,
    date: string,
}