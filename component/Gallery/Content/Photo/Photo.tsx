"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef, forwardRef, useCallback } from "react";
import { useMeasure } from "react-use";

import { Box, Image as ChakraImage } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Image = forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref}>
    <ChakraImage {...props} />
  </div>
));

Image.displayName = "Image";

interface Props {
  alt?: string;
  category: string;
  index: number;
  title?: string;
  titleFontColor: string;
  hideTitleNumber: boolean;
  aspectRatio?: string;
}

const StyledHeader = styled(motion.h2)({
  fontSize: "2rem",
  left: "50vw",
  top: "70vh",
  fontWeight: "700",
  letterSpacing: "-3px",
  lineHeight: "1.8",
  position: "absolute",
});

export function Photo({
  alt,
  category,
  index,
  titleFontColor,
  hideTitleNumber,
  aspectRatio,
}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const [measureRef, bounds] = useMeasure<HTMLDivElement>(); // add this

  const setRefs = useCallback(
    (node: HTMLDivElement) => {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      if (typeof measureRef === "function") {
        measureRef(node);
      }
    },
    [measureRef]
  );

  // Create an offset value based on the index of the element
  const offset: number = index * 0.02;

  // Get image height in pixels
  const imageHeight: number = bounds.height ?? 0; // Use a default value (0) if bounds.height is undefined

  // Apply the offset to the scrollYProgress value, making the title move downwards as the page scrolls up, and stopping when it reaches the top
  const y: MotionValue = useTransform(
    scrollYProgress,
    [0, 1],
    [imageHeight, 0]
  );

  // Calculate the dynamic height based on the aspect ratio
  const dynamicHeight: string | undefined =
    aspectRatio === "vertical" ? "auto" : undefined;

  return (
    <Box
      ref={setRefs}
      style={{
        position: "relative",
        height: dynamicHeight,
        overflow: "hidden",
        margin: "1.5em",
      }}
    >
      <Box ref={measureRef}>
        <Image
          src={`/${category}/${category}-${index}.jpg`}
          alt={alt}
          style={{ width: "50em", display: "block" }}
        />
      </Box>
      {!hideTitleNumber && (
        <StyledHeader
          style={{
            y,
            color: titleFontColor,
            position: "absolute",
            top: 0,
            zIndex: 99999,
            paddingRight: "1%",
            paddingLeft: "1%",
            borderRadius: "10%",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          {`#00${index}`}
        </StyledHeader>
      )}
    </Box>
  );
}
