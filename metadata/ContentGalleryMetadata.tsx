import { PhotoMetadata } from "@/component/Gallery/Content/ContentGallery";
import { Variants } from "framer-motion";

export interface ContentGalleryMetadata {
    title: string,
    description: string,
    quote?: string,
    author?: string,
    theme: {
        background: string;
        font: string;
        hover: string;
        scroll?: string;
        progress?: string;
        variants: Variants;
    },
    photos: PhotoMetadata[]
}