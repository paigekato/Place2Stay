import React from 'react';
import { Path } from 'react-native-svg';

const Ellipsis: React.FC = () => {
  return (
    <>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </>
  );
};

export default Ellipsis;