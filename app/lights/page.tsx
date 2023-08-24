"use client";

import { Gallery } from "@/component/Gallery/Gallery";
import { Quote } from "@/component/Quote/Quote";
import Sidebar from "@/component/Sidebar/Sidebar";
import { lights } from "@/data";
import StyledGallery from "@/component/Gallery/StyledGallery";
import StyledScrollbar from "@/component/Scrollbar/StyledScrollbar";

export default function Lights() {
  return (
    <Sidebar isGallery theme={lights.theme}>
      <StyledScrollbar color={lights.theme.color.scroll} />
      <StyledGallery>
        <Quote
          title={lights.title}
          quote={lights.quote}
          author={lights.author}
        />
        <Gallery gallery={lights} category={lights.title.toLowerCase()} />
      </StyledGallery>
    </Sidebar>
  );
}
