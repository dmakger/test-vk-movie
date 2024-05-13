import MovieDefaultSVG from "@/shared/assets/MovieDefault.svg";

export const getImageMovie = (image?: string | null) => {
    if (!image)
        return MovieDefaultSVG
    return image
}