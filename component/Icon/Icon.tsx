import { Link } from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";

interface Props {
  href?: string, 
  logoVariantColor: Variants,
  logoColor: string,
  viewBox?: string,
  width?: string,
  height?: string,
  path: string
}

export function Icon({ href, logoVariantColor, logoColor, viewBox, width, height, path }: Props) {
  return (
    <Link href={href || '/'} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        width={width}
        height={height}
      >
        <motion.path
          d={path}
          variants={logoVariantColor}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0.8, 0.2, 0] }
          }}
          stroke={logoColor}
          strokeWidth={0.5}
          strokeDasharray="0 1"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="100%"
        />
      </motion.svg>
    </Link>
  )
}