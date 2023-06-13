"use client"

import { Gallery } from "@/component/Gallery/Gallery";
import { Quote } from "@/component/Quote/Quote";
import Sidebar from "@/component/Sidebar/Sidebar";
import { architecture } from "@/data";
import StyledGallery from "@/component/Gallery/StyledGallery";
import StyledScrollbar from "@/component/Scrollbar/StyledScrollbar";


export default function Architecture() {
  return (
    <Sidebar isLight theme={architecture.theme}>
      <StyledScrollbar color={architecture.theme.color.scroll} />
      <StyledGallery>
        <Quote title={architecture.title} quote={architecture.quote} author={architecture.author}/>
        <Gallery
          gallery={architecture}
          category={architecture.title.toLowerCase()}
        />
      </StyledGallery>
    </Sidebar>
  )


}