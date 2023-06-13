"use client"

import { Gallery } from "@/component/Gallery/Gallery";
import { Quote } from "@/component/Quote/Quote";
import Sidebar from "@/component/Sidebar/Sidebar";
import { nature } from "@/data";
import StyledGallery from "@/styles/StyledGallery";
import StyledScrollbar from "@/styles/StyledScrollbar";

export default function Nature() {
  return (
    <Sidebar isLight theme={nature.theme}>
      <StyledScrollbar color={nature.theme.color.scroll} />
      <StyledGallery>
        <Quote title={nature.title} quote={nature.quote} author={nature.author} />
        <Gallery
          gallery={nature}
          category="nature"
        />
      </StyledGallery>
    </Sidebar>
  )


}