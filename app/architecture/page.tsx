"use client"

import { Gallery } from "@/component/Gallery/Gallery";
import { Quote } from "@/component/Quote/Quote";
import Sidebar from "@/component/Sidebar/Sidebar";
import { architecture } from "@/data";
import StyledGallery from "@/styles/StyledGallery";
import StyledScrollbar from "@/styles/StyledScrollbar";


export default function Architecture() {
  return (
    <Sidebar isLight theme={architecture.theme}>
      <StyledScrollbar color={architecture.theme.scroll} />
      <StyledGallery>
        <Quote title={architecture.title} quote={architecture.quote} author={architecture.author}/>
        <Gallery
          gallery={architecture}
          title="White lines of Canary Wharf"
          titleWidth={8}
          hideTitleNumber={false}
          category="architecture"
          alt="A building in Canary Wharf"
        />
      </StyledGallery>
    </Sidebar>
  )


}