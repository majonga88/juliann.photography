"use client";

import { useScroll } from "framer-motion";
import { Progress } from "@/component/Progress/Progress";
import { Photo } from "./Photo/Photo";
import { ThemeProps } from "@/metadata/ThemeMetadata";
import { PhotoMetadata } from "@/metadata/PhotoMetadata";

export interface GalleryMetadata {
  theme: ThemeProps;
  photos: PhotoMetadata[];
}

interface Props {
  category: string;
  hideTitleNumber: boolean;
  gallery: GalleryMetadata;
}

export function ContentGallery({ category, hideTitleNumber, gallery }: Props) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {gallery.photos.map(({ title, aspectRatio, alt }, index) => (
        <Photo
          key={index}
          category={category}
          index={index + 1}
          alt={alt}
          title={title}
          titleFontColor={gallery.theme.color.font}
          hideTitleNumber={hideTitleNumber}
          aspectRatio={aspectRatio}
        />
      ))}
      <Progress
        scrollYProgress={scrollYProgress}
        background={gallery.theme.color.background}
      />
    </>
  );
}
