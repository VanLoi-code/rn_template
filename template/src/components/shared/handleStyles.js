import {COLORS} from '@themes';
import {hs} from '@utils/responsive';

export const handleSize = objSize => {
  const key = Object.keys(objSize)[0];
  const value = Object.values(objSize)[0];

  if (typeof value === 'string') {
    return {[key]: value};
  } else if (value !== undefined) {
    return {[key]: hs(value)};
  } else {
    return undefined;
  }
};

export const handleColor = objColor => {
  const key = Object.keys(objColor)[0];
  const value = Object.values(objColor)[0];

  if (typeof value === 'string') {
    return {[key]: COLORS[value] || value};
  } else {
    return undefined;
  }
};

export const handleBorders = (stringBorders, objectBorders) => {
  if (typeof stringBorders === 'string') {
    const [width = 0, style = 'solid', color = 'black'] =
      stringBorders.split(' ') || [];

    const [widthKey, styleKey, colorKey] = Object.keys(objectBorders) || [];

    return {
      [widthKey]: hs(width),
      [styleKey]: style,
      [colorKey]: COLORS[color] || color,
    };
  } else {
    return undefined;
  }
};

export const handlePadding = value => {
  if (typeof value === 'string') {
    let padding = {
      top: undefined,
      right: undefined,
      bottom: undefined,
      left: undefined,
    };
    const lengthValue = value.length;
    const [one, two, three, four] = value.split(' ');

    switch (lengthValue) {
      case 1:
        padding = {
          top: one,
          right: one,
          bottom: one,
          left: one,
        };
        break;
      case 2:
        padding = {
          top: one,
          right: two,
          bottom: one,
          left: two,
        };
        break;
      case 3:
        padding = {
          top: one,
          right: two,
          bottom: three,
          left: two,
        };
        break;
      case 4:
        padding = {
          top: one,
          right: two,
          bottom: three,
          left: four,
        };
        break;
    }

    return {
      paddingTop: hs(padding.top),
      paddingRight: hs(padding.right),
      paddingBottom: hs(padding.bottom),
      paddingLeft: hs(padding.left),
    };
  } else if (value !== undefined) {
    return {padding: hs(value)};
  } else {
    return undefined;
  }
};
