import { ContentGalleryMetadata } from "./ContentGalleryMetadata";
import { ThemeProps } from "./ThemeMetadata";

export interface GalleryMetadata {
    theme: ThemeProps,
    galleries: ContentGalleryMetadata[]
  }