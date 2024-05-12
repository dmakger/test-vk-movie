import { X_API_KEY } from "../data/api.data"

export const getHeaderWithApiKey = () => {
    return {'X-API-KEY': X_API_KEY}
}