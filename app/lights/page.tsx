"use client"

import { Gallery } from "@/component/Gallery/Gallery";
import { Quote } from "@/component/Quote/Quote";
import { lights } from "@/data";
import StyledGallery from "@/styles/StyledGallery";
import StyledScrollbar from "@/styles/StyledScrollbar";
import LightSidebar from "@/template/light-sidebar";

export default function Lights() {
  return (
    <LightSidebar metadata={lights}>
      <StyledScrollbar color={lights.theme.scroll} />
      <StyledGallery>
        <Quote title={lights.title} quote={lights.quote} author={lights.author} />
        <Gallery
          gallery={lights}
          title="White lines of Canary Wharf"
          titleWidth={8}
          category="lights"
          alt="A building in Canary Wharf"
        />
      </StyledGallery>
    </LightSidebar>
  )


}