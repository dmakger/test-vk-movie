import { ISlider } from "@/entities/Movie/model/slider.model"

export type TParams = Record<string, string | number>

export interface IQueryParams extends TParams {
    page: number | string,
    limit: number | string,
}

export interface IQueryProps {
    title?: string
    paramsMovie: IQueryParams
    props?: ISlider["props"]
}