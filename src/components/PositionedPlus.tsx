"use client";

import React, { useEffect, useRef, useState } from 'react';

type Position = 'LEFT_UP' | 'LEFT_DOWN' | 'RIGHT_UP' | 'RIGHT_DOWN' | 'CENTER_UP' | 'CENTER_DOWN';

interface PositionedPlusProps {
  // Position preset - simplifies positioning
  position?: Position;
  
  // Custom positioning (overrides position preset)
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  
  // Size - responsive
  size?: string; // Default size (will scale proportionally)
  sizeMobile?: string;
  sizeTablet?: string;
  sizeDesktop?: string;
  
  // Color options
  color?: string; // Solid color (e.g., "#1840E2")
  gradient?: string; // Custom gradient (e.g., "linear-gradient(276deg, #5E2F84, #1840E2)")
  
  // Padding from edge (when using position preset)
  padding?: string;
  paddingMobile?: string;
  paddingTablet?: string;
  paddingDesktop?: string;
  
  // Custom offset adjustments
  offsetX?: string; // Additional horizontal offset
  offsetY?: string; // Additional vertical offset
  
  // Z-index
  zIndex?: number;
  
  // Additional className
  className?: string;
}

export default function PositionedPlus({
  position = 'RIGHT_DOWN',
  left,
  right,
  top,
  bottom,
  size = '4rem',
  sizeMobile,
  sizeTablet,
  sizeDesktop,
  color,
  gradient,
  padding = '1rem',
  paddingMobile,
  paddingTablet,
  paddingDesktop,
  offsetX,
  offsetY,
  zIndex = 10,
  className = '',
}: PositionedPlusProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const [currentSize, setCurrentSize] = useState(size);
  const [currentPadding, setCurrentPadding] = useState(padding);

  // Update size on window resize
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCurrentSize(sizeDesktop || sizeTablet || size);
        setCurrentPadding(paddingDesktop || paddingTablet || padding);
      } else if (width >= 768) {
        setCurrentSize(sizeTablet || size);
        setCurrentPadding(paddingTablet || padding);
      } else {
        setCurrentSize(sizeMobile || size);
        setCurrentPadding(paddingMobile || padding);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [size, sizeMobile, sizeTablet, sizeDesktop, padding, paddingMobile, paddingTablet, paddingDesktop]);

  // Calculate position based on preset or custom values
  useEffect(() => {
    if (!containerRef.current) return;

    const applyPosition = () => {
      if (!containerRef.current) return;

      // If custom positions are provided, use them directly
      if (left !== undefined || right !== undefined || top !== undefined || bottom !== undefined) {
        if (left !== undefined) {
          containerRef.current.style.left = left;
          containerRef.current.style.right = '';
        }
        if (right !== undefined) {
          containerRef.current.style.right = right;
          containerRef.current.style.left = '';
        }
        if (top !== undefined) {
          containerRef.current.style.top = top;
          containerRef.current.style.bottom = '';
        }
        if (bottom !== undefined) {
          containerRef.current.style.bottom = bottom;
          containerRef.current.style.top = '';
        }
        return;
      }

      // Use position preset
      const pad = currentPadding;
      
      // Reset transforms and positions
      containerRef.current.style.transform = '';
      containerRef.current.style.left = '';
      containerRef.current.style.right = '';
      containerRef.current.style.top = '';
      containerRef.current.style.bottom = '';

      // Para un posicionamiento más robusto: calculamos el offset numéricamente
      // Extraemos el valor numérico del tamaño (ej: "9rem" -> 9)
      const parseSize = (sizeStr: string): number => {
        const match = sizeStr.match(/^([\d.]+)/);
        return match ? parseFloat(match[1]) : 4;
      };
      
      const sizeValue = parseSize(currentSize);
      const sizeUnit = currentSize.replace(/^[\d.]+/, ''); // rem, px, etc.
      
      // 25% del tamaño sobresale, 75% está dentro
      const overhangPercent = 0.25;
      const offsetValue = sizeValue * overhangPercent;
      const offset = `-${offsetValue}${sizeUnit}`;
      
      switch (position) {
        case 'LEFT_UP':
          // El 75% está dentro, 25% sobresale por la izquierda
          containerRef.current.style.left = offset;
          containerRef.current.style.top = pad;
          break;
        case 'LEFT_DOWN':
          // El 75% está dentro, 25% sobresale por la izquierda
          containerRef.current.style.left = offset;
          containerRef.current.style.bottom = pad;
          break;
        case 'RIGHT_UP':
          // El 75% está dentro, 25% sobresale por la derecha
          containerRef.current.style.right = offset;
          containerRef.current.style.top = pad;
          break;
        case 'RIGHT_DOWN':
          // El 75% está dentro, 25% sobresale por la derecha
          containerRef.current.style.right = offset;
          containerRef.current.style.bottom = pad;
          break;
        case 'CENTER_UP':
          containerRef.current.style.left = '50%';
          containerRef.current.style.top = pad;
          containerRef.current.style.transform = 'translateX(-50%)';
          break;
        case 'CENTER_DOWN':
          containerRef.current.style.left = '50%';
          containerRef.current.style.bottom = pad;
          containerRef.current.style.transform = 'translateX(-50%)';
          break;
      }

      // Apply custom offsets
      if (offsetX) {
        const currentLeft = containerRef.current.style.left;
        const currentRight = containerRef.current.style.right;
        const currentTransform = containerRef.current.style.transform;
        
        if (currentLeft) {
          if (currentLeft.includes('calc')) {
            containerRef.current.style.left = `${currentLeft.replace(')', '')} + ${offsetX})`;
          } else {
            containerRef.current.style.left = `calc(${currentLeft} + ${offsetX})`;
          }
        } else if (currentRight) {
          if (currentRight.includes('calc')) {
            containerRef.current.style.right = `${currentRight.replace(')', '')} + ${offsetX})`;
          } else {
            containerRef.current.style.right = `calc(${currentRight} + ${offsetX})`;
          }
        } else if (currentTransform) {
          // If there's already a transform, combine with translateX
          containerRef.current.style.transform = `${currentTransform} translateX(${offsetX})`;
        }
      }

      if (offsetY) {
        const currentTop = containerRef.current.style.top;
        const currentBottom = containerRef.current.style.bottom;
        
        if (currentTop) {
          if (currentTop.includes('calc')) {
            containerRef.current.style.top = `${currentTop.replace(')', '')} + ${offsetY})`;
          } else {
            containerRef.current.style.top = `calc(${currentTop} + ${offsetY})`;
          }
        } else if (currentBottom) {
          if (currentBottom.includes('calc')) {
            containerRef.current.style.bottom = `${currentBottom.replace(')', '')} + ${offsetY})`;
          } else {
            containerRef.current.style.bottom = `calc(${currentBottom} + ${offsetY})`;
          }
        }
      }
    };

    applyPosition();
  }, [position, left, right, top, bottom, currentPadding, currentSize, offsetX, offsetY]);

  // Update font size
  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.style.fontSize = currentSize;
    }
  }, [currentSize]);

  // Get text style
  const textStyle: React.CSSProperties = {
    fontWeight: 'bold',
    lineHeight: 1,
    display: 'inline-block',
    fontSize: currentSize,
  };

  // Apply gradient or color to text
  if (gradient || (!color && !gradient)) {
    // Gradient needs background-clip
    textStyle.background = gradient || 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)';
    textStyle.WebkitBackgroundClip = 'text';
    textStyle.WebkitTextFillColor = 'transparent';
    textStyle.backgroundClip = 'text';
  } else {
    // Solid color
    textStyle.color = color;
  }

  return (
    <div 
      ref={containerRef}
      className={`absolute ${className}`}
      style={{ zIndex }}
    >
      <span ref={spanRef} style={textStyle}>+</span>
    </div>
  );
}

