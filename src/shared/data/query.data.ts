import { IQueryProps } from "../model/params.model";

// ====={ MOVIE }=====
export const RATING_KP__MOVIE_QUERY: IQueryProps = {
    title: 'Лучшие фильмы по мнению Кинопоиска',
    paramsMovie: {page: 1, limit: 40, sortField: "rating.kp", sortType: "-1", type: "movie"}
}

// export const RATING_FILM_CRITICS__MOVIE_QUERY: IQueryProps = {
//     title: 'Лучшие фильмы по мнению критиков',
//     paramsMovie: {page: 1, limit: 40, sortField: "rating.filmCritics", sortType: "-1", type: "movie"},
//     props: {rating: }
// }

