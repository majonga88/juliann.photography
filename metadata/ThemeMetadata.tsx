import { Variants } from "framer-motion";

export interface ThemeProps {
  color: ColorProps;
  logo: LogoProps;
}

interface ColorProps {
  background: string;
  font: string;
  hover: string;
  scroll?: string;
  progress: string;
}

interface LogoProps {
  color: string;
  stroke: string;
  hover: string;
  variants: VariantsProps;
}

interface VariantsProps extends Variants {
  hidden: VariantProps;
  visible: VariantProps;
}

interface VariantProps {
  opacity: number;
  pathLength: number;
  fill: string;
}
