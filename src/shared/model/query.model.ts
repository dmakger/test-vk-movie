import { IMovieDTO } from "@/entities/Movie/model/movieDTO.model"

export interface IQuery {
    docs: any[]
    total: number,
    limit: number,
    page: number,
    pages: number
}
