import styled from "styled-components";
import {
  padding,
  margin,
  width,
  height,
  display,
  background,
  border,
  flex,
  position,
  text,
  state,
  interaction,
} from "./utils";

const Box = styled.div`
  ${background};
  ${display};
  ${padding};
  ${margin};
  ${width};
  ${height};
  ${border};
  ${flex};
  ${position};
  ${text};
  ${state};
  ${interaction};

  ${({ twoLines }) =>
    twoLines &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
    white-space: normal;
  `};
`;
Box.displayName = "StyledBox";
export default Box;
