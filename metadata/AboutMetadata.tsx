import { LinkProps } from "./LinkProps";
import { PhotoMetadata } from "./PhotoMetadata";
import { ThemeProps } from "./ThemeMetadata";

export interface AboutMetadata {
  title: string;
  description?: Array<string>;
  quote?: string;
  author?: string;
  theme: ThemeProps;
  photos: PhotoMetadata[];
  nextGalleryLink : LinkProps;
}
