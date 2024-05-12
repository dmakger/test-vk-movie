import { ILogo } from "./logo.model"

export interface IWatchability {
    items: IWatchabilityItem[],
}

export interface IWatchabilityItem {
    name?: string | null
    logo: ILogo
    url: string
}