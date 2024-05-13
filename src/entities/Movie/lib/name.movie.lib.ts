import { ILinkedMovie } from "../model/linkedMovie.model";
import { IMovieDTO } from "../model/movieDTO.model";

export const getNameMovie = (movie: IMovieDTO | ILinkedMovie) => {
    const {name, alternativeName, enName} = movie
    if (name)
        return name
    if (alternativeName)
        return alternativeName
    return enName
}