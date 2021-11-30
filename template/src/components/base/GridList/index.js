import {Block} from '@components';
import {SIZES} from '@themes';
import React from 'react';

const GridList = ({
  numColumns = 2,
  data = [],
  separator = SIZES.large,
  renderItem,
}) => {
  const padding = separator / 2;
  const widthPercent = `${100 / numColumns}%`;

  const _renderItem = (item, index) => {
    return (
      <Block
        key={`grid-list-${index}`}
        padding={padding}
        style={{width: widthPercent}}>
        {renderItem({item, index})}
      </Block>
    );
  };

  if (!data?.length) {
    return null;
  } else {
    return (
      <Block rowWrap padding={padding}>
        {data.map(_renderItem)}
      </Block>
    );
  }
};

export default GridList;
