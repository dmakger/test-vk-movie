import { IRating } from "@/shared/model/rating.model"
import { MovieStatus } from "./status.movie.model"
import { IVotes } from "@/shared/model/votes.model"
import { ILogo } from "@/shared/model/logo.model"
import { IShortImage } from "@/shared/model/shortImage.model"
import { IVideoTypes } from "@/shared/model/video.model"
import { IItemName } from "@/shared/model/itemName.model"
import { IPersonInMovie } from "./personInMovie.model"
import { IReviewInfo } from "@/shared/model/reviewInfo.model"
import { ISeasonInfo } from "@/shared/model/seasonInfo.model"
import { IFees } from "@/shared/model/currencyValue.model"
import { IPremiere } from "@/shared/model/premiere.model"
import { ILinkedMovie } from "./linkedMovie.model"
import { IWatchability } from "@/shared/model/watchability.model"
import { IYearRange } from "@/shared/model/yearRange.model"
import { IAudience } from "@/shared/model/audience.model"
import { INetwork } from "@/shared/model/network.model"
import { IExternalId } from "@/shared/model/externalId.model"
import { IQuery } from "@/shared/model/query.model"

 export interface IMovieDTO {
    id: number
    externalId: IExternalId
    name?: string | null
    alternativeName?: string | null
    type: string
    typeNumber: string
    year: number,
    description?: string | null,
    shortDescription?: string | null,
    slogan?: string | null,
    status: MovieStatus,
    rating: IRating,
    votes: IVotes,
    movieLength?: number | null
    ratingMpaa?: string | null
    ageRating?: number | null
    logo: ILogo
    poster: IShortImage
    backdrop: IShortImage
    videos: IVideoTypes
    genres: IItemName[]
    countries: IItemName[]
    persons: IPersonInMovie[]
    reviewInfo: IReviewInfo
    seasonsInfo: ISeasonInfo[]
    fees: IFees
    premiere: IPremiere
    similarMovies?: ILinkedMovie | null
    sequelsAndPrequels?: ILinkedMovie | null
    watchability?: IWatchability
    releaseYears?: IYearRange
    top10?: number | null
    top250?: number | null
    ticketsOnSale?: boolean | null
    totalSeriesLength?: number | null
    seriesLength?: number | null
    isSeries?: boolean | null
    audience?: IAudience
    lists?: string[] | null
    networks?: INetwork | null
    updatedAt?: string | null
    createdAt?: string | null
}


// ===={ QUERY MOVIE }====
export interface IQueryMovieDTO extends IQuery {
    docs: IMovieDTO[]
}