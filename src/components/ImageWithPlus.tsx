"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

type Position = 'LEFT_UP' | 'LEFT_DOWN' | 'RIGHT_UP' | 'RIGHT_DOWN' | 'CENTER_UP' | 'CENTER_DOWN';

interface ImageWithPlusProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  imageClassName?: string;
  containerClassName?: string;
  
  // Position preset
  position?: Position;
  
  // Size - responsive
  size?: string;
  sizeMobile?: string;
  sizeTablet?: string;
  sizeDesktop?: string;
  
  // Color options
  color?: string;
  gradient?: string;
  
  // Padding from edge
  padding?: string;
  paddingMobile?: string;
  paddingTablet?: string;
  paddingDesktop?: string;
  
  // Custom offset adjustments
  offsetX?: string;
  offsetY?: string;
  
  // Overhang percentage (how much of the + should stick out)
  overhangPercent?: number; // Default 0.25 (25%)
  
  // Size percentage (percentage of image size to use for +, default 7%)
  sizePercent?: number; // Default 0.07 (7%)
}

export default function ImageWithPlus({
  src,
  alt,
  width = 600,
  height = 400,
  imageClassName = '',
  containerClassName = '',
  position = 'RIGHT_DOWN',
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
  overhangPercent = 0.25,
  sizePercent = 0.07, // 7% por defecto
}: ImageWithPlusProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const plusRef = useRef<HTMLSpanElement>(null);
  const [currentSize, setCurrentSize] = useState(size);
  const [currentPadding, setCurrentPadding] = useState(padding);
  const [calculatedSize, setCalculatedSize] = useState<string | null>(null);

  // Check if sizes are provided (solo si se pasan explícitamente)
  const hasExplicitSizes = sizeMobile !== undefined || sizeTablet !== undefined || sizeDesktop !== undefined;

  // Calculate size based on image dimensions (7% of image size) or use explicit sizes
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      
      if (!hasExplicitSizes && imageRef.current) {
        const img = imageRef.current.querySelector('img');
        if (img) {
          // Usar múltiples métodos para obtener las dimensiones reales
          let imgWidth = img.naturalWidth || img.offsetWidth || img.clientWidth || 0;
          let imgHeight = img.naturalHeight || img.offsetHeight || img.clientHeight || 0;
          
          // Si aún son 0, usar getBoundingClientRect
          if (imgWidth === 0 || imgHeight === 0) {
            const rect = img.getBoundingClientRect();
            imgWidth = rect.width || imgWidth;
            imgHeight = rect.height || imgHeight;
          }
          
          const maxDimension = Math.max(imgWidth, imgHeight);
          
          if (maxDimension > 0) {
            const calculatedSizeValue = maxDimension * sizePercent; // Porcentaje configurable del tamaño de la imagen
            setCalculatedSize(`${calculatedSizeValue}px`);
            
            // Aplicar tamaño según breakpoint (más pequeño en mobile)
            if (width >= 1024) {
              setCurrentSize(`${calculatedSizeValue}px`);
              setCurrentPadding(paddingDesktop || paddingTablet || padding);
            } else if (width >= 768) {
              setCurrentSize(`${calculatedSizeValue * 0.85}px`); // 85% para tablet
              setCurrentPadding(paddingTablet || padding);
            } else {
              setCurrentSize(`${calculatedSizeValue * 0.7}px`); // 70% para mobile
              setCurrentPadding(paddingMobile || padding);
            }
          }
        }
      } else {
        // Usar tamaños explícitos proporcionados
        setCalculatedSize(null);
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
      }
    };

    updateSize();
    
    const img = imageRef.current?.querySelector('img');
    if (img) {
      img.addEventListener('load', updateSize);
      if (img.complete) {
        // Pequeño delay para asegurar que las dimensiones están disponibles
        setTimeout(updateSize, 100);
      }
    }

    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
      img?.removeEventListener('load', updateSize);
    };
  }, [size, sizeMobile, sizeTablet, sizeDesktop, padding, paddingMobile, paddingTablet, paddingDesktop, hasExplicitSizes, sizePercent]);


  // Position the plus symbol
  useEffect(() => {
    if (!plusRef.current || !containerRef.current) return;

    const parseSize = (sizeStr: string): number => {
      const match = sizeStr.match(/^([\d.]+)/);
      return match ? parseFloat(match[1]) : 4;
    };

    const sizeValue = parseSize(currentSize);
    const sizeUnit = currentSize.replace(/^[\d.]+/, '');
    
    // Si right: 0, el centro del + está en el borde derecho
    // Para que sobresalga overhangPercent (ej: 40%):
    // - Si queremos que el 40% sobresalga, entonces el 60% está dentro
    // - El centro debe estar a: (size/2) - (size * overhangPercent) del borde
    // - Pero pensándolo mejor: si el centro está a distancia X del borde:
    //   - Hacia dentro: X
    //   - Hacia fuera: halfSize - X
    // - Queremos que (halfSize - X) / size = overhangPercent
    // - Entonces: halfSize - X = size * overhangPercent
    // - X = halfSize - (size * overhangPercent)
    // - Si overhangPercent = 0.40 y size = 9rem:
    //   - X = 4.5 - 3.6 = 0.9rem (muy poco, casi todo sobresale)
    // 
    // Mejor interpretación: overhangPercent es la parte que SOBRESALE
    // Si overhangPercent = 0.40, queremos que el 40% sobresalga y el 60% esté dentro
    // El centro debe estar a: (size * (1 - overhangPercent) / 2) del borde
    // O más simple: moveInward = halfSize - (size * overhangPercent)
    const halfSize = sizeValue / 2;
    const overhangSize = sizeValue * overhangPercent;
    
    // Si overhangPercent es mayor que 0.5, significa que más de la mitad sobresale
    // En ese caso, el centro debe estar FUERA del borde (negativo)
    let moveInward: number;
    if (overhangPercent > 0.5) {
      // Más de la mitad sobresale, el centro está fuera
      moveInward = -(overhangSize - halfSize);
    } else {
      // Menos de la mitad sobresale, el centro está dentro
      moveInward = halfSize - overhangSize;
    }
    
    const moveInwardValue = `${moveInward}${sizeUnit}`;

    // Reset styles
    plusRef.current.style.position = 'absolute';
    plusRef.current.style.transform = '';
    plusRef.current.style.left = '';
    plusRef.current.style.right = '';
    plusRef.current.style.top = '';
    plusRef.current.style.bottom = '';
    plusRef.current.style.margin = '';

    switch (position) {
      case 'LEFT_UP':
        // Posición desde left: 0, luego mover hacia adentro
        plusRef.current.style.left = '0';
        plusRef.current.style.transform = `translateX(-${moveInwardValue})`;
        plusRef.current.style.top = currentPadding;
        break;
      case 'LEFT_DOWN':
        plusRef.current.style.left = '0';
        plusRef.current.style.transform = `translateX(-${moveInwardValue})`;
        plusRef.current.style.bottom = currentPadding;
        break;
      case 'RIGHT_UP':
        // Posición desde right: 0, luego mover hacia adentro
        plusRef.current.style.right = '0';
        plusRef.current.style.transform = `translateX(${moveInwardValue})`;
        plusRef.current.style.top = currentPadding;
        break;
      case 'RIGHT_DOWN':
        plusRef.current.style.right = '0';
        plusRef.current.style.transform = `translateX(${moveInwardValue})`;
        plusRef.current.style.bottom = currentPadding;
        break;
      case 'CENTER_UP':
        plusRef.current.style.left = '50%';
        plusRef.current.style.top = currentPadding;
        plusRef.current.style.transform = 'translateX(-50%)';
        break;
      case 'CENTER_DOWN':
        plusRef.current.style.left = '50%';
        plusRef.current.style.bottom = currentPadding;
        plusRef.current.style.transform = 'translateX(-50%)';
        break;
    }

    // Apply custom offsets
    if (offsetX && plusRef.current.style.transform) {
      // Si ya hay un transform, combinarlo con el offsetX
      const currentTransform = plusRef.current.style.transform;
      // Extraer el translateX actual y combinarlo con offsetX
      const offsetMatch = currentTransform.match(/translateX\(([^)]+)\)/);
      if (offsetMatch) {
        // Ya hay un translateX, extraer el valor y sumar offsetX
        const currentOffset = offsetMatch[1];
        const newOffset = `calc(${currentOffset} + ${offsetX})`;
        plusRef.current.style.transform = currentTransform.replace(
          /translateX\([^)]+\)/,
          `translateX(${newOffset})`
        );
      } else {
        // No hay translateX, agregarlo
        plusRef.current.style.transform = `${currentTransform} translateX(${offsetX})`;
      }
    } else if (offsetX) {
      // No hay transform, aplicar offset directamente
      const currentLeft = plusRef.current.style.left;
      const currentRight = plusRef.current.style.right;
      
      if (currentLeft && currentLeft !== '50%') {
        plusRef.current.style.left = `calc(${currentLeft} + ${offsetX})`;
      } else if (currentRight) {
        plusRef.current.style.right = `calc(${currentRight} + ${offsetX})`;
      }
    }

    if (offsetY) {
      const currentTop = plusRef.current.style.top;
      const currentBottom = plusRef.current.style.bottom;
      
      if (currentTop) {
        plusRef.current.style.top = `calc(${currentTop} + ${offsetY})`;
      } else if (currentBottom) {
        plusRef.current.style.bottom = `calc(${currentBottom} + ${offsetY})`;
      }
    }
  }, [position, currentSize, currentPadding, offsetX, offsetY, overhangPercent]);

  // Update font size
  useEffect(() => {
    if (plusRef.current) {
      plusRef.current.style.fontSize = currentSize;
    }
  }, [currentSize]);

  // Get text style for plus
  const getPlusStyle = (): React.CSSProperties => {
    const style: React.CSSProperties = {
      fontWeight: 'bold',
      lineHeight: 1,
      display: 'inline-block',
      fontSize: currentSize,
    };

    if (gradient || (!color && !gradient)) {
      style.background = gradient || 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)';
      style.WebkitBackgroundClip = 'text';
      style.WebkitTextFillColor = 'transparent';
      style.backgroundClip = 'text';
    } else {
      style.color = color;
    }

    return style;
  };

  const plusStyle = getPlusStyle();
  plusStyle.position = 'absolute';
  plusStyle.zIndex = 10;
  plusStyle.pointerEvents = 'none';

  // Determinar las clases de bordes redondeados según la posición
  const getRoundedClasses = (): string => {
    switch (position) {
      case 'RIGHT_UP':
      case 'RIGHT_DOWN':
        // Bordes redondeados en la derecha (superior e inferior derecho)
        return 'rounded-r-3xl rounded-l-none overflow-hidden';
      case 'LEFT_UP':
      case 'LEFT_DOWN':
        // Bordes redondeados en la izquierda (superior e inferior izquierdo)
        return 'rounded-l-3xl rounded-r-none overflow-hidden';
      case 'CENTER_UP':
      case 'CENTER_DOWN':
        // Por defecto, bordes redondeados en todos lados
        return 'rounded-3xl overflow-hidden';
      default:
        return 'overflow-hidden';
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-visible ${containerClassName}`}
    >
      <div ref={imageRef} className={`relative w-full ${getRoundedClasses()}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`block w-full h-auto ${imageClassName}`}
        />
      </div>
      <span 
        ref={plusRef}
        style={plusStyle}
      >
        +
      </span>
    </div>
  );
}

