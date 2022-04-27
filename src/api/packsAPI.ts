import { InsertEmoticonOutlined } from '@mui/icons-material';
import axios, { AxiosResponse } from 'axios';
import { PacksInitialStateType, PackType } from '../store/packsReducer';

type RequestPacksType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: "0updated" | "1updated"
    page?: number
    pageCount?: number
    user_id?: string
}

type RequestNewPackType = {
    cardsPack: {
        name?: string | null //   тип null пофиксить в дальнейшем
        path?: string
        grade?: number
        shots?: number
        rating?: number
        deckCover?: string
        private?: boolean
        type?: string
    }
}


const instance = axios.create({
    // baseURL: "http://localhost:7542/2.0/",
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
})
//  Разобраться с типизацией реквестов
export const packsAPI = {
    getPacks: (data: RequestPacksType) => instance.get<PacksInitialStateType>(`cards/pack`, { params: data }),
    addPack: (data: RequestNewPackType) => instance.post<{ newCardsPack: PackType }>(`cards/pack`, { ...data }),
    deletePack: (data: string) => instance.delete<{ deletedCardsPack: PackType }>(`cards/pack`, { params: {id: data} }),
}

