import { GalleryFooter } from "./Footer/GalleryFooter";
import { Transition } from "../Transition/Transition";
import { ContentGallery } from "./Content/ContentGallery";
import { GalleryMetadata } from "@/metadata/GalleryMetadata";

interface Props {
  category: string;
  hideTitleNumber?: boolean;
  gallery: GalleryMetadata;
}

export function Gallery({ category, hideTitleNumber, gallery }: Props) {
  return (
    <div>
      <ContentGallery
        category={category}
        hideTitleNumber={hideTitleNumber || false}
        gallery={gallery}
      />
      <GalleryFooter
        color={gallery.theme.color.font}
        hoverColor={gallery.theme.color.hover}
        nextGalleryLink={gallery.nextGalleryLink}
      />
      <Transition backgroundColor={gallery.theme.color.background} />
    </div>
  );
}
