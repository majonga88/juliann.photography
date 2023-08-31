"use client";

import { useScroll } from "framer-motion";
import { Progress } from "@/component/Progress/Progress";
import { Photo } from "./Photo/Photo";
import { ThemeProps } from "@/metadata/ThemeMetadata";
import { PhotoMetadata } from "@/metadata/PhotoMetadata";
import { useEffect, useState } from "react";
import { useSharedState } from "@/component/sharedStateProvider";

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
  const { state, setState } = useSharedState();

  useEffect(() => {
    
    if (scrollYProgress.get() < 1 || state === true) {
      setState(false);
    }

    const unsubscribe = scrollYProgress.onChange((value) => {
      setState(value >= 1); // value is between 0 and 1
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

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
        background={gallery.theme.color.progress}
      />
    </>
  );
}
