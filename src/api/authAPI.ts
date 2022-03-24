import axios from 'axios';
import { UserType } from '../store/authReducer';

type LoginPayloadType = {
    email: string
    password: string
    rememberMe?: boolean
}

const instance = axios.create({
    // baseURL: "http://localhost:7542/2.0/",
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
})

export const authAPI = {
    logIn: (payload: LoginPayloadType) => instance.post<any>(`auth/login`, { ...payload }),
    logOut: () => instance.delete<any>('auth/me'),
    authMe: () => instance.post<UserType>('auth/me')
}