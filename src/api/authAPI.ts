import axios from 'axios';
import { UserType } from '../store/authReducer';

type LoginDataType = {
    email: string
    password: string
    rememberMe?: boolean
}

type RecoveryPassPayloadType = {
    email: string
    html1?: string
    html2?: string
    message: string
    from: string
}

type NewPasswordPayloadType = {
    password: string,
    resetPasswordToken: string | undefined   //?????????????????????????????????????????????????
}

const instance = axios.create({
    // baseURL: "http://localhost:7542/2.0/",
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
})
//  Разобраться с типизацией реквестов
export const authAPI = {
    logIn: (data: LoginDataType) => instance.post<UserType>(`auth/login`, { ...data }),
    logOut: () => instance.delete<UserType>('auth/me'),
    authMe: () => instance.post<UserType>('auth/me'),
    registration: (data: LoginDataType) => instance.post<{ error?: string }>(`auth/register`, { ...data }),
    recoveryPassword: (data: RecoveryPassPayloadType) => instance.post('auth/forgot', { ...data }),
    newPassword: (data: NewPasswordPayloadType) => instance.post('auth/set-new-password', { ...data })
}