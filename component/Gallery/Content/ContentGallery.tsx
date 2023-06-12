"use client"

import { useScroll } from "framer-motion";
import { Progress } from "@/component/Progress/Progress";
import { Photo } from "./Photo/Photo";

export interface GalleryMetadata {
  theme: {
    background: string;
    font: string;
    hover:string;
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
  hideTitleNumber: boolean;
  gallery: GalleryMetadata;
}

export function ContentGallery({ category, alt, title, titleWidth, hideTitleNumber, gallery }: Props) {
  
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
          hideTitleNumber={hideTitleNumber}
          aspectRatio={aspectRatio}
        />
      ))}
      <Progress scrollYProgress={scrollYProgress} background={gallery.theme.background} />
    </>
  );
}