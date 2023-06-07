import { GalleryFooter } from "./Footer/GalleryFooter";
import { Transition } from "../Transition/Transition";
import { loadHoverColor } from "@/template/sidebar";
import { ContentGallery, GalleryMetadata } from "./Content/ContentGallery";

interface Props {
    alt: string;
    category: string;
    title: string;
    titleWidth: number;
    gallery: GalleryMetadata;
}


export function Gallery({ category, alt, title, titleWidth, gallery }: Props) {

    const hoverColor = loadHoverColor()

    return (
        <>
            <ContentGallery
                category={category}
                alt={alt}
                title={title} titleWidth={titleWidth}
                gallery={gallery} />
            <GalleryFooter color={gallery.theme.font} hoverColor={hoverColor} />
            <Transition backgroundColor={gallery.theme.background} />
        </>
    )
}