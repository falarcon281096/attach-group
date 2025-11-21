"use client";

import React from 'react';
import Image from 'next/image';

type CrossPosition = 'right-bottom' | 'left-bottom';

interface ImageWithCrossIconProps {
  src: string;
  alt: string;
  position: CrossPosition;
  width?: number;
  height?: number;
  quality?: number;
  containerClassName?: string;
  imageClassName?: string;
  iconSizeMobile?: string; // e.g., "w-10 h-10"
  iconSizeDesktop?: string; // e.g., "lg:w-15 lg:h-15"
  hoverScale?: boolean; // controla si la imagen escala en hover; por defecto false
}

export default function ImageWithCrossIcon({
  src,
  alt,
  position,
  width = 1200,
  height = 1000,
  quality = 100,
  containerClassName = '',
  imageClassName = '',
  iconSizeMobile = 'w-10 h-10',
  iconSizeDesktop = 'lg:w-15 lg:h-15',
  hoverScale = false,
}: ImageWithCrossIconProps) {
  // Determinar las clases de bordes redondeados según la posición
  const getRoundedClasses = (): string => {
    if (position === 'right-bottom') {
      // Estilo actual: rounded-tl y rounded-br
      return 'rounded-tl-[30px] rounded-br-[30px] lg:rounded-tl-[50px] lg:rounded-br-[50px]';
    } else {
      // position === 'left-bottom': estilo diferente rounded-tr y rounded-bl
      return 'rounded-tr-[30px] rounded-bl-[30px] lg:rounded-tr-[50px] lg:rounded-bl-[50px]';
    }
  };

  // Determinar la posición del icono según la posición y el breakpoint
  // El icono debe estar pegado la mitad a la imagen y sobresalir la otra mitad
  // Para w-10 (40px), el centro está a 20px del borde, así que necesitamos -20px para que el centro esté en el borde
  // Para lg:w-15 (60px), el centro está a 30px del borde, así que necesitamos -30px para que el centro esté en el borde
  // Usamos valores negativos pequeños en bottom para que esté más cerca del borde inferior de la imagen
  const getIconPositionClasses = (): string => {
    if (position === 'right-bottom') {
      // Desktop: LEFT BOTTOM, Mobile: RIGHT BOTTOM
      // En mobile (w-10 = 40px): right-[-20px] para que la mitad sobresalga, bottom-[-4px] para estar más cerca
      // En desktop (lg:w-15 = 60px): lg:-left-[30px] para que la mitad sobresalga, bottom-[-6px] para estar más cerca
      return `absolute bottom-[-4px] right-[-20px] lg:bottom-[-6px] lg:-left-[30px] lg:right-auto lg:top-auto`;
    } else {
      // position === 'left-bottom'
      // Desktop: RIGHT BOTTOM, Mobile: LEFT BOTTOM
      // En mobile (w-10 = 40px): left-[-20px] para que la mitad sobresalga, bottom-[-4px] para estar más cerca
      // En desktop (lg:w-15 = 60px): lg:-right-[30px] para que la mitad sobresalga, bottom-[-6px] para estar más cerca
      return `absolute bottom-[-4px] left-[-20px] lg:bottom-[-6px] lg:-right-[30px] lg:left-auto lg:top-auto`;
    }
  };

  return (
    <div 
      className={`relative ${containerClassName}`}
      style={{ zIndex: 10, isolation: 'isolate' }}
    >
      {/* Contenedor de la imagen con el icono dentro */}
      <div 
        className={`relative ${getRoundedClasses()} ${hoverScale ? 'group' : ''} w-full ${imageClassName}`}
        style={{ zIndex: 1 }}
      >
        {/* Imagen con overflow-hidden solo en la imagen */}
        <div className={`relative overflow-hidden w-full h-full ${getRoundedClasses()}`}>
          <Image 
            className={`w-full ${getRoundedClasses()} object-cover transform transition-all duration-700 ${hoverScale ? 'group-hover:scale-110' : ''} ${imageClassName}`}
            src={src}
            alt={alt}
            width={width}
            height={height}
            quality={quality}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
        
        {/* Icono attach_cross_blue_to_purple.png dentro del contenedor de la imagen */}
        <div 
          className={`${getIconPositionClasses()} ${iconSizeMobile} ${iconSizeDesktop} pointer-events-none`}
          style={{ zIndex: 9999 }}
        >
          <Image 
            src="/images/general/attach_cross_blue_to_purple.png" 
            alt="" 
            width={60} 
            height={60} 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

