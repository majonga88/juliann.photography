import { AboutMetadata } from "./metadata/AboutMetadata";
import { ContentGalleryMetadata } from "./metadata/ContentGalleryMetadata";
import { HomeMetadata } from "./metadata/HomeMetadata";

const Direction = {
  Vertical: "vertical",
  Horizontal: "horizontal",
} as const;

const loadVariantsForLogo = (color: string) => {
  return {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(" + color + ", 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(" + color + ", 1)",
    },
  };
};

export const architecture: ContentGalleryMetadata = {
  title: "Architecture",
  quote:
    "Architecture is like writing. You have to edit it over and over so it looks effortless.",
  author: "_ Zaha Hadid.",
  theme: {
    color: {
      background: "rgb(203 174 129)",
      font: "rgb(255, 255, 255)",
      hover: "rgb(0, 0, 0)",
      progress: "rgba(0,0,0,0.8)",
      scroll: "rgb(203 174 129)",
    },
    logo: {
      color: "rgb(255, 255, 255)",
      stroke: "rgb(255, 255, 255)",
      hover: "rgb(0, 0, 0)",
      variants: loadVariantsForLogo("255, 255, 255"),
    },
  },
  photos: [
    { aspectRatio: Direction.Horizontal, alt: "Photo 1" },
    { aspectRatio: Direction.Horizontal, alt: "Photo 2" },
    { aspectRatio: Direction.Horizontal, alt: "Photo 3" },
  ],
};

export const wildlife: ContentGalleryMetadata = {
  title: "Wildlife",
  quote:
    "Each species is a masterpiece, a creation assembled with extreme care and genius.",
  author: "_ Edward O. Wilson.",
  theme: {
    color: {
      background: "rgb(144, 189, 223)",
      font: "rgb(255, 255, 255)",
      hover: "rgb(0, 0, 0)",
      progress: "rgba(0,0,0,0.8)",
      scroll: "rgb(144, 189, 223)",
    },
    logo: {
      color: "rgb(255, 255, 255)",
      stroke: "rgb(255, 255, 255)",
      hover: "rgb(0, 0, 0)",
      variants: loadVariantsForLogo("255, 255, 255"),
    },
  },
  photos: [
    { aspectRatio: Direction.Horizontal, alt: "Photo 1" },
    { aspectRatio: Direction.Horizontal, alt: "Photo 2" },
    { aspectRatio: Direction.Horizontal, alt: "Photo 3" },
  ],
};

export const nature: ContentGalleryMetadata = {
  title: "Nature",
  quote:
    "People must feel that the natural world is important and valuable and beautiful and wonderful and an amazement and a pleasure.",
  author: "_ Sir David Attenborough.",
  theme: {
    color: {
      background: "rgb(139 164 134)",
      font: "rgb(0, 0, 0)",
      hover: "rgb(255, 255, 255)",
      progress: "rgba(0,0,0,0.8)",
      scroll: "rgb(139 164 134)",
    },
    logo: {
      color: "rgb(0, 0, 0)",
      stroke: "rgb(0, 0, 0)",
      hover: "rgb(255, 255, 255)",
      variants: loadVariantsForLogo("0, 0, 0"),
    },
  },
  photos: [
    { aspectRatio: Direction.Horizontal, alt: "Photo 1" },
    { aspectRatio: Direction.Horizontal, alt: "Photo 2" },
    { aspectRatio: Direction.Horizontal, alt: "Photo 3" },
  ],
};

export const lights: ContentGalleryMetadata = {
  title: "Lights",
  quote:
    "There are darknesses in life and there are lights, and you are one of the lights, the light of all lights.",
  author: "_ Bram Stoker.",
  theme: {
    color: {
      background: "rgb(211 183 85)",
      font: "rgb(255, 255, 255)",
      hover: "rgb(0, 0, 0)",
      progress: "rgba(0,0,0,0.8)",
      scroll: "rgb(211 183 85)",
    },
    logo: {
      color: "rgb(255, 255, 255)",
      stroke: "rgb(255, 255, 255)",
      hover: "rgb(0, 0, 0)",
      variants: loadVariantsForLogo("255, 255, 255"),
    },
  },
  photos: [
    { aspectRatio: Direction.Vertical, alt: "Photo 1" },
    { aspectRatio: Direction.Horizontal, alt: "Photo 2" },
    { aspectRatio: Direction.Horizontal, alt: "Photo 3" },
  ],
};

export const citylife: ContentGalleryMetadata = {
  title: "City-life",
  quote:
    "A city is a place where there is no need to wait for next week to get the answer to a question, to taste the food of any country, to find new voices to listen to and familiar ones to listen to again.",
  author: "_ Margaret Mead.",
  theme: {
    color: {
      background: "rgb(174 174 174)",
      font: "rgb(0, 0, 0)",
      hover: "rgb(255, 255, 255)",
      progress: "rgba(0,0,0,0.8)",
      scroll: "rgb(174 174 174)",
    },
    logo: {
      color: "rgb(0, 0, 0)",
      stroke: "rgb(0, 0, 0)",
      hover: "rgb(255, 255, 255)",
      variants: loadVariantsForLogo("0, 0, 0"),
    },
  },
  photos: [
    { aspectRatio: Direction.Horizontal, alt: "Photo 1" },
    { aspectRatio: Direction.Vertical, alt: "Photo 2" },
    { aspectRatio: Direction.Vertical, alt: "Photo 3" },
  ],
};

export const about: AboutMetadata = {
  title: "About",
  description: [
    "To me, photography epitomizes one of the pinnacle manifestations of sophistication, elegance, and iconic flair. It is an undeniable form of artistic expression.",
    "Infatuated with the raw beauty of nature and the majestic grandeur of architecture, I've journeyed across diverse terrains and cultures around the globe to immortalize fleeting moments, rendering them profoundly poignant and eternally memorable for all who witness them.",
  ],
  author: "_ Julian.",
  theme: {
    color: {
      background: "rgb(0, 0, 0)",
      font: "rgb(255, 255, 255)",
      hover: "rgb(255, 255, 255)",
    },
    logo: {
      color: "rgb(162, 179, 204)",
      stroke: "rgb(162, 179, 204)",
      hover: "rgb(255, 255, 255)",
      variants: loadVariantsForLogo("162, 179, 204"),
    },
  },
  photos: [
    { title: "Photo 1", aspectRatio: Direction.Horizontal, alt: "Photo 1" },
  ],
};

export const home: HomeMetadata = {
  theme: {
    color: {
      background: "rgb(0, 0, 0)",
      font: "rgb(255, 255, 255)",
      hover: "rgb(157, 180, 201)",
    },
    logo: {
      color: "rgb(157, 180, 201)",
      stroke: "rgb(157, 180, 201)",
      hover: "rgb(255, 255, 255)",
      variants: loadVariantsForLogo("157, 180, 201"),
    },
  },
  links: [{ name: "Store (Soon)", path: "/store" }],
  tiles: [
    {
      title: "Architecture",
      href: "/architecture",
      imgLocation: "/architecture/architecture-1.jpg",
      aspectRatio: Direction.Vertical,
      alt: "Architecture gallery",
    },
    {
      title: "Wildlife",
      href: "/wildlife",
      imgLocation: "/wildlife/wildlife-1.jpg",
      aspectRatio: Direction.Vertical,
      delay: 0.1,
      alt: "Wildlife gallery",
    },
    {
      title: "Nature",
      href: "/nature",
      imgLocation: "/nature/nature-1.jpg",
      aspectRatio: Direction.Vertical,
      delay: 0.2,
      alt: "Nature gallery",
    },
    {
      title: "City-life",
      href: "/city-life",
      imgLocation: "/city-life/city-life-1.jpg",
      aspectRatio: Direction.Vertical,
      delay: 0.3,
      alt: "City-life gallery",
    },
    {
      title: "Lights",
      href: "/lights",
      imgLocation: "/lights/lights-1.jpg",
      aspectRatio: Direction.Vertical,
      delay: 0.4,
      alt: "Lights gallery",
    },
    {
      title: "About",
      href: "/about",
      imgLocation: "/about/about-1.jpg",
      aspectRatio: Direction.Vertical,
      delay: 0.5,
      alt: "About gallery",
    },
  ],
};
