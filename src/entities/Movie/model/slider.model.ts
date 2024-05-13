import { TParams } from "@/shared/model/params.model";

export interface ISlider {
    activeIndex?: number
    setActiveIndex?: (index: number) => any
    isLoading: boolean
    limit?: number,
    setLimit?: Function,
    amount: number,
    amountSlide: number,
    className?: string,
    classNameSlides?: string
    props?: TParams
}

export type TSlide<T> = React.FC<{
    slide: T,
    className?: string,
    style?: object,
    setTypeOfFile?: Function
}>;