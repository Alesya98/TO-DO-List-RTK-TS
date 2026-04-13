import { useState } from "react"
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

export type initialLoginType = {
    email: string;
    password: string;
}

const initialLogin = {
    email: '',
    password: ''
}

export const LoginPage:React.FC = () => {
    const [dataLogin, setDataLogin] = useState<initialLoginType>(initialLogin)
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name , value} = e.target
        setDataLogin({
            ...dataLogin,
            [name] : value
        })
    }

    const handleAutorizete = async(e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const data = await loginUser(dataLogin)
             localStorage.setItem('token', data.token)
            navigate('/home')
        } catch (error) {
            console.log('Ошибка, такого пользователя нету >>>', error.response)
            navigate('/registration')
        }
        
    }

    return (
        <>
            <h1>Вход</h1>
            <form className="form-login" style={{ gap: "20px" }}
            onSubmit={handleAutorizete}> 
                <div>
                    <label style={{ marginRight: "10px"}} htmlFor="email">E-mail</label>
                <input className="form-input"
                    type="text" id="email" name="email" placeholder="Введите Email" value={dataLogin.email}
                onChange={handleChange} /> 
                </div>

                <div>
                    <label style={{ marginRight: "10px" }} htmlFor="password">Пароль</label>
                    <input className="form-input" type="text" placeholder="Введите пароль" id="password" name="password" value={dataLogin.password}
                        onChange={handleChange} />
                </div>
        <button className="search-btn" type="submit">Войти</button>
        </form>
        </>
     )
 }