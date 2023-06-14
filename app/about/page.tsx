"use client";

import { Quote } from "@/component/Quote/Quote";

import { about } from "@/data";
import { Gallery } from "@/component/Gallery/Gallery";
import StyledShortSidebar from "@/component/Sidebar/Sidebar";
import StyledScrollbar from "@/component/Scrollbar/StyledScrollbar";
import StyledGallery from "@/component/Gallery/StyledGallery";

export default function About() {
  return (
    <StyledShortSidebar isLight theme={about.theme}>
      <StyledScrollbar color={about.theme.color.scroll} />
      <StyledGallery>
        <Quote
          title={about.title}
          description={about.description}
          author={about.author}
        />
        <Gallery
          gallery={about}
          category={about.title.toLowerCase()}
          hideTitleNumber
        />
      </StyledGallery>
    </StyledShortSidebar>
  );
}
