import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Query.module.scss'
import { IQuery } from "@/shared/model/query.model";
import { Slider } from "../Slider/Slider";
import { ISlider, TSlide } from "@/entities/Movie/model/slider.model";

interface QueryProps<T>{
    title?: string
    query: IQuery
    slide: TSlide<T>
    amount?: ISlider["amount"]
    className?: string,
}

export const Query = <T extends (object)>({title, query, slide, amount=1, className}: QueryProps<T>) => {
    return (
        <div className={cls(cl.query, className)}>
            {title && 
                <h3 className={cl.title}>{title}</h3>
            }
            <Slider component={slide} slides={query.docs} isLoading={false} amount={1} amountSlide={6} className={cl.content}/>
        </div>
    )
}
