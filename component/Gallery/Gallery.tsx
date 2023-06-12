import { GalleryFooter } from "./Footer/GalleryFooter";
import { Transition } from "../Transition/Transition";
import { ContentGallery, GalleryMetadata } from "./Content/ContentGallery";

interface Props {
    alt: string;
    category: string;
    title: string;
    titleWidth: number;
    hideTitleNumber?: boolean;
    gallery: GalleryMetadata;
}


export function Gallery({ category, alt, title, titleWidth, hideTitleNumber, gallery }: Props) {

    return (
        <>
            <ContentGallery
                category={category}
                alt={alt}
                title={title} titleWidth={titleWidth} hideTitleNumber={hideTitleNumber || false}
                gallery={gallery} />
            <GalleryFooter color={gallery.theme.font} hoverColor={gallery.theme.hover} />
            <Transition backgroundColor={gallery.theme.background} />
        </>
    )
}