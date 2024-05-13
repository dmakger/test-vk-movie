import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_MovieItem.module.scss'
import { IMovieDTO } from "../../model/movieDTO.model";
import { ImageAPI } from "@/shared/ui/Image/API/ImageAPI";
import { getImageMovie } from "../../lib/image.movie.lib";
import { getNameMovie } from "../../lib/name.movie.lib";
import { Rating } from "@/shared/ui/Rating/Rating";
import Link from "next/link";
import { MAIN_PAGES } from "@/config/pages-url.config";
import { ILinkedMovie } from "../../model/linkedMovie.model";

interface MovieItemProps{
    movie: IMovieDTO | ILinkedMovie
    rating?: number
    className?: string,
}

export const MovieItem:FC<MovieItemProps> = ({movie, rating, className}) => { 
    const nameMovie = getNameMovie(movie)
    
    return (
        <Link href={MAIN_PAGES.MOVIE(movie.id)} className={cls(cl.movie, className)}>
            <ImageAPI src={getImageMovie(movie?.poster?.previewUrl)} className={cl.image} />
            <Rating rating={rating ? rating : movie.rating.kp} className={cl.rating} />
            <div className={cl.bottom}>
                {nameMovie && 
                    <span className={cl.name}>{nameMovie}</span>
                }
                <span className={cl.year}>{movie.year}</span>
            </div>
        </Link>
    )
}
