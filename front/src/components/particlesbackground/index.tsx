import React, { useEffect } from 'react';
import styled from 'styled-components';

const ParticlesWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -99;
  pointer-events: none;
  overflow: hidden;
`;

const Particle = styled.div<{ x: number; y: number; size: number; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  opacity: 0.8;
  transition: transform 0.5s, background 1.5s;
`;

const ParticlesBackground: React.FC = () => {
  const createParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 5 + Math.random() * 10,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      });
    }
    return particles;
  };

  const particles = createParticles();

  useEffect(() => {
    const interval = setInterval(() => {
      particles.forEach(particle => {
        const particleElement = document.getElementById(`particle-${particle.id}`);
        if (particleElement) {
          particleElement.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
          particleElement.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [particles]);

  return (
    <ParticlesWrapper>
      {particles.map(particle => (
        <Particle
          key={particle.id}
          id={`particle-${particle.id}`}
          x={particle.x}
          y={particle.y}
          size={particle.size}
          color={particle.color}
        />
      ))}
    </ParticlesWrapper>
  );
};

export default ParticlesBackground;