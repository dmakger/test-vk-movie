"use client"


import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_MovieList.module.scss'
import { MovieAPI } from "../../api/movie.api";
import { IQueryParams } from "@/shared/model/params.model";
import { Query } from "@/shared/ui/Query/Query";
import { SlideMovie } from "@/features/Slide/Movie/SlideMovie";

interface MovieListProps {
    title?: string
    paramsMovie: IQueryParams
    className?: string,
}

export const MovieList:FC<MovieListProps> = ({paramsMovie, className, ...rest}) => {
    const {data: movieQuery, isLoading: isLoadingMovieQuery} = MovieAPI.useGetMoviesQuery({...paramsMovie})

    console.log('movieQuery', isLoadingMovieQuery, movieQuery);

    if (isLoadingMovieQuery || movieQuery === undefined)
        return <></>
    
    return (
        <Query query={movieQuery} slide={SlideMovie} className={cls(cl.query, className)} {...rest} />
    )
}
