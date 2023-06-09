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
    "Architecture is like writing. You have to edit it over and over so it looks effortless",
  author: "- Zaha Hadid",
  theme: {
    color: {
      background: "rgb(133, 203, 231)",
      font: "rgb(255, 255, 255)",
      hover: "rgb(0, 0, 0)",
      progress: "rgb(133, 203, 231)",
      scroll: "rgb(133, 203, 231)",
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
    "Each species is a masterpiece, a creation assembled with extreme care and genius",
  author: "– Edward O. Wilson",
  theme: {
    color: {
      background: "rgb(133, 203, 231)",
      font: "rgb(255, 255, 255)",
      hover: "rgb(0, 0, 0)",
      progress: "rgb(133, 203, 231)",
      scroll: "rgb(133, 203, 231)",
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
    "People must feel that the natural world is important and valuable and beautiful and wonderful and an amazement and a pleasure",
  author: "– David Attenborough",
  theme: {
    color: {
      background: "rgb(133, 203, 231)",
      font: "rgb(0, 0, 0)",
      hover: "rgb(255, 255, 255)",
      progress: "rgb(133, 203, 231)",
      scroll: "rgb(133, 203, 231)",
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
  author: "– Bram Stoker",
  theme: {
    color: {
      background: "rgb(135, 160, 172)",
      font: "rgb(255, 255, 255)",
      hover: "rgb(0, 0, 0)",
      progress: "rgb(135, 160, 172)",
      scroll: "rgb(135, 160, 172)",
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
  author: "– Margaret Mead",
  theme: {
    color: {
      background: "rgb(133, 203, 231)",
      font: "rgb(0, 0, 0)",
      hover: "rgb(255, 255, 255)",
      progress: "rgb(133, 203, 231)",
      scroll: "rgb(133, 203, 231)",
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
    "To me, the photography represent one the most sophisticated, elegeant and iconic style. This is the art of expression.",
    "Passionate for nature and architecture, I traveled to different part of the world to capture moments, make them intense and memorable to everyone.",
  ],
  author: "– Julian.",
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
