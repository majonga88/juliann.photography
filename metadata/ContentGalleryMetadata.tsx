import { LinkProps } from "./LinkProps";
import { PhotoMetadata } from "./PhotoMetadata";
import { ThemeProps } from "./ThemeMetadata";

export interface ContentGalleryMetadata {
  title: string;
  description?: string;
  quote?: string;
  author?: string;
  theme: ThemeProps;
  photos: PhotoMetadata[];
  nextGalleryLink : LinkProps;
}
