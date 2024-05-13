import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_TextDict.module.scss'

interface TextDictProps{
    title: string
    value?: string | number | null
    className?: string,
    classNameText?: string,
}

export const TextDict:FC<TextDictProps> = ({title, value, className, classNameText}) => {
    if (!value)
        return <></>
    return (
        <div className={cls(cl.dict, className)}>
            <span className={cls(cl.title, classNameText)}>{title}:</span>
            <span className={cls(cl.value, classNameText)}>{`${value}`}</span>
        </div>
    )
}
