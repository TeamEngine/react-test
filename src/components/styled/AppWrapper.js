import styled from "styled-components";
import theme from "./defaultTheme";

const AppWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: ${theme.spacings.md};
  padding-bottom: ${theme.spacings.md};
  display: block;
  background-color: #ffffff;
  width: 600px;
  border-radius: 10px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export default AppWrapper;
