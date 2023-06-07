"use client"

import { useScroll } from "framer-motion";
import { Photo } from "../../../template/Photo";
import { loadHoverColor } from "../../../template/sidebar";
import { Transition } from "@/component/Transition/Transition";
import { Progress } from "@/component/Progress/Progress";
import { GalleryFooter } from "@/component/Gallery/Footer/GalleryFooter";

export interface GalleryMetadata {
  theme: {
    background: string;
    font: string;
  },
  photos: PhotoMetadata[]
}

export interface PhotoMetadata {
  title: string;
  aspectRatio?: string;
}

interface Props {
  alt: string;
  category: string;
  title: string;
  titleWidth: number;
  gallery: GalleryMetadata;
}

export function ContentGallery({ category, alt, title, titleWidth, gallery }: Props) {
  
  const { scrollYProgress } = useScroll();

  return (
    <>
      {gallery.photos.map(({ title, aspectRatio }, index) => (
        <Photo
          category={category}
          index={index + 1}
          alt={alt}
          title={title}
          titleFontColor={gallery.theme.font}
          aspectRatio={aspectRatio}
        />
      ))}
      <Progress scrollYProgress={scrollYProgress} background={gallery.theme.background} />
    </>
  );
}