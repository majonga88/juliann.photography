import { createGlobalStyle } from 'styled-components';

interface ScrollbarProps {
  scrollbarThumbColor?: string;
  scrollbarCornerColor?: string;
}

const ScrollbarStyles = createGlobalStyle<ScrollbarProps>`
::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background: var(--background);
    -webkit-border-radius: 1ex;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${(props: ScrollbarProps) => props.scrollbarThumbColor || 'var(--accent)'};
    -webkit-border-radius: 1ex;
  }
  
  ::-webkit-scrollbar-corner {
    background: ${(props: ScrollbarProps) => props.scrollbarCornerColor || '#fff3'};
  }
`;

export default ScrollbarStyles;
