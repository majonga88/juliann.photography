import { Variants } from "framer-motion";
import { ContentGalleryMetadata } from "./ContentGalleryMetadata";

export interface GalleryMetadata {
    theme: {
      background: string;
      font: string;
      hover: string;
      variants: Variants;
    },
    galleries: ContentGalleryMetadata[]
  }