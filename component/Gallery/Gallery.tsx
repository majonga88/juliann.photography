import { GalleryFooter } from "./Footer/GalleryFooter";
import { Transition } from "../Transition/Transition";
import { ContentGallery, GalleryMetadata } from "./Content/ContentGallery";

interface Props {
  category: string;
  hideTitleNumber?: boolean;
  gallery: GalleryMetadata;
}

export function Gallery({ category, hideTitleNumber, gallery }: Props) {
  return (
    <>
      <ContentGallery
        category={category}
        hideTitleNumber={hideTitleNumber || false}
        gallery={gallery}
      />
      <GalleryFooter
        color={gallery.theme.color.font}
        hoverColor={gallery.theme.color.hover}
      />
      <Transition backgroundColor={gallery.theme.color.background} />
    </>
  );
}
