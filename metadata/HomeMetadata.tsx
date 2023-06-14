import { PhotoMetadata } from "./PhotoMetadata";
import { ThemeProps } from "./ThemeMetadata";

export interface Link {
  name: string;
  path: string;
}

export interface HomeMetadata {
  links: Array<Link>;
  theme: ThemeProps;
  tiles: PhotoMetadata[];
}
