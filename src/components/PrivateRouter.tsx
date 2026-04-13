import { Navigate, Outlet } from "react-router-dom"


export const PrivateRouter = () => {
    const isAuth = localStorage.getItem('token')
    return isAuth ? <Outlet/> : <Navigate to='login' replace />
}