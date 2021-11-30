import {globalStyles, handleCheckObj} from '@components/shared';
import {COLORS, FONTS} from '@themes';
import {hs, vs} from '@utils/responsive';
import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Block = ({
  // MARGIN AND PADDING
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginHorizontal,
  marginVertical,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingHorizontal,
  paddingVertical,

  // COLOR AND BACKGROUND COLOR
  color,
  backgroundColor,
  opacity,

  // TYPOGRAPHY
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign,
  fontStyle,
  textTransform,
  textDecoration,

  // LAYOUT, WIDTH AND HEIGHT
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  display,
  boxSize, // WIDTH, HEIGHT
  circle, // WIDTH, HEIGHT, RADIUS
  verticalAlign,
  overflow,
  overflowX,
  overflowY,

  // FLEX BOX
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,

  // BORDERS
  border, // [borderWidth, borderStyle, borderColor]
  borderWidth,
  borderStyle, // solid, dotted, dashed
  borderColor,
  borderTop, // [borderWidth, borderStyle, borderColor]
  borderTopWidth,
  borderTopStyle,
  borderTopColor,
  borderRight, // [borderWidth, borderStyle, borderColor]
  borderRightWidth,
  borderRightStyle,
  borderRightColor,
  borderBottom, // [borderWidth, borderStyle, borderColor]
  borderBottomWidth,
  borderBottomStyle,
  borderBottomColor,
  borderLeft, // [borderWidth, borderStyle, borderColor]
  borderLeftWidth,
  borderLeftStyle,
  borderLeftColor,

  // BORDERS RADIUS
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  borderTopRadius,
  borderRightRadius,
  borderBottomRadius,
  borderLeftRadius,

  // POSITION
  position,
  zIndex,
  top,
  right,
  bottom,
  left,

  // SAFE AREA
  safeAreaTop,
  safeAreaRight,
  safeAreaBottom,
  safeAreaLeft,

  // SHADOW
  shadow1,
  shadow2,
  shadow3,

  // CUSTOM STYLE
  rowWrap,
  rowCenter,
  rowBetween,
  absoluteFill,

  // OTHERS
  onLayout,
  style,
  children,
  ...rest
}) => {
  const insets = useSafeAreaInsets();

  const customStyles = [
    // MARGIN AND PADDING
    handleCheckObj({margin}),
    handleCheckObj({marginTop}),
    handleCheckObj({marginRight}),
    handleCheckObj({marginBottom}),
    handleCheckObj({marginLeft}),
    handleCheckObj({marginHorizontal}),
    handleCheckObj({marginVertical}),
    handleCheckObj({padding}),
    handleCheckObj({paddingTop}),
    handleCheckObj({paddingRight}),
    handleCheckObj({paddingBottom}),
    handleCheckObj({paddingLeft}),
    handleCheckObj({paddingHorizontal}),
    handleCheckObj({paddingVertical}),

    // COLOR AND BACKGROUND COLOR
    handleCheckObj({color: COLORS[color] || color}),
    handleCheckObj({
      backgroundColor: COLORS[backgroundColor] || backgroundColor,
    }),
    handleCheckObj({opacity}),

    // TYPOGRAPHY
    handleCheckObj({fontFamily: FONTS[fontFamily] || fontFamily}),
    handleCheckObj({fontSize: hs(fontSize)}),
    handleCheckObj({fontWeight: fontWeight}),
    handleCheckObj({lineHeight: vs(lineHeight)}),
    handleCheckObj({letterSpacing: letterSpacing}),
    handleCheckObj({textAlign: textAlign}),
    handleCheckObj({fontStyle: fontStyle}),
    handleCheckObj({textTransform}),
    handleCheckObj({textDecoration}),

    // LAYOUT, WIDTH AND HEIGHT
    handleCheckObj({width: hs(width)}),
    handleCheckObj({height: vs(height)}),
    handleCheckObj({minWidth: hs(minWidth)}),
    handleCheckObj({maxWidth: hs(maxWidth)}),
    handleCheckObj({minHeight: vs(minHeight)}),
    handleCheckObj({maxHeight: vs(maxHeight)}),
    handleCheckObj({display}),
    handleCheckObj({width: hs(boxSize), height: hs(boxSize)}),
    handleCheckObj({
      width: hs(circle),
      height: hs(circle),
      borderRadius: hs(circle / 2),
    }),
    handleCheckObj({verticalAlign}),
    handleCheckObj({overflow}),
    handleCheckObj({overflowX}),
    handleCheckObj({overflowY}),

    // FLEX BOX
    handleCheckObj({alignItems}),
    handleCheckObj({alignContent}),
    handleCheckObj({justifyItems}),
    handleCheckObj({justifyContent}),
    handleCheckObj({flexWrap}),
    handleCheckObj({flexDirection}),
    handleCheckObj({flex}),
    handleCheckObj({flexGrow}),
    handleCheckObj({flexShrink}),
    handleCheckObj({flexBasis}),
    handleCheckObj({justifySelf}),
    handleCheckObj({alignSelf}),
    handleCheckObj({order}),

    // BORDERS
    handleCheckObj({
      borderWidth: hs(border?.[0]),
      borderStyle: border?.[1],
      borderColor: COLORS[border?.[2]] || border?.[2],
    }),
    handleCheckObj({borderWidth: hs(borderWidth)}),
    handleCheckObj({borderStyle}),
    handleCheckObj({borderColor: COLORS[borderColor] || borderColor}),
    handleCheckObj({
      borderWidth: hs(borderTop?.[0]),
      borderStyle: borderTop?.[1],
      borderColor: COLORS[borderTop?.[2]] || borderTop?.[2],
    }),
    handleCheckObj({borderTopWidth: hs(borderTopWidth)}),
    handleCheckObj({borderTopStyle}),
    handleCheckObj({borderTopColor: COLORS[borderTopColor] || borderTopColor}),
    handleCheckObj({
      borderWidth: hs(borderRight?.[0]),
      borderStyle: borderRight?.[1],
      borderColor: COLORS[borderRight?.[2]] || borderRight?.[2],
    }),
    handleCheckObj({borderRightWidth: hs(borderRightWidth)}),
    handleCheckObj({borderRightStyle}),
    handleCheckObj({
      borderRightColor: COLORS[borderRightColor] || borderRightColor,
    }),
    handleCheckObj({
      borderWidth: hs(borderBottom?.[0]),
      borderStyle: borderBottom?.[1],
      borderColor: COLORS[borderBottom?.[2]] || borderBottom?.[2],
    }),
    handleCheckObj({borderBottomWidth: hs(borderBottomWidth)}),
    handleCheckObj({borderBottomStyle}),
    handleCheckObj({
      borderBottomColor: COLORS[borderBottomColor] || borderBottomColor,
    }),
    handleCheckObj({
      borderWidth: hs(borderLeft?.[0]),
      borderStyle: borderLeft?.[1],
      borderColor: COLORS[borderLeft?.[2]] || borderLeft?.[2],
    }),
    handleCheckObj({borderLeftWidth: hs(borderLeftWidth)}),
    handleCheckObj({borderLeftStyle}),
    handleCheckObj({
      borderLeftColor: COLORS[borderLeftColor] || borderLeftColor,
    }),

    // BORDERS RADIUS
    handleCheckObj({borderRadius: hs(borderRadius)}),
    handleCheckObj({borderTopLeftRadius: hs(borderTopLeftRadius)}),
    handleCheckObj({borderTopRightRadius: hs(borderTopRightRadius)}),
    handleCheckObj({borderBottomRightRadius: hs(borderBottomRightRadius)}),
    handleCheckObj({borderBottomLeftRadius: hs(borderBottomLeftRadius)}),
    handleCheckObj({borderTopRadius: hs(borderTopRadius)}),
    handleCheckObj({borderRightRadius: hs(borderRightRadius)}),
    handleCheckObj({borderBottomRadius: hs(borderBottomRadius)}),
    handleCheckObj({borderLeftRadius: hs(borderLeftRadius)}),

    // POSITION
    handleCheckObj({position}),
    handleCheckObj({zIndex}),
    handleCheckObj({top: hs(top)}),
    handleCheckObj({right: hs(right)}),
    handleCheckObj({bottom: hs(bottom)}),
    handleCheckObj({left: hs(left)}),

    // SAFE AREA
    safeAreaTop && {marginTop: insets.top},
    safeAreaRight && {marginRight: insets.right},
    safeAreaBottom && {marginBotom: insets.bottom},
    safeAreaLeft && {marginLeft: insets.left},

    // SHADOW
    shadow1 && globalStyles.shadow1,
    shadow2 && globalStyles.shadow2,
    shadow3 && globalStyles.shadow3,

    // CUSTOM STYLE
    rowWrap && globalStyles.rowWrap,
    rowCenter && globalStyles.rowCenter,
    rowBetween && globalStyles.rowBetween,
    absoluteFill && globalStyles.absoluteFill,

    style,
  ];

  return (
    <View style={customStyles} onLayout={onLayout} {...rest}>
      {children}
    </View>
  );
};

export default Block;
