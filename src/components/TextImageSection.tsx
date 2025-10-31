"use client";

import React from "react";
import Image from "next/image";
import GradientPlus from "./GradientPlus";

interface TextImageSectionProps {
  // Título con degradado
  title: React.ReactNode;
  titleGradient?: string; // linear-gradient(...)
  
  // Contenido de texto
  text: React.ReactNode;
  
  // Imagen
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
  imageBorderColor?: string; // Color del borde de la imagen
  imageBorderWidth?: string; // Ancho del borde (ej: "2px", "4px")
  
  // GradientPlus props
  showGradientPlus?: boolean;
  gradientPlusProps?: {
    leftMobile?: string;
    leftDesktop?: string;
    leftTablet?: string;
    rightMobile?: string;
    rightDesktop?: string;
    rightTablet?: string;
    topMobile?: string;
    topDesktop?: string;
    topTablet?: string;
    bottomMobile?: string;
    bottomDesktop?: string;
    bottomTablet?: string;
    [key: string]: any; // Para otras props de GradientPlus
  };
  
  // Layout y estilos
  containerClassName?: string;
  titleClassName?: string;
  textClassName?: string;
  imageContainerClassName?: string;
  gapClassName?: string;
  imagePadding?: string; // Padding de la imagen (ej: "1rem", "2rem") cuando hay texto al lado
  
  // Orden de columnas (para cambiar el orden visual)
  textPosition?: "left" | "right"; // Posición del texto en desktop (default: "left")
  textPositionMobile?: "left" | "right" | null; // Posición del texto en móvil (null = mismo que desktop)
}

export default function TextImageSection({
  title,
  titleGradient = "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
  text,
  imageSrc,
  imageAlt,
  imageWidth = 1200,
  imageHeight = 400,
  imageClassName = "w-full h-full object-cover  ",
  imageBorderColor = "#FFC351",
  imageBorderWidth = "2px",
  showGradientPlus = true,
  gradientPlusProps = {
    leftMobile: "-1rem",
    leftDesktop: "-1.6rem",
    rightMobile: "1rem",
    bottomMobile: "2rem",
    bottomDesktop: "1rem",
  },
  containerClassName = "",
  titleClassName = "",
  textClassName = "",
  imageContainerClassName = "",
  gapClassName = "gap-6",
  imagePadding,
  textPosition = "left",
  textPositionMobile = null,
}: TextImageSectionProps) {
  // Orden de columnas
  // Desktop: texto left = order-1, texto right = order-2
  const textOrderDesktop = textPosition === "right" ? "md:order-2" : "md:order-1";
  const imageOrderDesktop = textPosition === "right" ? "md:order-1" : "md:order-2";
  
  // Mobile: siempre texto arriba (order-1) e imagen abajo (order-2)
  const textOrderMobile = "order-1";
  const imageOrderMobile = "order-2";
  
  // Padding condicional de la imagen según posición del texto
  const getImagePaddingClasses = () => {
    if (!imagePadding) return "";
    
    const sanitizedPadding = imagePadding.replace(/\s+/g, '_');
    
    // En desktop: si texto izquierda → pl, si texto derecha → pr
    let desktopClass = "";
    if (textPosition === "left") {
      desktopClass = `md:pl-[${sanitizedPadding}] md:pr-0`;
    } else {
      desktopClass = `md:pr-[${sanitizedPadding}] md:pl-0`;
    }
    
    // En móvil no aplicamos padding horizontal ya que las columnas se apilan verticalmente
    return desktopClass;
  };
  
  // Padding para el div de la derecha: padding: 0 110px 0 15px;
  const getRightColumnPadding = () => {
    return "md:pr-[110px] md:pl-[15px]";
  };

  return (
    <div className={`font-['graphik'] ${containerClassName}`}>
      {/* Grid de 2 columnas: texto 40%, imagen 60% */}
      <div className={`grid grid-cols-1 md:grid-cols-[40%_60%] ${gapClassName}`}>
        {/* Columna de texto */}
        <div className={`${textOrderMobile} ${textOrderDesktop} ${textOrderDesktop === "md:order-2" ? getRightColumnPadding() : ""} ${textClassName}`}>
          {/* Título con degradado como título del párrafo */}
          <div className={titleClassName}>
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent mb-4"
              style={{
                backgroundImage: titleGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </h2>
          </div>
          {text}
        </div>

        {/* Columna de imagen */}
        <div className={`relative ${imageOrderMobile} ${imageOrderDesktop} ${imageOrderDesktop === "md:order-2" ? getRightColumnPadding() : getImagePaddingClasses()} ${imageContainerClassName}`}>
          <div
            className="relative overflow-hidden rounded-t-2xl md:rounded-t-3xl"
            style={{
              //border: `${imageBorderWidth} solid ${imageBorderColor}`,
            }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className={imageClassName}
            />
          </div>
          {showGradientPlus && (
            <GradientPlus 
              gradientStartColor="#FFC351"
              gradientEndColor="#FFC351"
              leftMobile={textPosition === "left" ? gradientPlusProps?.leftMobile : undefined}
              leftDesktop={textPosition === "left" ? gradientPlusProps?.leftDesktop : undefined}
              leftTablet={textPosition === "left" ? gradientPlusProps?.leftTablet : undefined}
              rightMobile={textPosition === "right" ? (gradientPlusProps?.rightMobile || "-1em") : undefined}
              rightDesktop={textPosition === "right" ? (gradientPlusProps?.rightDesktop || "-2em") : undefined}
              rightTablet={textPosition === "right" ? (gradientPlusProps?.rightTablet || "-1.5em") : undefined}
              topMobile={gradientPlusProps?.topMobile}
              topDesktop={gradientPlusProps?.topDesktop}
              topTablet={gradientPlusProps?.topTablet}
              bottomMobile={gradientPlusProps?.bottomMobile}
              bottomDesktop={gradientPlusProps?.bottomDesktop}
              bottomTablet={gradientPlusProps?.bottomTablet}
            />
          )}
        </div>
      </div>
    </div>
  );
}

