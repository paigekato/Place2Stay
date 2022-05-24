import React from 'react';
import { Path } from 'react-native-svg';

const Plus: React.FC = () => {
  return (
    <>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </>
  );
};

export default Plus;
