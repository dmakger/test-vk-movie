"use client"

import { MovieAPI } from "@/entities/Movie/api/movie.api";
import { getImageMovie } from "@/entities/Movie/lib/image.movie.lib";
import { getNameMovie } from "@/entities/Movie/lib/name.movie.lib";
import { ImageAPI } from "@/shared/ui/Image/API/ImageAPI";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { useParams } from "next/navigation";
import cl from './_MovieDetailPage.module.scss'
import { MovieList } from "@/entities/Movie/ui/List/MovieList";
import { TextDict } from "@/shared/ui/Text/Dict/TextDict";

export default function MovieDetailPage() {
    // ROUTER
    const {id} = useParams();

    // API
    const {data: movie, isLoading: isLoadingMovie} = MovieAPI.useGetMovieQuery(Array.isArray(id) ? id[0] : id)


    console.log('movie', movie)

    if (movie === undefined || isLoadingMovie)
        return <></>

    return (
        <Wrapper1280 classNameContent={cl.block}>
            <div className={cl.main}>
                <div className={cl.body}>
                    <h1 className={cl.name}>{getNameMovie(movie)}</h1>
                    <p className={cl.description}>{movie.description}</p>
                    <div className={cl.shortInfo}>
                        <TextDict title={"Возрастной ценз"} value={movie.ageRating} />
                    </div>
                </div>
                <ImageAPI src={getImageMovie(movie.poster?.previewUrl)} className={cl.poster}/>
            </div>
            {movie.similarMovies && (
                <MovieList title={'Похожие фильмы'} list={movie.similarMovies} paramsMovie={{page: 1, limit: 1}} />
            )}
        </Wrapper1280>
    );
}
