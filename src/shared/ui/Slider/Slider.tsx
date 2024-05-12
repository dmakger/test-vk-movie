"use client"


import { FC, useEffect, useRef, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Slider.module.scss'
import { ISlider, TSlide } from "../../../entities/Movie/model/slider.model";
import { Button } from "../Button/ui/Button";
import { Axis } from "@/shared/model/icon.model";
import { ARROW_BLACK_PURPLE__ICON } from "@/shared/data/icon/arrow.icon.data";

interface SliderProps<T> extends ISlider{
    slides?: T[];
    style?: object
    component: TSlide<T>;
    setTypeOfFile?: Function
}

export const Slider = <T extends (object | string)>({
    slides=[], amount = 3, limit = 10, setLimit,
    activeIndex, setActiveIndex=()=>{}, 
    component: SlideComponent, 
    className, classNameSlides, style, 
    setTypeOfFile
}: SliderProps<T>) => {
    // STATE
    const [startIndex, setStartIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0);    

    // Получение текущей ширины блока
    const [slidesWidth, setSlidesWidth] = useState(0);
    const slidesRef = useRef<HTMLDivElement>(null);

    const getWidthSlide = () => (slidesWidth / amount - 10)

    // EFFECT
    useEffect(() => {
        if (slidesRef.current) {
            setSlidesWidth(slidesRef.current.offsetWidth);
        }
    }, []);
    useEffect(() => {
        if (slidesRef.current) {
            setSlidesWidth(slidesRef.current.offsetWidth);
        }
    }, []);
    useEffect(() => {
        if (activeIndex !== undefined) {
            setStartIndex(activeIndex);
            setTranslateX(-activeIndex * (slidesWidth / amount));
        }
    }, [activeIndex]);

    // НАВИГАЦИЯ СЛАЙДЕРА
    const nextSlide = () => {
        let newStartIndex = startIndex + 1;
        if (setLimit && newStartIndex + 5 > limit) {
            setLimit(limit * 10);
        }
        setStartIndex(newStartIndex);
        setTranslateX(translateX - slidesWidth / amount);
        setActiveIndex(newStartIndex)
    };

    const prevSlide = () => {
        const newIndex = Math.max(startIndex - 1, 0)
        setStartIndex(newIndex);
        setTranslateX(translateX + slidesWidth / amount);
        setActiveIndex(newIndex)
    };

    return (
        <div style={style} className={cls(cl.slider, className)} ref={slidesRef}>
            {startIndex > 0 &&
                <Button arrow={ARROW_BLACK_PURPLE__ICON} arrowAxis={Axis.Left} 
                        onClick={prevSlide} className={cl.prevButton} />
            }

            <div className={cls(cl.slideContainer)} style={{transform: `translateX(${translateX}px)`}}>
                {slides.map((slide, index) => (
                    <SlideComponent slide={slide} 
                                    setTypeOfFile={setTypeOfFile}
                                    style={{ width: `${getWidthSlide()}px` }} 
                                    className={classNameSlides} key={index}/>
                ))}
            </div>

            {startIndex < slides.length - amount &&
                <Button arrow={ARROW_BLACK_PURPLE__ICON} arrowAxis={Axis.Right} 
                        onClick={nextSlide} className={cl.nextButton} />
            }
        </div>
    );

}
