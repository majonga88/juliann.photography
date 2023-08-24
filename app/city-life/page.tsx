"use client";

import { Gallery } from "@/component/Gallery/Gallery";
import { Quote } from "@/component/Quote/Quote";
import Sidebar from "@/component/Sidebar/Sidebar";
import { citylife } from "@/data";
import StyledGallery from "@/component/Gallery/StyledGallery";
import StyledScrollbar from "@/component/Scrollbar/StyledScrollbar";

export default function Citylife() {
  return (
    <Sidebar isGallery theme={citylife.theme}>
      <StyledScrollbar color={citylife.theme.color.scroll} />
      <StyledGallery>
        <Quote
          title={citylife.title}
          quote={citylife.quote}
          author={citylife.author}
        />
        <Gallery gallery={citylife} category={citylife.title.toLowerCase()} />
      </StyledGallery>
    </Sidebar>
  );
}
