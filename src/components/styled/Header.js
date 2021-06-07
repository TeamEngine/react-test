import styled from "styled-components";
import Box from "./Box";
import theme from "./defaultTheme";

const Header = styled(Box)`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-bottom: ${theme.spacings.md};
`;

export default Header;
