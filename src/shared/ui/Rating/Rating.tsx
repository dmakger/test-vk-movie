import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Rating.module.scss'
import { getVariantRating } from "@/shared/lib/rating.lib";

interface RatingProps{
    rating: number | string
    className?: string,
}

export const Rating:FC<RatingProps> = ({rating, className}) => {
    return (
        <div className={cls(cl.rating, cl[getVariantRating(+rating)], className)}>
            {(+rating).toFixed(1)}
        </div>
    )
}
