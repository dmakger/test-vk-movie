import { FC } from "react"

import { IMovieDTO } from "@/entities/Movie/model/movieDTO.model";
import { MovieItem } from "@/entities/Movie/ui/Item/MovieItem";
import { TParams } from "@/shared/model/params.model";
import { ILinkedMovie } from "@/entities/Movie/model/linkedMovie.model";

interface SlideMovieProps{
    slide: IMovieDTO | ILinkedMovie
    props?: TParams
    className?: string,
}

export const SlideMovie:FC<SlideMovieProps> = ({slide, ...rest}) => {
    return (
        <MovieItem movie={slide} {...rest}/>
    )
}
