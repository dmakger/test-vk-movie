import { ILogo } from "./logo.model";

export interface INetwork {
    items?: INetworkItem | null,
}


export interface INetworkItem {
    name?: string | null,
    logo?: ILogo | null,
}
