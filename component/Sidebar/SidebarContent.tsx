import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Copyright } from "../Icon/Copyright";
import { NavItem } from "./NavItem/NavItem";
import { Icon } from "../Icon/Icon";
import { ThemeProps } from "@/metadata/ThemeMetadata";
import BackButton from "../Gallery/BackButton";
import SocialButton from "../Gallery/SocialButton";
import { useEffect, useState } from "react";

interface Props extends BoxProps {
  onClose: () => void;
  isGallery: boolean;
  theme: ThemeProps;
  links?: Array<LinkProps>;
}

interface LinkProps {
  name: string;
  path: string;
}

export function SidebarContent({
  onClose,
  isGallery,
  theme,
  links,
  ...rest
}: Props) {

  const width = useBreakpointValue(
    isGallery ? { base: 0, lg: 290 } : { base: "full", lg: 360 }
  );

  const viewBoxLogo = useBreakpointValue({
    base: "0 0 300 150"
});

const rowHeight = useBreakpointValue({
  base: "80px",
});

  return (
    <Box w={width} pos="fixed" h="full" bg={theme.color.background} {...rest}>
      <Box mx="8" mt="8" justifyContent="space-between" h={"17vh"}>
        <Icon
          href="/"
          theme={theme}
          path={
            "M 186.8 34.56 L 186.8 55.04 L 179.76 55.04 L 179.76 35.92 A 16.569 16.569 0 0 0 179.58 33.385 Q 179.119 30.416 177.48 28.82 A 7.734 7.734 0 0 0 172.904 26.678 A 10.577 10.577 0 0 0 171.6 26.6 A 8.391 8.391 0 0 0 167.608 27.626 A 10.193 10.193 0 0 0 167.06 27.94 A 10.564 10.564 0 0 0 163.658 31.331 A 12.381 12.381 0 0 0 163.48 31.62 Q 162.08 33.96 162.08 36.92 L 162.08 55.04 L 155.12 55.04 L 155.12 22.2 L 162.08 22.2 L 162.08 28.04 A 4.418 4.418 0 0 1 162.512 27.009 Q 163.027 26.092 164.04 25.08 A 12.078 12.078 0 0 1 166.118 23.432 A 16.07 16.07 0 0 1 168.12 22.36 A 12.827 12.827 0 0 1 173.3 21.241 A 14.713 14.713 0 0 1 173.48 21.24 Q 176.72 21.24 179.78 22.6 A 11.722 11.722 0 0 1 184.695 26.718 A 13.999 13.999 0 0 1 184.82 26.9 Q 186.552 29.473 186.769 33.408 A 20.973 20.973 0 0 1 186.8 34.56 Z M 42.6 22.2 L 42.6 38.76 Q 42.6 42.65 43.862 45.347 A 9.964 9.964 0 0 0 44.82 46.98 A 7.159 7.159 0 0 0 49.333 49.818 A 11.307 11.307 0 0 0 51.64 50.04 A 11.111 11.111 0 0 0 54.302 49.741 A 7.035 7.035 0 0 0 58.48 46.98 A 10.841 10.841 0 0 0 60.095 43.523 Q 60.497 42.078 60.623 40.368 A 21.944 21.944 0 0 0 60.68 38.76 L 60.68 22.2 L 67.56 22.2 L 67.56 39.72 Q 67.56 44.52 65.7 48.2 Q 63.84 51.88 60.3 53.94 Q 56.857 55.943 51.92 55.998 A 25.13 25.13 0 0 1 51.64 56 A 20.973 20.973 0 0 1 47.767 55.66 Q 45.29 55.195 43.289 54.092 A 13.188 13.188 0 0 1 43.02 53.94 Q 39.48 51.88 37.62 48.2 A 17.134 17.134 0 0 1 35.98 42.888 A 22.091 22.091 0 0 1 35.76 39.72 L 35.76 22.2 L 42.6 22.2 Z M 26.88 2.24 L 26.88 39 Q 26.88 43.803 25.523 47.381 A 16.772 16.772 0 0 1 25.24 48.08 Q 23.6 51.88 20.34 53.94 A 12.827 12.827 0 0 1 16.173 55.606 Q 14.478 55.974 12.52 55.998 A 22.422 22.422 0 0 1 12.24 56 Q 8.44 56 5.84 54.96 A 20.482 20.482 0 0 1 4.19 54.219 Q 3.377 53.807 2.722 53.365 A 9.304 9.304 0 0 1 1.8 52.66 Q 0.44 51.47 0.044 50.869 A 1.905 1.905 0 0 1 0 50.8 L 3 44.92 A 7.199 7.199 0 0 0 3.326 45.403 Q 3.74 45.971 4.4 46.7 A 6.593 6.593 0 0 0 5.464 47.635 Q 5.99 48.009 6.636 48.343 A 12.172 12.172 0 0 0 7.08 48.56 Q 8.8 49.36 11.4 49.36 Q 13.925 49.36 15.657 48.406 A 6.222 6.222 0 0 0 16.38 47.94 Q 18.28 46.52 19.16 44 A 15.143 15.143 0 0 0 19.84 41.143 Q 20.04 39.742 20.04 38.16 L 20.04 2.24 L 26.88 2.24 Z M 145.8 55.04 L 139 55.04 L 139 48.64 A 3.587 3.587 0 0 1 138.734 49.244 Q 138.411 49.84 137.791 50.622 A 21.162 21.162 0 0 1 137.14 51.4 A 12.083 12.083 0 0 1 135.385 53.025 Q 134.513 53.694 133.444 54.302 A 21.12 21.12 0 0 1 132.94 54.58 A 11.842 11.842 0 0 1 129.273 55.796 A 15.841 15.841 0 0 1 126.68 56 A 16.565 16.565 0 0 1 120.708 54.938 A 15.575 15.575 0 0 1 118.42 53.84 Q 114.72 51.68 112.54 47.78 A 16.95 16.95 0 0 1 110.618 42.084 A 22.222 22.222 0 0 1 110.36 38.64 A 21.315 21.315 0 0 1 110.839 34.022 A 16.546 16.546 0 0 1 112.54 29.5 Q 114.72 25.6 118.42 23.42 A 15.874 15.874 0 0 1 126.254 21.245 A 18.829 18.829 0 0 1 126.68 21.24 A 16.665 16.665 0 0 1 129.713 21.503 A 12.183 12.183 0 0 1 132.86 22.52 A 17.599 17.599 0 0 1 134.953 23.717 Q 136.019 24.433 136.833 25.246 A 10.516 10.516 0 0 1 137.06 25.48 A 13.703 13.703 0 0 1 137.827 26.363 Q 138.717 27.488 138.92 28.36 L 138.92 22.2 L 145.8 22.2 L 145.8 55.04 Z M 84.24 0 L 84.24 55.04 L 77.24 55.04 L 77.24 0 L 84.24 0 Z M 101.96 55.04 L 95 55.04 L 95 22.2 L 101.96 22.2 L 101.96 55.04 Z M 117.24 38.64 A 13.644 13.644 0 0 0 117.58 41.754 A 10.549 10.549 0 0 0 118.8 44.8 A 11.233 11.233 0 0 0 121.883 48.194 A 10.874 10.874 0 0 0 122.86 48.82 Q 125.36 50.24 128.2 50.24 A 10.98 10.98 0 0 0 131.626 49.719 A 9.827 9.827 0 0 0 133.64 48.8 A 10.203 10.203 0 0 0 137.329 44.943 A 12.137 12.137 0 0 0 137.44 44.74 A 11.738 11.738 0 0 0 138.675 40.931 A 15.323 15.323 0 0 0 138.84 38.64 A 14.642 14.642 0 0 0 138.512 35.471 A 11.423 11.423 0 0 0 137.44 32.54 Q 136.04 29.92 133.64 28.46 A 10.094 10.094 0 0 0 128.857 27.017 A 12.242 12.242 0 0 0 128.2 27 Q 125.36 27 122.86 28.44 Q 120.36 29.88 118.8 32.48 A 10.797 10.797 0 0 0 117.424 36.306 A 14.242 14.242 0 0 0 117.24 38.64 Z M 199.63 54.469 A 5.149 5.149 0 0 0 203.36 56 Q 205.64 56 207.2 54.42 A 6.35 6.35 0 0 0 207.224 54.395 A 5.187 5.187 0 0 0 208.76 50.64 Q 208.76 48.36 207.2 46.78 Q 205.64 45.2 203.36 45.2 A 5.351 5.351 0 0 0 201.675 45.461 A 5.284 5.284 0 0 0 199.58 46.78 A 5.396 5.396 0 0 0 198.514 48.267 A 5.421 5.421 0 0 0 198 50.64 A 5.351 5.351 0 0 0 198.261 52.325 A 5.284 5.284 0 0 0 199.58 54.42 A 6.377 6.377 0 0 0 199.63 54.469 Z M 95.382 9.662 A 4.384 4.384 0 0 0 98.56 10.96 Q 100.48 10.96 101.84 9.62 A 5.395 5.395 0 0 0 101.893 9.567 A 4.35 4.35 0 0 0 103.2 6.4 Q 103.2 5.12 102.56 4.1 Q 101.92 3.08 100.86 2.44 Q 99.8 1.8 98.56 1.8 A 4.511 4.511 0 0 0 97.07 2.042 A 4.479 4.479 0 0 0 95.34 3.16 Q 94 4.52 94 6.4 A 5.239 5.239 0 0 0 94 6.459 A 4.386 4.386 0 0 0 95.34 9.62 A 5.363 5.363 0 0 0 95.382 9.662 Z"
          }
          viewBox={viewBoxLogo}
        />
        {!isGallery && (
          <CloseButton
            display={{ base: "flex", lg: "none" }}
            bg={theme.color.font}
            onClick={onClose}
          />
        )}
      </Box>
      <Grid
        gridTemplateRows={{
          base: `repeat(5, ${rowHeight})`,
        }}
        gridTemplateColumns={{
          base: "repeat(1, 5fr)",
        }}
        gridTemplateAreas={{
          base: `
          'instagram' 
          'twitter' 
          '500px' 
          'behance'
          'flickr'`
        }}
        margin="1rem"
      >
        <GridItem area={"instagram"}>
          <SocialButton
            theme={theme}
            path="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
            title="Instagram"
            src="https://www.instagram.com/j_u_l_i_a_nn_/"
            viewBox="0 0 50 50"
          />
        </GridItem>
        <GridItem area={"twitter"}>
          <SocialButton
            theme={theme}
            path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            title="Twitter"
            src="https://twitter.com/J_u_l_i_a_nn_"
            viewBox="0 0 25 25"
          />
        </GridItem>
        <GridItem area={"500px"}>
          <SocialButton
            theme={theme}
            path="M5.926 15.765l.204.534c.396.935.961 1.775 1.683 2.497.721.721 1.561 1.287 2.497 1.683.969.41 1.998.617 3.058.617 1.06 0 2.089-.208 3.058-.618.936-.396 1.775-.962 2.497-1.683s1.288-1.561 1.684-2.497c.41-.969.618-1.998.618-3.058 0-1.06-.208-2.089-.618-3.058-.396-.935-.962-1.775-1.684-2.497-.721-.721-1.561-1.288-2.497-1.684-.969-.41-1.998-.617-3.058-.617-1.073 0-2.145.213-3.101.617-.763.323-2.056 1.155-2.812 1.935l-.004-6.46h10.86c.395-.004.395-.556.395-.737 0-.182 0-.733-.396-.738h-11.743c-.32 0-.518.266-.518.512v9.101c0 .293.366.505.706.578.664.142.817-.07.979-.295l.022-.03c.248-.369 1.023-1.149 1.031-1.157 1.21-1.21 2.828-1.876 4.555-1.876 1.72 0 3.333.667 4.543 1.876 1.214 1.214 1.883 2.823 1.883 4.53 0 1.713-.666 3.322-1.874 4.53-1.192 1.193-2.858 1.876-4.57 1.876-1.16 0-2.279-.309-3.238-.894l.004-5.533c0-.738.32-1.54.857-2.146.613-.692 1.458-1.073 2.379-1.073.893 0 1.726.338 2.347.954.616.611.956 1.424.956 2.291 0 1.849-1.454 3.297-3.31 3.297-.358 0-1.008-.158-1.035-.165-.375-.112-.534.409-.586.58-.202.66.101.791.164.81.597.185.989.22 1.503.22 2.62 0 4.752-2.133 4.752-4.754 0-2.601-2.13-4.716-4.749-4.716-1.283 0-2.487.49-3.393 1.38-.862.848-1.356 1.978-1.356 3.101v.028c-.004.14-.007 3.457-.008 4.545-.493-.545-.984-1.385-1.307-2.238-.126-.334-.412-.275-.802-.155-.172.052-.69.212-.576.587zm5.584-1.296c.001.159.147.299.234.382l.027.026c.149.147.291.221.422.221.109 0 .175-.051.199-.073l.879-.886.829.826c.077.086.16.13.257.132.132 0 .276-.079.428-.233.357-.365.179-.562.092-.657l-.839-.84.875-.881c.192-.208.023-.429-.146-.598-.246-.246-.482-.309-.634-.169l-.871.872-.88-.881c-.047-.044-.105-.068-.17-.068-.117 0-.256.08-.413.236-.271.271-.329.458-.188.607l.88.877-.875.877c-.071.073-.107.15-.106.23zm1.919-11.898c-1.407 0-2.904.284-4.004.76-.118.046-.188.141-.204.273-.014.125.02.29.104.505.068.174.25.637.6.503 1.125-.429 2.37-.666 3.504-.666 1.285 0 2.53.251 3.703.747.932.395 1.811.964 2.767 1.792.07.061.144.091.22.091.187 0 .365-.183.518-.354.255-.286.431-.524.179-.762-.913-.865-1.913-1.511-3.148-2.033-1.343-.568-2.77-.856-4.239-.856zm7.582 17.377c-.169-.169-.313-.269-.44-.305-.128-.037-.243-.009-.331.079l-.083.083c-.872.872-1.888 1.557-3.019 2.035-1.17.495-2.414.746-3.696.746s-2.525-.251-3.696-.746c-1.131-.478-2.146-1.163-3.019-2.035-.909-.909-1.594-1.924-2.035-3.019-.431-1.067-.572-1.87-.618-2.133l-.01-.057c-.059-.311-.345-.332-.756-.27-.17.026-.69.106-.641.48l.001.008c.138.866.381 1.714.723 2.523.549 1.299 1.336 2.466 2.337 3.467s2.168 1.788 3.467 2.337c1.346.57 2.774.859 4.247.859 1.472 0 2.901-.289 4.247-.858 1.298-.549 2.465-1.336 3.467-2.338l.087-.089c.11-.12.206-.33-.232-.767z"
            title="500px"
            src="https://500px.com/p/_julian__________"
            viewBox="0 0 25 25"
          />
        </GridItem>
        <GridItem area={"behance"}>
          <SocialButton
            theme={theme}
            path="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
            title="Behance"
            src="https://www.behance.net/jolyon-gallery"
            viewBox="0 0 25 25"
          />
        </GridItem>
        <GridItem area={"flickr"}>
          <SocialButton
            theme={theme}
            path="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 16 17 C 11.59 17 8 20.59 8 25 C 8 29.41 11.59 33 16 33 C 20.41 33 24 29.41 24 25 C 24 20.59 20.41 17 16 17 z M 34 17 C 29.59 17 26 20.59 26 25 C 26 29.41 29.59 33 34 33 C 38.41 33 42 29.41 42 25 C 42 20.59 38.41 17 34 17 z"
            title="Flickr"
            src="https://www.flickr.com/photos/_julian__________/"
            viewBox="0 0 50 50"
          />
        </GridItem>

      </Grid>
      <Box position="fixed" height="5vh" width="20%">
        <Copyright logoColor={theme.logo.color} />
      </Box>
      {isGallery && (
        <Box boxSize="5.5rem">
          <BackButton></BackButton>
        </Box>
      )}

      {!isGallery &&
        links &&
        links.map((link) => (
          <NavItem
            key={link.name}
            path={link.path}
            color={theme.color.font}
            hoverColor={theme.color.hover}
          >
          </NavItem>
        ))}
    </Box>
  );
}
