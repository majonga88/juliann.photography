import { Global, css } from '@emotion/react';

interface Props {
  color?: string;
}

const StyledScrollbar = ({ color }: Props) => (
  <Global
    styles={css`
      ::-webkit-scrollbar {
        height: 5px;
        width: 5px;
        background: var(--background);
        -webkit-border-radius: 1ex;
      }

      ::-webkit-scrollbar-thumb {
        background: ${color || 'var(--accent)'};
        -webkit-border-radius: 1ex;
      }

      ::-webkit-scrollbar-corner {
        background: ${color || '#fff3'};
      }
    `}
  />
);

export default StyledScrollbar;
