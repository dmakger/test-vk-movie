"use client"

import { FC, ReactNode, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Button.module.scss'
import { ButtonType, ButtonView } from "@/shared/model/button.model";
import { Axis, IIcon, IIconProps, IIconSize } from "../../../model/icon.model";
import { ImageSmart } from "../../Image/Smart/ImageSmart";
import Link from "next/link";

interface ButtonProps {
    view?: ButtonView
    type?: ButtonType
    isActive?: boolean
    isCircle?: boolean

    beforeImage?: IIcon
    beforeProps?: IIconProps

    href?: string
    title?: string,

    arrow?: IIcon
    arrowAxis?: Axis
    arrowSize?: IIconSize

    children?: ReactNode,
    disabled?: boolean
    className?: string,
    classNameTitle?: string,

    onClick?: Function
    onMouseEnter?: Function
    onMouseLeave?: Function
}

export const Button:FC<ButtonProps> = ({
    view=ButtonView.Empty, type=ButtonType.Button, isActive=false, isCircle=false,
    beforeImage, beforeProps,
    href, title, 
    arrow, arrowAxis=Axis.Default, arrowSize, 
    children, disabled=false, className, classNameTitle,
    onClick=()=>{}, onMouseEnter=()=>{}, onMouseLeave=()=>{},
}) => {
    
    // STATE
    const [isHovered, setIsHovered] = useState(false)

    // HANDLE
    const handleOnMouseEnter = () => {
        setIsHovered(true)
        onMouseEnter()
    }
    const handleOnMouseLeave = () => {
        setIsHovered(false)
        onMouseLeave()
    }

    const html =  (
        <button type={type} disabled={disabled}
                onClick={e => onClick(e)} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} 
                className={cls(cl.button, isCircle ? cl.circle : '', cl[view], isActive ? cl.active : '', className)}>
            {beforeImage &&
                <ImageSmart {...beforeProps} icon={beforeImage} 
                            width={beforeProps && beforeProps.width ? beforeProps.width: 20} 
                            height={beforeProps && beforeProps.height ? beforeProps.height: 20} 
                            isActive={isActive} isHovered={isHovered} />
            }
            {title && 
                <span className={cls(cl.title, classNameTitle)}>{title}</span>
            }
            {arrow &&
                <ImageSmart icon={arrow} axis={arrowAxis} 
                            width={arrowSize?.width ? arrowSize?.width : 12} height={arrowSize?.height ? arrowSize?.height : 12} 
                            isActive={isActive} isHovered={isHovered} />
            }
            {children}
        </button>
    )

    if (!href)
        return html
    return (
        <Link href={href}>{html}</Link>
    )
}

