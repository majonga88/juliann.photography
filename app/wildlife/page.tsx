"use client"

import { Gallery } from "@/component/Gallery/Gallery";
import { Quote } from "@/component/Quote/Quote";
import { wildlife } from "@/data";
import StyledGallery from "@/styles/StyledGallery";
import StyledScrollbar from "@/styles/StyledScrollbar";
import LightSidebar from "@/template/light-sidebar";

export default function Wildlife() {
  return (
    <LightSidebar metadata={wildlife}>
      <StyledScrollbar color={wildlife.theme.scroll} />
      <StyledGallery>
        <Quote title={wildlife.title} quote={wildlife.quote} author={wildlife.author} />
        <Gallery
          gallery={wildlife}
          title="White lines of Canary Wharf"
          titleWidth={8}
          category="wildlife"
          alt="A building in Canary Wharf"
        />
      </StyledGallery>
    </LightSidebar>
  )


}