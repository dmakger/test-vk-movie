"use client"

import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_MovieList.module.scss'
import { MovieAPI } from "../../api/movie.api";
import { IQueryProps, IQueryParams } from "@/shared/model/params.model";
import { Query } from "@/shared/ui/Query/Query";
import { SlideMovie } from "@/features/Slide/Movie/SlideMovie";
import { IMovieDTO } from "../../model/movieDTO.model";
import { ILinkedMovie } from "../../model/linkedMovie.model";

interface MovieListProps extends IQueryProps {
    list?: (IMovieDTO | ILinkedMovie)[]
    className?: string,
}

export const MovieList:FC<MovieListProps> = ({list, paramsMovie, className, ...rest}) => {
    // API
    const {data: movieQuery, isLoading: isLoadingMovieQuery} = MovieAPI.useGetMoviesQuery({...paramsMovie})

    console.log('movieQuery', movieQuery);
    

    if (isLoadingMovieQuery || movieQuery === undefined)
        return <></>
    
    return (
        <Query query={movieQuery} listData={list} slide={SlideMovie} className={cls(cl.query, className)} {...rest} />
    )
}
