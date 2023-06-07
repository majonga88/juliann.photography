import { createGlobalStyle } from 'styled-components';

interface Props {
  color?: string;
}

const StyledScrollbar = createGlobalStyle<Props>`
::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background: var(--background);
    -webkit-border-radius: 1ex;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${(props: Props) => props.color || 'var(--accent)'};
    -webkit-border-radius: 1ex;
  }
  
  ::-webkit-scrollbar-corner {
    background: ${(props: Props) => props.color || '#fff3'};
  }
`;

export default StyledScrollbar;
