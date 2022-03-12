import styled, { css } from "styled-components";

export const FullWidth = css`
  width: 100vw;
  max-width: 100%;
`;

export const FullHeight = css`
  height: 100vh;
  max-height: 100%;
`;

export const FullPage = css`
  ${FullWidth}
  ${FullHeight}
`;

export const Container = styled.div.attrs({
  className: "Container"
})`
  ${FullPage}
  min-height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;
