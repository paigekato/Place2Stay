import React from 'react';
import { Path } from 'react-native-svg';

const Remove: React.FC = () => {
  return (
    <>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M19 13H5v-2h14v2z" />
    </>
  );
};

export default Remove;
