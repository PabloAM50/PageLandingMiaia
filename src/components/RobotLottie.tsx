import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface RobotLottieProps {
  className?: string;
}

const RobotLottie: React.FC<RobotLottieProps> = ({ className }) => (
  <Player
    src="/animations/robot.json"
    autoplay
    loop
    className={className || 'w-64 h-64'}
    style={{ maxWidth: '100%', height: 'auto' }}
  />
);

export default RobotLottie;
