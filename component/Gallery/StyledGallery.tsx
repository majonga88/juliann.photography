import styled from "@emotion/styled";
import { Container as ChakraContainer } from "@chakra-ui/react";

const StyledGallery = styled(ChakraContainer)({
  "@media (min-width: 0px)": {
    paddingTop: "2em",
    maxWidth: "40em",
  },
  "@media (min-width: 480px)": {
    paddingTop: "4em",
    maxWidth: "40em",
  },
  "@media (min-width: 768px)": {
    paddingTop: "6em",
    maxWidth: "60em",
  },
  "@media (min-width: 992px)": {
    paddingTop: "9em",
    maxWidth: "80em",
  },
});

export default StyledGallery;
