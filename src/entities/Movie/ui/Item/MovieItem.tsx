import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_MovieItem.module.scss'
import { IMovieDTO } from "../../model/movieDTO.model";

interface MovieItemProps{
    movie: IMovieDTO
    className?: string,
}

export const MovieItem:FC<MovieItemProps> = ({movie, className}) => {
    return (
        <div className={cls(className)}>
            {movie.name}
        </div>
    )
}
