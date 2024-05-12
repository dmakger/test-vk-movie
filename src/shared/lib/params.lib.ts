import { TParams } from "../model/params.model";

export const paramsToString = (params: TParams) => {
    return Object.keys(params).map(key => {
        let value = params[key];
        if (value === undefined)
            return ''
        return `${key}=${value}`
    }).join('&')
}