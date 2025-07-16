import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedCursor = () => {
  const cursorSize = 12;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };
  
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Smoothing springs for cursor position
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouse.x, smoothOptions);
  const smoothY = useSpring(mouse.y, smoothOptions);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.x.set(e.clientX - cursorSize / 2);
      mouse.y.set(e.clientY - cursorSize / 2);
      
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer' ||
        target.closest('a, button, [data-cursor-pointer]') !== null
      );
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouse.x, mouse.y]);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 mix-blend-difference ${
        isPointer ? 'bg-transparent border-2 border-white' : 'bg-[#46c1ff]'
      }`}
      style={{
        x: smoothX,
        y: smoothY,
        opacity: isHidden ? 0 : 1
      }}
      animate={{
        scale: isPointer ? 2.5 : 1,
        backgroundColor: isPointer ? 'transparent' : '#46c1ff',
        borderColor: isPointer ? 'white' : 'transparent'
      }}
      transition={{
        scale: { type: 'spring', damping: 10, stiffness: 200 },
        backgroundColor: { duration: 0.2 },
        borderColor: { duration: 0.2 }
      }}
    />
  );
};

export default AnimatedCursor;