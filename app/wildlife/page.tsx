"use client"

import { Gallery } from "@/component/Gallery/Gallery";
import { Quote } from "@/component/Quote/Quote";
import Sidebar from "@/component/Sidebar/Sidebar";
import { wildlife } from "@/data";
import StyledGallery from "@/styles/StyledGallery";
import StyledScrollbar from "@/styles/StyledScrollbar";

export default function Wildlife() {
  return (
    <Sidebar isLight theme={wildlife.theme}>
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
    </Sidebar>
  )


}