"use client"

import { Gallery } from "@/component/Gallery/Gallery";
import { Quote } from "@/component/Quote/Quote";
import Sidebar from "@/component/Sidebar/Sidebar";
import { wildlife } from "@/data";
import StyledGallery from "@/component/Gallery/StyledGallery";
import StyledScrollbar from "@/component/Scrollbar/StyledScrollbar";

export default function Wildlife() {
  return (
    <Sidebar isLight theme={wildlife.theme}>
      <StyledScrollbar color={wildlife.theme.color.scroll} />
      <StyledGallery>
        <Quote title={wildlife.title} quote={wildlife.quote} author={wildlife.author} />
        <Gallery
          gallery={wildlife}
          category={wildlife.title.toLowerCase()}
        />
      </StyledGallery>
    </Sidebar>
  )


}