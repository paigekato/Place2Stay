import React from 'react';
import { Path, Rect } from 'react-native-svg';

const House: React.FC = () => {
  return (
    <>
      <Rect fill="none" height="24" width="24" />
      <Path d="M12,3L6,7.58V6H4v3.11L1,11.4l1.21,1.59L4,11.62V21h7v-6h2v6h7v-9.38l1.79,1.36L23,11.4L12,3z M10,1c0,1.66-1.34,3-3,3 C6.45,4,6,4.45,6,5H4c0-1.66,1.34-3,3-3c0.55,0,1-0.45,1-1H10z" />
    </>
  );
};

export default House;