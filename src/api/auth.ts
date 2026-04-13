import axios from "axios"
import type { initialLoginType } from "../pages/LoginPage";

export const loginUser = async(dataLogin:initialLoginType) => {
    const response = await axios.post('https://todo-redev.herokuapp.com/api/auth/login', dataLogin)
    return response.data
}