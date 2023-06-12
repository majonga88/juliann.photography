import { PhotoMetadata } from "@/component/Gallery/Content/ContentGallery";
import { Variants } from "framer-motion";

export interface Link {
    name: string;
    path: string;
}

export interface HomeMetadata {
    links: Array<Link>,
    theme: {
        background: string;
        font: string;
        hover: string;
        logo: string;
        variants: Variants;
    },
    photos: PhotoMetadata[]
}