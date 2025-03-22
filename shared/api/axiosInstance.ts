import axios from "axios";

export const api = axios.create({
    baseURL: "https://67d5744ad2c7857431f0730c.mockapi.io/api/v1",
    headers: { "Content-Type": "application/json" },
});
