import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { getHeaderWithApiKey } from "@/shared/lib/api.lib";
import { CURRENT_API_URL } from "@/shared/data/api.data";
import { IMovieDTO, IQueryMovieDTO } from "../model/movieDTO.model";
import { paramsToString } from "@/shared/lib/params.lib";
import { IQueryParams, TParams } from "@/shared/model/params.model";

export const MovieAPI = createApi({
	reducerPath: 'movieAPI',
  	baseQuery: fetchBaseQuery({
		baseUrl: CURRENT_API_URL + '/movie'
	}),
	endpoints: (build) => ({
		getMovies: build.query<IQueryMovieDTO, IQueryParams>({
			query: (props) => ({
				url: `?${paramsToString(props)}`,
				method: 'GET',
				headers: getHeaderWithApiKey(),
			})
		}),

		getMovie: build.query<IMovieDTO, number | string>({
			query: (id) => ({
				url: `/${id}`,
				method: 'GET',
				headers: getHeaderWithApiKey(),
			})
		}),
	})
})
