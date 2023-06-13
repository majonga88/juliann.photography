"use client"

import { Quote } from "@/component/Quote/Quote";

import { about } from "@/data";
import StyledGallery from "@/styles/StyledGallery";
import { Gallery } from "@/component/Gallery/Gallery";
import Sidebar from "@/component/Sidebar/Sidebar";

export default function About() {

    return (
        <Sidebar isLight theme={about.theme}>
            <StyledGallery>
                <Quote title={about.title} description={about.description} author={about.author} />
                <Gallery
                    gallery={about}
                    category="about"
                    hideTitleNumber
                />
            </StyledGallery>
        </Sidebar>
    )
}