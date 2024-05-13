import { IQueryParams, IQueryProps, TParams } from "../model/params.model";

// PL: Page Limit
const DEFAULT_PL: IQueryParams = {page: 1, limit: 42}

const DEFAULT_RATING: TParams = {sortField: "rating.kp", sortType: "-1", notNullFields: "poster.url"}



// ====={ MOVIE }=====
export const RATING_KP__MOVIE_QUERY: IQueryProps = {
    title: 'Лучшие фильмы по мнению Кинопоиска',
    paramsMovie: {...DEFAULT_PL, ...DEFAULT_RATING, type: "movie", }
}

export const RUSSIAN__MOVIE_QUERY: IQueryProps = {
    title: 'Российские фильмы',
    paramsMovie: {...DEFAULT_PL, ...DEFAULT_RATING, type: "movie", "countries.name": "Россия"}
}

export const NEW__MOVIE_QUERY: IQueryProps = {
    title: 'Топ 250',
    paramsMovie: {...DEFAULT_PL, sortField: 'top250', sortType: "-1", type: "movie"}
}
