import styled from "styled-components";
import { display, margin, padding, text } from "../../styled/utils";
import theme from "../../styled/defaultTheme";

const Error = styled.div`
  ${display};
  ${margin};
  ${padding};
  ${text};
  margin-top: ${({ marginTop }) => marginTop || theme.spacings.xs};
  padding-left: ${theme.spacings.sm};
  font-size: ${theme.textSizes.sm};
  color: ${theme.colors.danger};
  ${({ absolute }) =>
    absolute &&
    `
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
  `}
`;

export default Error;
