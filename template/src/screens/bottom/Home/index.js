import {Block, GridList} from '@components';
import React from 'react';
import {Text} from 'react-native';

const Home = () => {
  const _renderItem = () => {
    return (
      <Block
        padding={10}
        alignItems="center"
        justifyContent="center"
        backgroundColor="gray"
        overflow="hidden">
        <Block circle={30} backgroundColor="blue" />
        <Text style={{color: 'black'}}>woeifjewoifj</Text>
      </Block>
    );
  };

  return (
    <Block flex={1}>
      <Block circle={100} padding={20} backgroundColor="red">
        <Text style={{color: 'black'}}>weoifjewofij</Text>
      </Block>
      <GridList numColumns={3} data={[1, 1, 1, 1]} renderItem={_renderItem} />
    </Block>
  );
};

export default Home;
