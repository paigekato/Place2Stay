import React from 'react';
import { Path } from 'react-native-svg';

const Caret: React.FC = () => {
  return (
    <>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
    </>
  );
};

export default Caret;
