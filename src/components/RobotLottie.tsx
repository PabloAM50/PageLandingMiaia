import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface RobotLottieProps {
  className?: string;
}

const lottieSrc = '/animations/robot.lottie';

const RobotLottie: React.FC<RobotLottieProps> = ({ className }) => {
  React.useEffect(() => {
    console.log('[RobotLottie] Intentando cargar animación:', lottieSrc);
  }, []);

  return (
    <Player
      src={lottieSrc}
      autoplay
      loop
      className={className || 'w-64 h-64'}
      style={{ maxWidth: '100%', height: 'auto' }}
      onEvent={event => {
        if (event === 'load') {
          console.log('[RobotLottie] Animación cargada correctamente:', lottieSrc);
        }
        if (event === 'error') {
          console.error('[RobotLottie] Error al cargar la animación:', lottieSrc);
        }
      }}
    />
  );
};

export default RobotLottie;
