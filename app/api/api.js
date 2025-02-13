// import axios from "axios";

// const API_URL = "http://vroom.buhprogsoft.com.ua/users";

// const UserService = {
//   getUsers: () => axios.get(API_URL),
//   getUserById: (id) => axios.get(`${API_URL}/${id}`),
//   createUser: (user) => axios.post(API_URL, user),
//   updateUser: (id, user) => axios.put(`${API_URL}/${id}`, user),
//   deleteUser: (id) => axios.delete(`${API_URL}/${id}`)
// };

// export default UserService;

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://vroom.buhprogsoft.com.ua"; // Заменить на реальный сервер

const UserService = {
  // Получить всех пользователей
  getUsers: () => axios.get(`${API_URL}/users`),

  // Получить пользователя по ID
  getUserById: (id) => axios.get(`${API_URL}/users/${id}`),

  // Регистрация (создание пользователя)
  createUser: async (user) => {
    const response = await axios.post(`${API_URL}/users`, user);
    return response.data;
  },

  // Обновление пользователя
  updateUser: (id, user) => axios.put(`${API_URL}/users/${id}`, user),

  // Удаление пользователя
  deleteUser: (id) => axios.delete(`${API_URL}/users/${id}`),

  // Авторизация (получение токена)
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
        
      if (response.data.token) {
        await AsyncStorage.setItem("token", response.data.token);
        return true; // Авторизация успешна
      } else {
        return false; // Нет токена, значит ошибка
      }
    } catch (error) {
      console.error("Ошибка авторизации:", error.response?.data?.message || error.message);
      return false; // Логин не удался
    }
  },

  // Выход (удаление токена)
    logout: async () => {
        await AsyncStorage.removeItem("token");
    },

    getProfile: async () => {
        const token = await AsyncStorage.getItem("token");
        if (!token) throw new Error("Unauthorized");
    
        const response = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
        });
    
        // Если ответ пришел в виде строки, парсим JSON
        return typeof response.data === "string" ? JSON.parse(response.data) : response.data;
    },
};

export default UserService;
