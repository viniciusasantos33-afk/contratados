'use client';

import { useState, useEffect } from 'react';

const StarryBackground = () => {
  const [stars, setStars] = useState<{ style: React.CSSProperties }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      // Avoid running on server
      if (typeof window === 'undefined') return;

      const newStars = [];
      const numStars = Math.floor(window.innerWidth / 7);

      for (let i = 0; i < numStars; i++) {
        const size = Math.random() * 2 + 1;
        const style: React.CSSProperties = {
          width: `${size}px`,
          height: `${size}px`,
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 5 + 3}s`,
          animationDelay: `${Math.random() * 5}s`,
        };
        newStars.push({ style });
      }
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-full w-full">
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
        {stars.map((star, i) => (
          <div key={i} className="star absolute" style={star.style} />
        ))}
      </div>
    </div>
  );
};

export default StarryBackground;
