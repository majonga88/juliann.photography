import { ContentGalleryMetadata } from "./metadata/ContentGalleryMetadata";
import { HomeMetadata } from "./metadata/HomeMetadata";

const loadVariantsForLogo = (color: string) => {
  return {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(" + color + ", 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(" + color + ", 1)"
    }
  }
};

export const architecture: ContentGalleryMetadata = {
  title: 'Architecture',
  quote: 'Architecture is like writing. You have to edit it over and over so it looks effortless',
  author: '- Zaha Hadid',
  theme: {
    background: 'rgb(133, 203, 231)',
    font: 'rgb(255, 255, 255)',
    hover: 'rgb(183, 94, 9)',
    progress: 'rgb(133, 203, 231)',
    scroll: 'rgb(133, 203, 231)',
    logo: 'rgb(255, 255, 255)',
    variants: loadVariantsForLogo('255, 255, 255')
  },
  photos: [
    { title: 'Photo 1' },
    { title: 'Photo 2' },
    { title: 'Photo 3' }
  ]
};

export const wildlife: ContentGalleryMetadata = {
  title: 'Wildlife',
  quote: 'Each species is a masterpiece, a creation assembled with extreme care and genius',
  author: '– Edward O. Wilson',
  theme: {
    background: 'rgb(133, 203, 231)',
    font: 'rgb(255, 255, 255)',
    hover: 'rgb(183, 94, 9)',
    progress: 'rgb(133, 203, 231)',
    scroll: 'rgb(133, 203, 231)',
    logo: 'rgb(255, 255, 255)',
    variants: loadVariantsForLogo('255, 255, 255')
  },
  photos: [
    { title: 'Photo 1' },
    { title: 'Photo 2' },
    { title: 'Photo 3' }
  ]
};

export const nature: ContentGalleryMetadata = {
  title: 'Nature',
  quote: 'People must feel that the natural world is important and valuable and beautiful and wonderful and an amazement and a pleasure',
  author: '– David Attenborough',
  theme: {
    background: 'rgb(133, 203, 231)',
    font: 'rgb(0, 0, 0)',
    hover: 'rgb(183, 94, 9)',
    progress: 'rgb(133, 203, 231)',
    scroll: 'rgb(133, 203, 231)',
    logo: 'rgb(0, 0, 0)',
    variants: loadVariantsForLogo('0, 0, 0')
  },
  photos: [
    { title: 'Photo 1' },
    { title: 'Photo 2' },
    { title: 'Photo 3' }
  ]
};

export const lights: ContentGalleryMetadata = {
  title: 'Lights',
  quote: 'There are darknesses in life and there are lights, and you are one of the lights, the light of all lights.',
  author: '– Bram Stoker',
  theme: {
    background: 'rgb(135, 160, 172)',
    font: 'rgb(255, 255, 255)',
    hover: 'rgb(255, 255, 255)',
    progress: 'rgb(135, 160, 172)',
    scroll: 'rgb(135, 160, 172)',
    logo: 'rgb(255, 255, 255)',
    variants: loadVariantsForLogo('255, 255, 255')
  },
  photos: [
    { title: 'Photo 1' },
    { title: 'Photo 2' },
    { title: 'Photo 3' }
  ]
};

export const citylife: ContentGalleryMetadata = {
  title: 'City-life',
  quote: 'A city is a place where there is no need to wait for next week to get the answer to a question, to taste the food of any country, to find new voices to listen to and familiar ones to listen to again.',
  author: '– Margaret Mead',
  theme: {
    background: 'rgb(133, 203, 231)',
    font: 'rgb(0, 0, 0)',
    hover: 'rgb(255, 255, 255)',
    progress: 'rgb(133, 203, 231)',
    scroll: 'rgb(133, 203, 231)',
    logo: 'rgb(255, 255, 255)',
    variants: loadVariantsForLogo('255, 255, 255')
  },
  photos: [
    { title: 'Photo 1', aspectRatio: 'vertical'},
    { title: 'Photo 2', aspectRatio: 'vertical'},
    { title: 'Photo 3', aspectRatio: 'horizontal'}
  ]
};

export const about: ContentGalleryMetadata = {
  title: 'About',
  description: 'Passionate for nature and architecture, I traveled to different part of the world to capture moments, make them intense and memorable to everyone.',
  author: '– Julian.',
  theme: {
    background: 'rgb(0, 0, 0)',
    font: 'rgb(162, 179, 204)',
    hover: 'rgb(255, 255, 255)',
    logo: 'rgb(162, 179, 204)',
    variants: loadVariantsForLogo('162, 179, 204')
  },
  photos: [
    { title: 'Photo 1' }
  ]
};

export const home: HomeMetadata = {
  theme: {
    background: 'rgb(0, 0, 0)',
    font: 'rgb(255, 255, 255)',
    hover: 'rgb(255, 255, 255)',
    logo: 'rgb(157, 180, 201)',
    variants: loadVariantsForLogo('157, 180, 201')
  },
  links: [
    {name: 'Store (Soon)', path: '/store'}
  ],
  photos: [
    { title: 'Photo 1' },
    { title: 'Photo 1' },
    { title: 'Photo 1' },
    { title: 'Photo 1' },
    { title: 'Photo 1' },
    { title: 'Photo 1' },
  ]
};