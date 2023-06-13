"use client"

import { Gallery } from "@/component/Gallery/Gallery";
import { Quote } from "@/component/Quote/Quote";
import Sidebar from "@/component/Sidebar/Sidebar";
import { citylife } from "@/data";
import StyledGallery from "@/styles/StyledGallery";
import StyledScrollbar from "@/styles/StyledScrollbar";

export default function Citylife() {
  return (
    <Sidebar isLight theme={citylife.theme}>
      <StyledScrollbar color={citylife.theme.color.scroll} />
      <StyledGallery>
        <Quote title={citylife.title} quote={citylife.quote} author={citylife.author} />
        <Gallery
          gallery={citylife}
          category="city-life"
        />
      </StyledGallery>
    </Sidebar>
  )


}