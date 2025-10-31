"use client";

import React from "react";

interface TwoColumnGradientSectionProps {
  // Contenido superior (intro)
  intro?: React.ReactNode;
  // Contenido de la columna izquierda
  left: React.ReactNode;
  // Contenido de la columna derecha
  right: React.ReactNode;
  // Contenido inferior (outro)
  outro?: React.ReactNode;

  // Estilos del contenedor principal
  sectionClassName?: string;
  containerClassName?: string;

  // Control del divisor vertical entre columnas (solo md+)
  showDivider?: boolean;
  dividerGradient?: string; // linear-gradient(...)
  dividerWidth?: string; // ej: '2px'
  dividerPaddingX?: string; // espacio horizontal respecto al contenido (aplicado como margin)
  dividerOffsetX?: string; // desplazar el divisor horizontalmente (ej: '0.5rem' para gap-4)
  dividerClassName?: string;

  // Espaciados y columnas
  gapClassName?: string; // ej: 'gap-4'

  // Borde degradado opcional para la caja derecha
  rightBoxWithGradientBorder?: boolean;
  rightBoxBorderRadius?: string; // ej: '16px'
  rightBoxPadding?: string; // ej: '16px'
  rightBoxGradient?: string; // linear-gradient para border-image-source
  rightBoxClassName?: string;

  // Colores y estilos comunes
  introClassName?: string;
  outroClassName?: string;
}

export default function TwoColumnGradientSection({
  intro,
  left,
  right,
  outro,
  sectionClassName = "bg-white py-24 text-gray-900",
  containerClassName = "max-w-7xl mx-auto px-6 lg:px-12",
  showDivider = true,
  dividerGradient = "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
  dividerWidth = "2px",
  dividerPaddingX = "0",
  dividerOffsetX = "0",
  dividerClassName = "",
  gapClassName = "gap-4",
  rightBoxWithGradientBorder = false,
  rightBoxBorderRadius = "16px",
  rightBoxPadding = "16px",
  rightBoxGradient = "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
  rightBoxClassName = "",
  introClassName = "",
  outroClassName = "",
}: TwoColumnGradientSectionProps) {
  const sanitizeArbitrary = (v: string) => v.replace(/\s+/g, '_');
  const hasDividerPad = dividerPaddingX !== "0" && dividerPaddingX !== "0px" && dividerPaddingX !== "0rem";
  const leftPadClass = hasDividerPad ? `md:pr-[${sanitizeArbitrary(dividerPaddingX)}]` : "";
  const rightPadClass = hasDividerPad ? `md:pl-[${sanitizeArbitrary(dividerPaddingX)}]` : "";
  const rightContent = (
    <div
      className={rightBoxWithGradientBorder ? rightBoxClassName : undefined}
      style={
        rightBoxWithGradientBorder
          ? {
              border: `1px solid`,
              borderImageSource: rightBoxGradient,
              borderImageSlice: 1,
              borderRadius: rightBoxBorderRadius,
              padding: rightBoxPadding,
            }
          : undefined
      }
    >
      {right}
    </div>
  );

  return (
    <section className={`${sectionClassName} font-['graphik']`}>
      <div className={containerClassName}>
        {intro && (
          <div className={`mb-10 ${introClassName}`}>{intro}</div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-2 items-start ${gapClassName} relative`}>
          {/* Columna izquierda */}
          <div className={`relative z-10 ${leftPadClass}`}>
            {left}
          </div>

          {/* Divisor horizontal para móvil */}
          {showDivider && (
            <div
              className={`md:hidden my-6 ${dividerClassName}`}
              style={{
                height: dividerWidth,
                width: dividerPaddingX && dividerPaddingX !== '0' ? `calc(100% - (2 * ${dividerPaddingX}))` : '100%',
                background: dividerGradient,
              }}
              aria-hidden="true"
            />
          )}

          {/* Columna derecha */}
          <div className={`relative z-10 ${rightPadClass}`}>
            {rightContent}
          </div>

          {/* Divisor vertical (solo md+) */}
          {showDivider && (
            <div
              className={`hidden md:block absolute top-0 bottom-0 left-1/2 ${dividerClassName}`}
              style={{
                width: dividerWidth,
                background: dividerGradient,
                transform: `translateX(calc(-49% - ${dividerOffsetX}))`,
              }}
              aria-hidden="true"
            />
          )}
        </div>

        {outro && (
          <div className={`mt-10 ${outroClassName}`}>{outro}</div>
        )}
      </div>
    </section>
  );
}


