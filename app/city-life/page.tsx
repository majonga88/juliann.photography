"use client"

import { naturePhotosMetadata } from "@/data";
import { Gallery } from "@/template/Gallery";
import ScrollbarStyles from "@/template/Scrollbar";
import LightSidebar from "@/template/light-sidebar";

export default function Citylife() {
  return (
      <LightSidebar>
        <ScrollbarStyles scrollbarCornerColor="rgb(133, 203, 231)" scrollbarThumbColor="rgb(133, 203, 231)" />
        <Gallery
          gallery={naturePhotosMetadata}
          title="White lines of Canary Wharf"
          titleWidth={8}
          category="city-life"
          alt="A building in Canary Wharf"
        />
      </LightSidebar>
  )


}