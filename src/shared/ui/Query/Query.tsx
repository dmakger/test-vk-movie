"use client"

import { FC, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Query.module.scss'
import { IQuery } from "@/shared/model/query.model";
import { Slider } from "../Slider/Slider";
import { ISlider, TSlide } from "@/entities/Movie/model/slider.model";

interface QueryProps<T>{
    title?: string
    query?: IQuery
    listData?: T[]
    slide: TSlide<T>
    amount?: ISlider["amount"]
    props?: ISlider['props']
    className?: string,
}

export const Query = <T extends (object)>({title, query, listData=[], slide, amount=1, props, className}: QueryProps<T>) => {
    // STATE
    const [data, setData] = useState<T[]>([])

    // EFFECT
    useEffect(() => {
        if (listData && listData.length > 0)
            setData(listData)
        else if (query?.docs && query?.docs.length > 0)
            setData(query.docs)
    }, [query, listData])

    return (
        <div className={cls(cl.query, className)}>
            {title && 
                <h3 className={cl.title}>{title}</h3>
            }
            <Slider component={slide} slides={data} 
                    isLoading={false} 
                    amount={amount} amountSlide={6} 
                    props={props}
                    className={cl.content}/>
        </div>
    )
}
