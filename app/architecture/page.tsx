"use client"

import { Gallery } from "@/component/Gallery/Gallery";
import { Quote } from "@/component/Quote/Quote";
import { architecture } from "@/data";
import StyledGallery from "@/styles/StyledGallery";
import StyledScrollbar from "@/styles/StyledScrollbar";
import LightSidebar from "@/template/light-sidebar";
import { Container } from "@chakra-ui/react";

export default function Architecture() {
  return (
    <LightSidebar metadata={architecture}>
      <StyledScrollbar color={architecture.theme.scroll} />
      <StyledGallery>
        <Quote title={architecture.title} quote={architecture.quote} author={architecture.author}/>
        <Gallery
          gallery={architecture}
          title="White lines of Canary Wharf"
          titleWidth={8}
          category="architecture"
          alt="A building in Canary Wharf"
        />
      </StyledGallery>
    </LightSidebar>
  )


}