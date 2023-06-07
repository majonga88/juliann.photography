import { ContentGalleryMetadata } from "./metadata/ContentGalleryMetadata";

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
  description: 'Blablabla',
  quote: 'Architecture is like writing. You have to edit it over and over so it looks effortless',
  author: '- Zaha Hadid',
  theme: {
    background: 'rgb(133, 203, 231)',
    font: 'rgb(255, 255, 255)',
    hover: 'rgb(183, 94, 9)',
    progress: 'rgb(133, 203, 231)',
    scroll: 'rgb(133, 203, 231)',
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
  description: 'Blablabla',
  theme: {
    background: 'rgb(133, 203, 231)',
    font: 'rgb(255, 255, 255)',
    hover: 'rgb(183, 94, 9)',
    progress: 'rgb(133, 203, 231)',
    scroll: 'rgb(133, 203, 231)',
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
  description: 'Blablabla',
  theme: {
    background: 'rgb(133, 203, 231)',
    font: 'rgb(0, 0, 0)',
    hover: 'rgb(183, 94, 9)',
    progress: 'rgb(133, 203, 231)',
    scroll: 'rgb(133, 203, 231)',
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
  description: 'Blablabla',
  theme: {
    background: 'rgb(135, 160, 172)',
    font: 'rgb(0, 0, 0)',
    hover: 'rgb(255, 255, 255)',
    progress: 'rgb(135, 160, 172)',
    scroll: 'rgb(135, 160, 172)',
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
  description: 'Blablabla',
  theme: {
    background: 'rgb(133, 203, 231)',
    font: 'rgb(0, 0, 0)',
    hover: 'rgb(255, 255, 255)',
    progress: 'rgb(133, 203, 231)',
    scroll: 'rgb(133, 203, 231)',
    variants: loadVariantsForLogo('255, 255, 255')
  },
  photos: [
    { title: 'Photo 1' },
    { title: 'Photo 2' },
    { title: 'Photo 3' }
  ]
};

export const About: ContentGalleryMetadata = {
  title: 'About',
  description: 'Blablabla',
  theme: {
    background: 'rgb(133, 203, 231)',
    font: 'rgb(162, 179, 204)',
    hover: 'rgb(255, 255, 255)',
    variants: loadVariantsForLogo('255, 255, 255')
  },
  photos: [
    { title: 'Photo 1' },
    { title: 'Photo 2' },
    { title: 'Photo 3' }
  ]
};