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
    isGallery ? { base: 0, md: 0, lg: 230 } : { base: "full", md: "full", lg: 360 }
  );

  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = (e: any) => {
    const target = e.target.documentElement ? e.target.documentElement : e.target;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box w={width} pos="fixed" h="full" bg={theme.color.background} {...rest}>
      <Flex mx="8" mt="8" justifyContent="space-between" h={"17vh"}>
        <Icon
          href="/"
          theme={theme}
          path={
            "M 134.07 25.74 L 134.07 41.28 L 130.59 41.28 L 130.59 26.55 Q 130.59 24.102 129.909 22.468 A 5.301 5.301 0 0 0 128.67 20.625 A 6.568 6.568 0 0 0 124.881 18.879 A 8.964 8.964 0 0 0 123.75 18.81 A 7.001 7.001 0 0 0 120.505 19.622 A 8.595 8.595 0 0 0 119.925 19.95 Q 118.08 21.09 116.895 23.07 A 8.411 8.411 0 0 0 115.715 27.204 A 10.032 10.032 0 0 0 115.71 27.51 L 115.71 41.28 L 112.29 41.28 L 112.29 16.65 L 115.71 16.65 L 115.71 21.39 Q 115.92 20.34 117.135 19.065 A 9.561 9.561 0 0 1 118.72 17.74 A 12.734 12.734 0 0 1 120.255 16.86 A 9.293 9.293 0 0 1 124.2 15.932 A 10.771 10.771 0 0 1 124.41 15.93 Q 126.75 15.93 128.97 16.935 A 8.516 8.516 0 0 1 132.424 19.815 A 10.274 10.274 0 0 1 132.63 20.115 A 8.153 8.153 0 0 1 133.721 22.653 Q 133.994 23.738 134.053 25.012 A 15.577 15.577 0 0 1 134.07 25.74 Z M 29.73 16.65 L 29.73 29.52 Q 29.73 32.777 30.813 35.019 A 8.145 8.145 0 0 0 31.635 36.375 A 6.145 6.145 0 0 0 35.47 38.73 A 9.584 9.584 0 0 0 37.38 38.91 A 9.345 9.345 0 0 0 39.656 38.65 A 6.03 6.03 0 0 0 43.14 36.375 A 8.854 8.854 0 0 0 44.543 33.447 Q 45.03 31.714 45.03 29.52 L 45.03 16.65 L 48.45 16.65 L 48.45 30.12 Q 48.45 33.57 47.16 36.255 Q 45.87 38.94 43.41 40.47 A 9.85 9.85 0 0 1 40.122 41.743 A 13.875 13.875 0 0 1 37.38 42 A 13.634 13.634 0 0 1 34.585 41.728 A 9.823 9.823 0 0 1 31.38 40.47 Q 28.92 38.94 27.63 36.255 A 12.965 12.965 0 0 1 26.492 32.401 A 16.548 16.548 0 0 1 26.34 30.12 L 26.34 16.65 L 29.73 16.65 Z M 19.32 1.68 L 19.32 29.31 A 23.384 23.384 0 0 1 19.118 32.468 Q 18.891 34.127 18.411 35.544 A 13.683 13.683 0 0 1 18.225 36.06 A 9.963 9.963 0 0 1 16.781 38.652 A 8.489 8.489 0 0 1 14.85 40.455 Q 12.77 41.864 9.618 41.988 A 15.734 15.734 0 0 1 9 42 Q 6.12 42 4.215 41.19 Q 2.31 40.38 1.275 39.39 A 16.051 16.051 0 0 1 0.834 38.952 Q 0.223 38.321 0.024 37.938 A 1.356 1.356 0 0 1 0 37.89 L 1.71 35.04 A 5.594 5.594 0 0 0 1.957 35.426 Q 2.274 35.882 2.79 36.48 Q 3.54 37.35 4.995 38.04 A 6.455 6.455 0 0 0 6.369 38.499 Q 7.412 38.73 8.73 38.73 A 9.357 9.357 0 0 0 10.472 38.578 Q 12.007 38.287 13.05 37.44 A 6.72 6.72 0 0 0 15.058 34.675 A 8.413 8.413 0 0 0 15.3 33.99 A 15 15 0 0 0 15.867 31.114 A 18.78 18.78 0 0 0 15.96 29.22 L 15.96 1.68 L 19.32 1.68 Z M 104.55 41.28 L 101.22 41.28 L 101.22 36.12 A 2.641 2.641 0 0 1 101.029 36.615 Q 100.681 37.321 99.825 38.34 Q 98.734 39.638 96.88 40.695 A 16.016 16.016 0 0 1 96.555 40.875 Q 94.47 42 91.62 42 Q 88.29 42 85.485 40.455 Q 82.68 38.91 80.985 35.985 A 12.3 12.3 0 0 1 79.549 31.991 A 16.768 16.768 0 0 1 79.29 28.98 Q 79.29 24.9 80.985 21.975 A 11.94 11.94 0 0 1 84.291 18.252 A 11.592 11.592 0 0 1 85.485 17.49 Q 88.29 15.93 91.62 15.93 A 12.836 12.836 0 0 1 93.964 16.134 A 9.313 9.313 0 0 1 96.54 16.995 A 13.598 13.598 0 0 1 98.188 17.987 Q 99.142 18.664 99.825 19.44 Q 101.04 20.82 101.19 21.75 L 101.19 16.65 L 104.55 16.65 L 104.55 41.28 Z M 59.97 0 L 59.97 41.28 L 56.49 41.28 L 56.49 0 L 59.97 0 Z M 82.68 28.98 Q 82.68 32.1 84.03 34.35 A 9.711 9.711 0 0 0 86.262 36.947 A 9.056 9.056 0 0 0 87.525 37.8 Q 89.67 39 92.04 39 A 9.448 9.448 0 0 0 94.867 38.589 A 8.305 8.305 0 0 0 96.69 37.77 A 8.616 8.616 0 0 0 99.764 34.567 A 10.309 10.309 0 0 0 99.915 34.29 A 10.046 10.046 0 0 0 100.904 31.333 A 13.545 13.545 0 0 0 101.1 28.98 A 13.322 13.322 0 0 0 100.857 26.373 A 9.935 9.935 0 0 0 99.915 23.67 A 9.076 9.076 0 0 0 97.882 21.051 A 8.526 8.526 0 0 0 96.69 20.175 A 8.554 8.554 0 0 0 92.763 18.955 A 10.467 10.467 0 0 0 92.04 18.93 Q 89.67 18.93 87.525 20.145 A 9.44 9.44 0 0 0 84.202 23.333 A 11.152 11.152 0 0 0 84.03 23.61 Q 82.68 25.86 82.68 28.98 Z M 72.3 41.28 L 68.91 41.28 L 68.91 16.65 L 72.3 16.65 L 72.3 41.28 Z M 145.467 41.66 A 3.301 3.301 0 0 0 146.97 42 A 3.99 3.99 0 0 0 147.014 42 A 3.264 3.264 0 0 0 149.37 41.01 A 3.986 3.986 0 0 0 149.401 40.979 A 3.228 3.228 0 0 0 150.36 38.64 A 4.16 4.16 0 0 0 150.36 38.595 A 3.297 3.297 0 0 0 149.37 36.21 A 3.904 3.904 0 0 0 149.339 36.179 A 3.265 3.265 0 0 0 146.97 35.22 A 3.981 3.981 0 0 0 146.915 35.22 A 3.213 3.213 0 0 0 144.585 36.21 A 3.347 3.347 0 0 0 143.885 37.237 A 3.506 3.506 0 0 0 143.61 38.64 A 3.888 3.888 0 0 0 143.61 38.662 A 3.257 3.257 0 0 0 144.585 41.01 A 3.34 3.34 0 0 0 145.467 41.66 Z M 68.829 5.919 A 2.511 2.511 0 0 0 70.65 6.66 Q 71.76 6.66 72.555 5.895 A 3.082 3.082 0 0 0 72.604 5.847 A 2.459 2.459 0 0 0 73.35 4.05 A 2.907 2.907 0 0 0 73.346 3.905 A 2.385 2.385 0 0 0 72.975 2.715 Q 72.6 2.13 71.985 1.77 Q 71.37 1.41 70.65 1.41 A 2.53 2.53 0 0 0 69.711 1.584 A 2.676 2.676 0 0 0 68.82 2.175 Q 68.04 2.94 68.04 4.05 A 3.028 3.028 0 0 0 68.04 4.084 A 2.511 2.511 0 0 0 68.805 5.895 A 3.045 3.045 0 0 0 68.829 5.919 Z"
          }
        />
        {!isGallery && (
          <CloseButton
            display={{ base: "flex", lg: "none" }}
            bg={theme.color.font}
            onClick={onClose}
          />
        )}
      </Flex>
      <Grid
        gridTemplateRows={{
          lg: "100px1fr",
        }}
        gridTemplateColumns={{
          sm: "repeat(5, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(1, 1fr)",
        }}
        gridTemplateAreas={{
          base: `'instagram twitter 500px behance flickr'`,
          md: `'instagram twitter 500px behance flickr'`,
          lg: `
        'instagram' 
        'twitter' 
        '500px' 
        'behance'
        'flickr'`,
        }}
        h="50vh"
      >
        <GridItem area={"instagram"}>
          <SocialButton
            theme={theme}
            path="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
            title="Instagram"
            src="https://www.instagram.com/j_u_l_i_a_nn_/"
            viewBox="0 0 50 50"
            width="2.5rem"
            height="2.5rem"
          />
        </GridItem>
        <GridItem area={"twitter"}>
          <SocialButton
            theme={theme}
            path="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"
            title="Twitter"
            src="https://twitter.com/J_u_l_i_a_nn_"
            viewBox="0 0 50 50"
            width="2.5rem"
            height="2.5rem"
          />
        </GridItem>
        <GridItem area={"500px"}>
          <SocialButton
            theme={theme}
            path="M5.926 15.765l.204.534c.396.935.961 1.775 1.683 2.497.721.721 1.561 1.287 2.497 1.683.969.41 1.998.617 3.058.617 1.06 0 2.089-.208 3.058-.618.936-.396 1.775-.962 2.497-1.683s1.288-1.561 1.684-2.497c.41-.969.618-1.998.618-3.058 0-1.06-.208-2.089-.618-3.058-.396-.935-.962-1.775-1.684-2.497-.721-.721-1.561-1.288-2.497-1.684-.969-.41-1.998-.617-3.058-.617-1.073 0-2.145.213-3.101.617-.763.323-2.056 1.155-2.812 1.935l-.004-6.46h10.86c.395-.004.395-.556.395-.737 0-.182 0-.733-.396-.738h-11.743c-.32 0-.518.266-.518.512v9.101c0 .293.366.505.706.578.664.142.817-.07.979-.295l.022-.03c.248-.369 1.023-1.149 1.031-1.157 1.21-1.21 2.828-1.876 4.555-1.876 1.72 0 3.333.667 4.543 1.876 1.214 1.214 1.883 2.823 1.883 4.53 0 1.713-.666 3.322-1.874 4.53-1.192 1.193-2.858 1.876-4.57 1.876-1.16 0-2.279-.309-3.238-.894l.004-5.533c0-.738.32-1.54.857-2.146.613-.692 1.458-1.073 2.379-1.073.893 0 1.726.338 2.347.954.616.611.956 1.424.956 2.291 0 1.849-1.454 3.297-3.31 3.297-.358 0-1.008-.158-1.035-.165-.375-.112-.534.409-.586.58-.202.66.101.791.164.81.597.185.989.22 1.503.22 2.62 0 4.752-2.133 4.752-4.754 0-2.601-2.13-4.716-4.749-4.716-1.283 0-2.487.49-3.393 1.38-.862.848-1.356 1.978-1.356 3.101v.028c-.004.14-.007 3.457-.008 4.545-.493-.545-.984-1.385-1.307-2.238-.126-.334-.412-.275-.802-.155-.172.052-.69.212-.576.587zm5.584-1.296c.001.159.147.299.234.382l.027.026c.149.147.291.221.422.221.109 0 .175-.051.199-.073l.879-.886.829.826c.077.086.16.13.257.132.132 0 .276-.079.428-.233.357-.365.179-.562.092-.657l-.839-.84.875-.881c.192-.208.023-.429-.146-.598-.246-.246-.482-.309-.634-.169l-.871.872-.88-.881c-.047-.044-.105-.068-.17-.068-.117 0-.256.08-.413.236-.271.271-.329.458-.188.607l.88.877-.875.877c-.071.073-.107.15-.106.23zm1.919-11.898c-1.407 0-2.904.284-4.004.76-.118.046-.188.141-.204.273-.014.125.02.29.104.505.068.174.25.637.6.503 1.125-.429 2.37-.666 3.504-.666 1.285 0 2.53.251 3.703.747.932.395 1.811.964 2.767 1.792.07.061.144.091.22.091.187 0 .365-.183.518-.354.255-.286.431-.524.179-.762-.913-.865-1.913-1.511-3.148-2.033-1.343-.568-2.77-.856-4.239-.856zm7.582 17.377c-.169-.169-.313-.269-.44-.305-.128-.037-.243-.009-.331.079l-.083.083c-.872.872-1.888 1.557-3.019 2.035-1.17.495-2.414.746-3.696.746s-2.525-.251-3.696-.746c-1.131-.478-2.146-1.163-3.019-2.035-.909-.909-1.594-1.924-2.035-3.019-.431-1.067-.572-1.87-.618-2.133l-.01-.057c-.059-.311-.345-.332-.756-.27-.17.026-.69.106-.641.48l.001.008c.138.866.381 1.714.723 2.523.549 1.299 1.336 2.466 2.337 3.467s2.168 1.788 3.467 2.337c1.346.57 2.774.859 4.247.859 1.472 0 2.901-.289 4.247-.858 1.298-.549 2.465-1.336 3.467-2.338l.087-.089c.11-.12.206-.33-.232-.767z"
            title="500px"
            src="https://500px.com/p/_julian__________"
            viewBox="0 0 25 25"
            width="2.5rem"
            height="2.5rem"
          />
        </GridItem>
        <GridItem area={"behance"}>
          <SocialButton
            theme={theme}
            path="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
            title="Behance"
            src="https://www.behance.net/majonga"
            viewBox="0 0 25 25"
            width="2.5rem"
            height="2.5rem"
          />
        </GridItem>
        <GridItem area={"flickr"}>
          <SocialButton
            theme={theme}
            path="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 16 17 C 11.59 17 8 20.59 8 25 C 8 29.41 11.59 33 16 33 C 20.41 33 24 29.41 24 25 C 24 20.59 20.41 17 16 17 z M 34 17 C 29.59 17 26 20.59 26 25 C 26 29.41 29.59 33 34 33 C 38.41 33 42 29.41 42 25 C 42 20.59 38.41 17 34 17 z"
            title="Flickr"
            src="https://www.flickr.com/photos/_julian__________/"
            viewBox="0 0 50 50"
            width="2.5rem"
            height="2.5rem"
          />
        </GridItem>
      </Grid>
      {isGallery && (
        <Box boxSize="5.5rem">
          <BackButton isBottom={isBottom}></BackButton>
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
      <Copyright logoColor={theme.logo.color} />
    </Box>
  );
}
