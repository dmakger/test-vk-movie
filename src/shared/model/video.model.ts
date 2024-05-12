export interface IVideo {
    url?: string | null
    name?: string | null
    site?: string | null
    size?: number | null
    type?: string | null
}

export interface IVideoTypes {
    trailers: IVideo[]
}