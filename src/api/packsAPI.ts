import axios from 'axios';
import { PacksInitialStateType } from '../store/packsReducer';

type RequestPacksType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: "0updated" | "1updated"
    page?: number
    pageCount?: number
    user_id?: string
}

const instance = axios.create({
    // baseURL: "http://localhost:7542/2.0/",
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
})
//  Разобраться с типизацией реквестов
export const packsAPI = {
   
    // getPacks: (data: RequestPacksType) => instance.get<PacksInitialStateType>(`cards/pack`, { ...data }),
    getPacks: (data: RequestPacksType) => instance.get<PacksInitialStateType>(`cards/pack`, { params:data }), //??????????????????
}                                                                          ///??????????????????????????????????