
export interface IIcon {
    default: string
    defaultHovered?: string

    active?: string
    activeHovered?: string
}


export interface IIconProps {
    icon?: IIcon
    axis?: Axis
    isActive?: boolean
    width?: number
    height?: number
    isHovered?: boolean
    className?: string,
    classNameImage?: string,
}

// НАПРАВЛЕНИЯ. Есть зависимость с css
export enum Axis {
    Top = "top",
    Right = "right",
    Bottom = "bottom",
    Left = "left",
    Default = "",
}