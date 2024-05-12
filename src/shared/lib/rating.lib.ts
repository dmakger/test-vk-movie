import { RatingVariants } from "../data/rating.data"

export const getVariantRating = (rating: number) => {
    if (rating >= 7)
        return RatingVariants['Large']
    if (rating >= 5)
        return RatingVariants['Middle']
    return RatingVariants['Low']
}