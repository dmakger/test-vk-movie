import { IMovieDTO } from "../model/movieDTO.model";

export const getNameMovie = (movie: IMovieDTO) => {
    const {name, alternativeName, enName} = movie
    if (name)
        return name
    if (alternativeName)
        return alternativeName
    return enName
}