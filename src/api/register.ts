import axios from "axios";
import type { InitialValueType } from "../pages/RegistrationPage";

export const registration = async (data:InitialValueType) => {
    try {
        const response = await axios.post("https://todo-redev.herokuapp.com/api/users/register", data)
        return response.data
    }
    
    catch (e) {
        const error = e as { message: string }
        console.log('Ошибка сервера >>>', error.message)
    }
}