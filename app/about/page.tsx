"use client";

import { Quote } from "@/component/Quote/Quote";

import { about } from "@/data";
import StyledShortSidebar from "@/component/Sidebar/Sidebar";
import StyledScrollbar from "@/component/Scrollbar/StyledScrollbar";
import StyledGallery from "@/component/Gallery/StyledGallery";
import styled from "@emotion/styled";
import { Transition } from "@/component/Transition/Transition";

export default function About() {

  const StyledAbout = styled(StyledGallery)({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/about/about-1.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: "100vh"
  });

  return (
    <StyledShortSidebar isGallery theme={about.theme}>
      <StyledScrollbar color={about.theme.color.scroll} />
      <StyledAbout>
        <Quote
          title={about.title}
          description={about.description}
          author={about.author}
        />
        <Transition backgroundColor={about.theme.color.background} />
      </StyledAbout>
    </StyledShortSidebar>
  );
}
