import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const LikeIcon = props => {
  return (
    <Svg
      width={27}
      height={28}
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.315 26.831H3.458A2.571 2.571 0 01.887 24.26v-9a2.571 2.571 0 012.571-2.571h3.857m9-2.572V4.974a3.857 3.857 0 00-3.857-3.857L7.315 12.69V26.83h14.503a2.572 2.572 0 002.572-2.185l1.774-11.572a2.572 2.572 0 00-2.572-2.957h-7.277z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
