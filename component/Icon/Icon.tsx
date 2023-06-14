import { ThemeProps } from "@/metadata/ThemeMetadata";
import { Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  href?: string;
  theme: ThemeProps;
  viewBox?: string;
  width?: string;
  height?: string;
  path: string;
}

export function Icon({ href, theme, viewBox, width, height, path }: Props) {
  return (
    <Link
      href={href || "/"}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <motion.div style={{ display: "inline-block" }}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          width={width}
          height={height}
        >
          <motion.path
            d={path}
            variants={theme.logo.variants}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0.8, 0.2, 0] },
            }}
            stroke={theme.logo.stroke}
            strokeWidth={0.5}
            strokeDasharray="0 1"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="100%"
            whileHover={{
              fill: theme.logo.hover,
              stroke: theme.logo.hover,
              transition: { duration: 0.3 },
            }}
          />
        </motion.svg>
      </motion.div>
    </Link>
  );
}
