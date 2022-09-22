import { css } from "styled-components";
import theme from "./defaultTheme";

export const detectValue = value => {
  if (typeof value !== "number") return value;

  if (value > 1) return `${value}px`;

  return `${value * 100}%`;
};

const paddingUtil = css`
  ${({ padding }) =>
    theme.spacings[padding] &&
    `padding: ${theme.spacings[padding]} !important;`};
  ${({ paddingVertical }) =>
    theme.spacings[paddingVertical] &&
    `padding-top: ${theme.spacings[paddingVertical]} !important; padding-bottom: ${theme.spacings[paddingVertical]} !important;`};
  ${({ paddingHorizontal }) =>
    theme.spacings[paddingHorizontal] &&
    `padding-left: ${theme.spacings[paddingHorizontal]} !important; padding-right: ${theme.spacings[paddingHorizontal]} !important;`};
  ${({ paddingLeft }) =>
    theme.spacings[paddingLeft] &&
    `padding-left: ${theme.spacings[paddingLeft]} !important;`};
  ${({ paddingRight }) =>
    theme.spacings[paddingRight] &&
    `padding-right: ${theme.spacings[paddingRight]} !important;`};
  ${({ paddingTop }) =>
    theme.spacings[paddingTop] &&
    `padding-top: ${theme.spacings[paddingTop]} !important;`};
  ${({ paddingBottom }) =>
    theme.spacings[paddingBottom] &&
    `padding-bottom: ${theme.spacings[paddingBottom]} !important;`};
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft};`};
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight};`};
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop};`};
  ${({ paddingBottom }) =>
    paddingBottom && `padding-bottom: ${paddingBottom};`};
`;

const marginUtil = css`
  ${({ margin }) =>
    theme.spacings[margin] && `margin: ${theme.spacings[margin]} !important;`};
  ${({ marginVertical }) =>
    theme.spacings[marginVertical] &&
    `margin-top: ${theme.spacings[marginVertical]} !important; margin-bottom: ${theme.spacings[marginVertical]} !important;`};
  ${({ marginHorizontal }) =>
    theme.spacings[marginHorizontal] &&
    `margin-left: ${theme.spacings[marginHorizontal]} !important; margin-right: ${theme.spacings[marginHorizontal]} !important;`};
  ${({ marginLeft }) =>
    theme.spacings[marginLeft] &&
    `margin-left: ${theme.spacings[marginLeft]} !important;`};
  ${({ marginRight }) =>
    theme.spacings[marginRight] &&
    `margin-right: ${theme.spacings[marginRight]} !important;`};
  ${({ marginTop }) =>
    theme.spacings[marginTop] &&
    `margin-top: ${theme.spacings[marginTop]} !important;`};
  ${({ marginBottom }) =>
    theme.spacings[marginBottom] &&
    `margin-bottom: ${theme.spacings[marginBottom]} !important;`};
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`};
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`};
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`};
`;

const flexUtil = css`
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`};
  ${({ direction }) => direction && `flex-direction: ${direction};`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`};
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`};
  ${({ flex }) => flex && flex !== true && `flex: ${flex}`};
  ${({ flexGrow }) => flexGrow && `flex-grow: ${flexGrow}`};
`;

const heightUtil = css`
  ${({ height }) =>
    height &&
    `
     height: ${detectValue(height)};
  `}
  ${({ maxHeight }) => maxHeight && `max-height: ${detectValue(maxHeight)}`}
  ${({ minHeight }) => minHeight && `min-height: ${detectValue(minHeight)}`}
`;

const widthUtil = css`
  ${({ width }) =>
    width &&
    `
    flex: 0 0 ${detectValue(width)};
    max-width: ${detectValue(width)};
  `};
  ${({ fluid }) => fluid && "width: 100% !important"};
  ${({ maxWidth }) => maxWidth && `max-width: ${detectValue(maxWidth)}`}
  ${({ minWidth }) => minWidth && `min-width: ${detectValue(minWidth)}`}
`;

const displayUtil = css`
  ${({ inlineBlock }) => inlineBlock && "display: inline-block"};
  ${({ displayNone }) => displayNone && "display: none !important"};
  ${({ inlineFlex }) => inlineFlex && "display: inline-flex"};
  ${({ inline }) => inline && "display: inline"};
  ${({ block }) => block && "display: block; width: 100%"};
  ${({ flex }) => flex === true && "display: flex"};
`;

const backgroundUtil = css`
  ${({ backgroundColor }) =>
    theme.colors[backgroundColor] &&
    `background-color: ${theme.colors[backgroundColor]}`};
`;

const positionUtil = css`
  ${({ fixedTop }) => fixedTop && "position: fixed; top: 0"};
  ${({ relative }) => relative && "position: relative !important"};
  ${({ absolute }) => absolute && "position: absolute !important"};
`;

const interactionUtil = css`
  ${({ clickable }) => clickable && "cursor: pointer"};
  ${({ move }) => move && "cursor: move"}
`;

const textUtil = css`
  ${({ ellipsed }) =>
    ellipsed &&
    `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  ${({ textColor }) =>
    theme.colors[textColor] && `color: ${theme.colors[textColor]} !important`}
  ${({ textSize }) =>
    theme.textSizes[textSize] &&
    `font-size: ${theme.textSizes[textSize]} !important`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign} !important`}
  ${({ capitalize }) => capitalize && "text-transform: capitalize"}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize} !important`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight} !important`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight} !important`}
`;

const stateUtil = css`
  ${({ disabled }) =>
    disabled &&
    `
    opacity: .5;
  `};
`;

const borderUtil = css`
  ${({ borderBottom }) =>
    theme.borders[borderBottom] &&
    `border-bottom: 1px solid ${theme.borders[borderBottom]}`};
  ${({ borderTop }) =>
    theme.borders[borderTop] &&
    `border-top: 1px solid ${theme.borders[borderTop]}`};
  ${({ borderLeft }) =>
    theme.borders[borderLeft] &&
    `border-left: 1px solid ${theme.borders[borderLeft]}`};
  ${({ borderRight }) =>
    theme.borders[borderRight] &&
    `border-right: 1px solid ${theme.borders[borderRight]}`};
`;

export {
  paddingUtil as padding,
  marginUtil as margin,
  flexUtil as flex,
  widthUtil as width,
  heightUtil as height,
  displayUtil as display,
  backgroundUtil as background,
  borderUtil as border,
  positionUtil as position,
  interactionUtil as interaction,
  textUtil as text,
  stateUtil as state,
};
