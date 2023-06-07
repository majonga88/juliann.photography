"use client"

import { Gallery } from "@/component/Gallery/Gallery";
import { Quote } from "@/component/Quote/Quote";
import { citylife } from "@/data";
import StyledGallery from "@/styles/StyledGallery";
import StyledScrollbar from "@/styles/StyledScrollbar";
import LightSidebar from "@/template/light-sidebar";

export default function Citylife() {
  return (
    <LightSidebar metadata={citylife}>
      <StyledScrollbar color={citylife.theme.scroll} />
      <StyledGallery>
        <Quote title={citylife.title} quote={citylife.quote} author={citylife.author} />
        <Gallery
          gallery={citylife}
          title="White lines of Canary Wharf"
          titleWidth={8}
          category="city-life"
          alt="A building in Canary Wharf"
        />
      </StyledGallery>
    </LightSidebar>
  )


}