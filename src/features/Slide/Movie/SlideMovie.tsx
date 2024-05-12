import { FC } from "react"

import { IMovieDTO } from "@/entities/Movie/model/movieDTO.model";
import { MovieItem } from "@/entities/Movie/ui/Item/MovieItem";

interface SlideMovieProps{
    slide: IMovieDTO
    className?: string,
}

export const SlideMovie:FC<SlideMovieProps> = ({slide, ...rest}) => {
    return (
        <MovieItem movie={slide} {...rest} />
    )
}
