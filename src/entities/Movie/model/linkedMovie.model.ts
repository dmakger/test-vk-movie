import { IRating } from "@/shared/model/rating.model"
import { IShortImage } from "@/shared/model/shortImage.model"

 export interface ILinkedMovie {
    id: number
    name?: string | null
    enName?: string | null
    alternativeName?: string | null
    type: string
    rating: IRating,
    poster: IShortImage
    year?: number | null
}