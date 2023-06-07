"use client"

import { Gallery } from "@/component/Gallery/Gallery";
import { Quote } from "@/component/Quote/Quote";
import { nature } from "@/data";
import StyledGallery from "@/styles/StyledGallery";
import StyledScrollbar from "@/styles/StyledScrollbar";
import LightSidebar from "@/template/light-sidebar";

export default function Nature() {
  return (
    <LightSidebar metadata={nature}>
      <StyledScrollbar color={nature.theme.scroll} />
      <StyledGallery>
        <Quote title={nature.title} quote={nature.quote} author={nature.author} />
        <Gallery
          gallery={nature}
          title="White lines of Canary Wharf"
          titleWidth={8}
          category="nature"
          alt="A building in Canary Wharf"
        />
      </StyledGallery>
    </LightSidebar>
  )


}