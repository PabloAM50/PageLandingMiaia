import React from 'react';
import Lottie from 'lottie-react';
import robotAnimation from '../assets/animations/robot.lottie';

interface RobotLottieProps {
  className?: string;
}

const RobotLottie: React.FC<RobotLottieProps> = ({ className }) => {
  return (
    <Lottie 
      animationData={robotAnimation}
      loop
      autoplay
      className={className || 'w-64 h-64'}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
};

export default RobotLottie;
