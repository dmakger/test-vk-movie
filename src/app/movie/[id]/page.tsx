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
import { RATING_KP__MOVIE_QUERY } from "@/shared/data/query.data";
import { minutesToHoursText } from "@/shared/lib/text.lib";

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
                    <div className={cl.top}>
                        <h1 className={cl.name}>{getNameMovie(movie)}</h1>
                        <span className={cl.slogan}>{movie.slogan}</span>
                    </div>
                    <p className={cl.description}>{movie.description}</p>
                    <div className={cl.shortInfo}>
                        <TextDict title={"Возрастной ценз"} value={movie.ageRating} />
                        {movie.movieLength &&
                            <TextDict title={"Продолжительность фильма"} value={minutesToHoursText(movie.movieLength)} />
                        }
                        <TextDict title={"Жанры"} value={movie.genres.map(it => it.name).join(', ')} />
                    </div>
                </div>
                <ImageAPI src={getImageMovie(movie.poster?.previewUrl)} className={cl.poster}/>
            </div>

            <div className={cl.collections}>
                {movie.similarMovies && movie.similarMovies.length > 0 && (
                    <MovieList title={'Похожие фильмы'} list={movie.similarMovies} paramsMovie={{page: 1, limit: 1}} />
                )}
                {movie.genres && movie.genres.length > 0 && (
                    <MovieList title={`В жанре ${movie.genres[0].name}`} paramsMovie={{...(RATING_KP__MOVIE_QUERY.paramsMovie), "genres.name": movie.genres[0].name}} />
                )}
            </div>
        </Wrapper1280>
    );
}
