"use client";

import React from "react";

interface ResponsiveHeadingProps {
  // Contenido
  children: React.ReactNode;
  
  // Nivel de heading (h1, h2, h3, h4, h5, h6)
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  
  // Tamaños de fuente (móvil, tablet, desktop)
  sizeMobile?: string;
  sizeTablet?: string;
  sizeDesktop?: string;
  
  // Leading/line-height
  leadingMobile?: string;
  leadingTablet?: string;
  leadingDesktop?: string;
  
  // Color (puede ser clase de Tailwind o valor CSS)
  color?: string;
  
  // Peso de fuente
  weight?: "thin" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
  
  // Tracking/letter-spacing
  tracking?: string;
  
  // Alineación
  align?: "left" | "center" | "right" | "justify";
  
  // Clases adicionales
  className?: string;
  
  // Margin bottom
  marginBottomMobile?: string;
  marginBottomTablet?: string;
  marginBottomDesktop?: string;
  
  // Margin top
  marginTopMobile?: string;
  marginTopTablet?: string;
  marginTopDesktop?: string;
}

export default function ResponsiveHeading({
  children,
  as = "h2",
  sizeMobile = "text-2xl",
  sizeTablet,
  sizeDesktop,
  leadingMobile,
  leadingTablet,
  leadingDesktop,
  color = "text-[#818181]",
  weight = "semibold",
  tracking,
  align = "left",
  className = "",
  marginBottomMobile = "mb-2",
  marginBottomTablet,
  marginBottomDesktop,
  marginTopMobile,
  marginTopTablet,
  marginTopDesktop,
}: ResponsiveHeadingProps) {
  const Component = as;
  
  // Mapeo de pesos
  const weightClasses = {
    thin: "font-thin",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black",
  };
  
  // Clases de alineación
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };
  
  // Construir clases de tamaño MEDIANTE CLASES DE TAILWIND o valores arbitrarios
  const sizeClasses: string[] = [];
  if (sizeMobile) {
    // Si ya incluye "text-" o es una clase válida
    if (sizeMobile.startsWith("text-")) {
      sizeClasses.push(sizeMobile);
    } else {
      // Si es un valor arbitrario (como "48px")
      sizeClasses.push(`text-[${sizeMobile}]`);
    }
  }
  if (sizeTablet) {
    const tabletSize = sizeTablet.startsWith("text-") ? sizeTablet : `text-[${sizeTablet}]`;
    sizeClasses.push(`md:${tabletSize}`);
  }
  if (sizeDesktop) {
    const desktopSize = sizeDesktop.startsWith("text-") ? sizeDesktop : `text-[${sizeDesktop}]`;
    sizeClasses.push(`lg:${desktopSize}`);
  }
  
  // Construir clases de leading
  const leadingClasses: string[] = [];
  if (leadingMobile) {
    const leading = leadingMobile.startsWith("leading-") ? leadingMobile : `leading-[${leadingMobile}]`;
    leadingClasses.push(leading);
  }
  if (leadingTablet) {
    const tabletLeading = leadingTablet.startsWith("leading-") ? leadingTablet : `leading-[${leadingTablet}]`;
    leadingClasses.push(`md:${tabletLeading}`);
  }
  if (leadingDesktop) {
    const desktopLeading = leadingDesktop.startsWith("leading-") ? leadingDesktop : `leading-[${leadingDesktop}]`;
    leadingClasses.push(`lg:${desktopLeading}`);
  }
  
  // Construir clases de margin bottom
  const mbClasses: string[] = [];
  if (marginBottomMobile) {
    const mb = marginBottomMobile.startsWith("mb-") ? marginBottomMobile : `mb-[${marginBottomMobile}]`;
    mbClasses.push(mb);
  }
  if (marginBottomTablet) {
    const mbTablet = marginBottomTablet.startsWith("mb-") ? marginBottomTablet : `mb-[${marginBottomTablet}]`;
    mbClasses.push(`md:${mbTablet}`);
  }
  if (marginBottomDesktop) {
    const mbDesktop = marginBottomDesktop.startsWith("mb-") ? marginBottomDesktop : `mb-[${marginBottomDesktop}]`;
    mbClasses.push(`lg:${mbDesktop}`);
  }
  
  // Construir clases de margin top
  const mtClasses: string[] = [];
  if (marginTopMobile) {
    const mt = marginTopMobile.startsWith("mt-") ? marginTopMobile : `mt-[${marginTopMobile}]`;
    mtClasses.push(mt);
  }
  if (marginTopTablet) {
    const mtTablet = marginTopTablet.startsWith("mt-") ? marginTopTablet : `mt-[${marginTopTablet}]`;
    mtClasses.push(`md:${mtTablet}`);
  }
  if (marginTopDesktop) {
    const mtDesktop = marginTopDesktop.startsWith("mt-") ? marginTopDesktop : `mt-[${marginTopDesktop}]`;
    mtClasses.push(`lg:${mtDesktop}`);
  }
  
  // Clase de tracking
  const trackingClass = tracking ? `tracking-[${tracking}]` : "";
  
  // Clase de color (puede ser texto de Tailwind o arbitrario)
  const colorClass = color && color.startsWith("text-") ? color : color ? `text-[${color}]` : "";
  
  const combinedClasses = [
    ...sizeClasses,
    ...leadingClasses,
    weightClasses[weight],
    colorClass,
    trackingClass,
    alignClasses[align],
    ...mbClasses,
    ...mtClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  
  return <Component className={combinedClasses}>{children}</Component>;
}

