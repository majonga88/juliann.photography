"use client"

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef, forwardRef, useCallback} from "react";
import { useMeasure } from 'react-use';

import { Image as ChakraImage, useBreakpointValue } from '@chakra-ui/react'
import StyledPhotoBox from "@/styles/StyledPhoto";

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
  aspectRatio?: string;
}

function useParallax(value: MotionValue<number>, distance: string, speed: number = 1) {
  const scaledValue = useTransform(value, (v) => v * speed);
  return useTransform(scaledValue, [0, 1], ["-" + distance, distance]);
}

export function Photo({ alt, category, index, title, titleFontColor, aspectRatio }: Props) {
  const ref = useRef(null);
  const [measureRef, bounds] = useMeasure<HTMLDivElement>();
  const { scrollYProgress } = useScroll({ target: ref });

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

  // Calculate the parallax distance using the image's height
  const parallaxDistance = `${imageHeight - offset}px`;

  const speed = useBreakpointValue({ base: 0.5, sm: 0.4, md: 0.3, lg: 0.2, xl: 0.1 }) || 0.3;
  const fontSize = useBreakpointValue({ base: "2em", sm: "2.25em", md: "2.5em", lg: "2.75em", xl: "3em" });

  // Apply the offset to the scrollYProgress value
  const y = useParallax(scrollYProgress, parallaxDistance, speed);

  return (
    <section>
      <StyledPhotoBox ref={setRefs}>
        <Image src={`/${category}/${category}-${index}.jpg`} alt={alt}/>
      </StyledPhotoBox>
      <motion.h2 
        style={{ 
          y, 
          color: titleFontColor, 
          position: "absolute", 
          bottom: `${imageHeight}px`,
          fontSize: fontSize
        }}
      >
        {`#00${index}`}
      </motion.h2>
    </section>
  );
}


