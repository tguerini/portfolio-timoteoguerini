import React, { useEffect, useState } from 'react';
import '../App.css';

const Typewriter = ({ className: _className, texts, speed, pause }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0); // Índice del texto actual
  const [direction, setDirection] = useState(1); // 1 for writing, -1 for deleting
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        if (direction === 1) {
          setDisplayedText(prev => prev + texts[textIndex].charAt(index));
          setIndex(prev => prev + 1);
          if (index === texts[textIndex].length - 1) {
            setDirection(-1);
            setIsPaused(true); // Pausar cuando el texto esté completo
            setTimeout(() => setIsPaused(false), pause); // Reanudar después de la pausa
          }
        } else {
          setDisplayedText(prev => prev.slice(0, -1));
          setIndex(prev => prev - 1);
          if (index === 0) {
            setDirection(1);
            setTextIndex((prev) => (prev + 1) % texts.length); // Cambiar al siguiente texto
            setIsPaused(true); // Pausar cuando el texto esté completamente eliminado
            setTimeout(() => setIsPaused(false), pause); // Reanudar después de la pausa
          }
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, textIndex, texts, direction, speed, isPaused, pause]);

  return (
    <div className={`typewriter ${_className}`}>
      <p>{displayedText}
      <div class="invisible inline-block"></div>
      </p>
    </div>
  );
};

export default Typewriter;
