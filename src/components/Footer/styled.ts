import styled from "styled-components";
import { Layout } from "antd";
import COLORS from "@/constants/colors";
import { FOOTER_HEIGHT } from "@/constants/miscellaneous";
import { FullWidth } from "@/utils/globalStyled";

export const PageFooter = styled(Layout.Footer)`
  ${FullWidth};
  height: ${FOOTER_HEIGHT}px;
  font-size: 0.5rem;
  background: ${COLORS.WHITE};
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${COLORS.DARKGREY};

  &&& {
    > p {
      padding: 0;
    }
  }
`;

export const FooterItem = styled.p`
  &&& {
    display: inline-block;
    margin: 0 5px;
    padding: 3px 0 6px;
    text-decoration: none;
    font-style: italic;
    word-spacing: 0.3em;
  }
`;
