"use client";

import { Gallery } from "@/component/Gallery/Gallery";
import StyledGallery from "@/component/Gallery/StyledGallery";
import { Quote } from "@/component/Quote/Quote";
import StyledScrollbar from "@/component/Scrollbar/StyledScrollbar";
import Sidebar from "@/component/Sidebar/Sidebar";
import { nature } from "@/data";

export default function Nature() {
  return (
    <Sidebar isGallery theme={nature.theme}>
      <StyledScrollbar color={nature.theme.color.scroll} />
      <StyledGallery>
        <Quote
          title={nature.title}
          quote={nature.quote}
          author={nature.author}
        />
        <Gallery gallery={nature} category={nature.title.toLowerCase()} />
      </StyledGallery>
    </Sidebar>
  );
}
