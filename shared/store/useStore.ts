import { create } from 'zustand';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
    id: string;
    userName: string;
    displayName?: string;
    subscriptions?: string[];
    followersCount?: number;
    email: string;
    avatar?: string;
    videos: Video[];
}

export interface Video {
    id: string;                   
    userId: string;               
    title?: string;               
    description?: string;         
    videoUrl: string;             
    thumbnailUrl?: string;        
    createdAt: string;            
    likesCount?: number;          
    dislikesCount?: number;
    viewsCount? : number;
    commentsCount?: number;       
    isPrivate?: boolean;          
    duration?: number;  
    comments: Comment[];          
}
  
export interface Comment {
    id: string;
    userId: string;
    userName: string;
    text: string;
    createdAt: string;
}
  
interface VideoState {    
    video: Video | null;
    videos: Video[];
    fetchVideos: () => Promise<void>;
    fetchVideoById: (videoId: string) => Promise<void>;
    uploadVideo: (formData: FormData) => Promise<void>;
    likeVideo: (videoId: string) => Promise<void>;
    addComment: (videoId: string, commentText: string) => Promise<void>;
}
  
export const useVideoStore = create<VideoState>((set, get) => ({
    video: null,
    videos: [],
    fetchVideos: async () => {
      const { data } = await axios.get<Video[]>('https://back.buhprogsoft.com.ua/api/Videos');
      
      set({ videos: data });
    },
    fetchVideoById: async (videoId: string) => {
        try {
            const { data } = await axios.get<Video>(`https://back.buhprogsoft.com.ua/api/Videos/${videoId}`);
            set({ video: data });
        } catch (error) {
            console.error('Ошибка при получении видео:', error);
        }
    },
    uploadVideo: async (formData) => {
        const token = await AsyncStorage.getItem('token');

        await axios.post('https://back.buhprogsoft.com.ua/api/Videos/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${token}`, },
        });
      await get().fetchVideos();
    },
    likeVideo: async (videoId) => {
      await axios.post(`http://your-api.com/api/videos/${videoId}/like`);
      await get().fetchVideos();
    },
    addComment: async (videoId, commentText) => {
      await axios.post(`http://your-api.com/api/videos/${videoId}/comments`, {
        text: commentText,
      });
      await get().fetchVideos();
    },
}));

interface UserState {
    user: User | null;
    token: string | null;
    setUser: (user: any) => void;
    setToken: (token: string) => void;
    updateUser: (user: any) => void;
    clearUser: () => void;
    subscribeToUser: (targetUserId: string) => Promise<void>;
    unsubscribeFromUser: (targetUserId: string) => Promise<void>;
}

export const useUserStore = create<UserState>((set, get) => ({
    user: null,
    token: null,
    setUser: (user) => set({ user }),
    setToken: (token) => set({ token }),
    updateUser: (updatedUser) =>
        set((state) => ({
            user: { ...state.user, ...updatedUser },
        })),
    clearUser: () => set({ user: null, token: null }),

    subscribeToUser: async (targetUserId) => {
        const token = get().token;
        await axios.post(`https://back.buhprogsoft.com.ua/api/Users/${targetUserId}/subscribe`, null, {
            headers: { Authorization: `Bearer ${token}` },
        });

        // Обновим пользователя
        const updated = await axios.get(`https://back.buhprogsoft.com.ua/api/Users/me`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        set({ user: updated.data });
    },

    unsubscribeFromUser: async (targetUserId) => {
        const token = get().token;
        await axios.post(`https://back.buhprogsoft.com.ua/api/Users/${targetUserId}/unsubscribe`, null, {
            headers: { Authorization: `Bearer ${token}` },
        });

        const updated = await axios.get(`https://back.buhprogsoft.com.ua/api/Users/me`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        set({ user: updated.data });
    },
}));
