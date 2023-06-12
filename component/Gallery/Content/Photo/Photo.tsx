"use client"

import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef, forwardRef, useCallback} from "react";
import { useMeasure } from 'react-use';

import { Box, Image as ChakraImage } from '@chakra-ui/react'

const Image = forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref}>
    <ChakraImage {...props} />
  </div>
));

interface Props {
  alt: string;
  category: string;
  index: number;
  title: string;
  titleFontColor: string;
  hideTitleNumber: boolean;
  aspectRatio?: string;
}

export function Photo({ alt, category, index, title, titleFontColor, hideTitleNumber, aspectRatio }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useViewportScroll();

  const [measureRef, bounds] = useMeasure<HTMLDivElement>();  // add this

  const setRefs = useCallback((node: HTMLDivElement) => {
    (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    if (typeof measureRef === 'function') {
      measureRef(node);
    }
  }, []);

  // Create an offset value based on the index of the element
  const offset = index * 0.02;

  // Get image height in pixels
  const imageHeight = bounds.height ?? 0; // Use a default value (0) if bounds.height is undefined

  // Apply the offset to the scrollYProgress value, making the title move downwards as the page scrolls up, and stopping when it reaches the top
  const y = useTransform(scrollYProgress, [0, 1], [imageHeight, 0]);

  // Calculate the dynamic height based on the aspect ratio
  const dynamicHeight = aspectRatio === "vertical" ? "auto" : undefined;

  return (
    <Box ref={setRefs} style={{ position: 'relative', height: dynamicHeight, overflow: 'hidden', margin: '1.5em' }}>
      <Box ref={measureRef}>
        <Image src={`/${category}/${category}-${index}.jpg`} alt={alt} style={{ width: '50em', display: 'block' }}/>
      </Box>
      {!hideTitleNumber && (
        <motion.h2 
          style={{ 
            y, 
            color: titleFontColor, 
            position: "absolute",
            top: 0,
            width: '100%',
            zIndex: 10,
            background: 'rgba(0,0,0,0.5)', // for visibility, remove if not needed
          }}
        >
          {`#00${index}`}
        </motion.h2>
      )}
    </Box>
  );
}


