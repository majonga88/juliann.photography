import { LinkProps } from "./LinkProps";
import { PhotoMetadata } from "./PhotoMetadata";
import { ThemeProps } from "./ThemeMetadata";

export interface GalleryMetadata {
    theme: ThemeProps;
    photos: PhotoMetadata[];
    nextGalleryLink: LinkProps;
}