"use client";

import React, { useEffect, useRef } from 'react';

interface GradientColorStop {
  color: string;
  position: string;
}

type CssLength = string | number;

interface GradientPlusProps {
  className?: string;
  containerClassName?: string;
  // Position properties
  left?: CssLength;
  leftMobile?: CssLength;
  leftTablet?: CssLength;
  leftDesktop?: CssLength;
  right?: CssLength;
  rightMobile?: CssLength;
  rightTablet?: CssLength;
  rightDesktop?: CssLength;
  top?: CssLength;
  topMobile?: CssLength;
  topTablet?: CssLength;
  topDesktop?: CssLength;
  bottom?: CssLength;
  bottomMobile?: CssLength;
  bottomTablet?: CssLength;
  bottomDesktop?: CssLength;
  // Padding properties
  paddingBottom?: CssLength;
  paddingTop?: CssLength;
  paddingLeft?: CssLength;
  paddingRight?: CssLength;
  padding?: CssLength;
  // Transform properties
  transform?: string;
  rotate?: string;
  translateX?: CssLength;
  translateY?: CssLength;
  // Size properties
  sizeMobile?: CssLength;
  sizeTablet?: CssLength;
  sizeDesktop?: CssLength;
  // Layer properties
  zIndex?: string | number;
  // Gradient properties
  gradientAngle?: string;
  gradientColors?: GradientColorStop[] | string[];
  gradientStartColor?: string;
  gradientEndColor?: string;
  gradientCustom?: string; // Full gradient string for complete control
}

export default function GradientPlus({
  className = "",
  containerClassName = "",
  // Position
  left,
  leftMobile = "-1.5rem",
  leftTablet = "-2rem",
  leftDesktop = "-4rem",
  right,
  rightMobile,
  rightTablet,
  rightDesktop,
  top,
  topMobile,
  topTablet,
  topDesktop,
  bottom = "0",
  bottomMobile,
  bottomTablet,
  bottomDesktop,
  // Padding
  paddingBottom = "1rem",
  paddingTop,
  paddingLeft,
  paddingRight,
  padding,
  // Transform
  transform,
  rotate,
  translateX,
  translateY,
  // Size
  sizeMobile = "8rem",
  sizeTablet = "10rem",
  sizeDesktop = "13rem",
  // Layer
  zIndex,
  // Gradient
  gradientAngle = "276.34deg",
  gradientColors,
  gradientStartColor,
  gradientEndColor,
  gradientCustom,
}: GradientPlusProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const normalizeLength = (value: CssLength | undefined): string | undefined => {
    if (value === undefined) return undefined;
    if (typeof value === 'number') return `${value}px`;
    return value;
  };

  // Build gradient string
  const buildGradient = (): string => {
    // If custom gradient is provided, use it directly
    if (gradientCustom) {
      return gradientCustom;
    }

    // If gradientColors array is provided
    if (gradientColors && gradientColors.length > 0) {
      if (Array.isArray(gradientColors) && typeof gradientColors[0] === 'object') {
        // Array of objects with color and position
        const stops = (gradientColors as GradientColorStop[])
          .map((stop) => `${stop.color} ${stop.position}`)
          .join(', ');
        return `linear-gradient(${gradientAngle}, ${stops})`;
      } else if (Array.isArray(gradientColors)) {
        // Simple array of colors - distribute evenly
        const stops = (gradientColors as string[])
          .map((color, index) => {
            const position = index === 0 ? '0%' : 
                            index === gradientColors.length - 1 ? '100%' : 
                            `${(index / (gradientColors.length - 1)) * 100}%`;
            return `${color} ${position}`;
          })
          .join(', ');
        return `linear-gradient(${gradientAngle}, ${stops})`;
      }
    }

    // If start and end colors are provided
    if (gradientStartColor && gradientEndColor) {
      return `linear-gradient(${gradientAngle}, ${gradientStartColor}, ${gradientEndColor})`;
    }

    // Default gradient
    return 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)';
  };

  const gradientString = buildGradient();

  useEffect(() => {
    if (!spanRef.current || !containerRef.current) return;

    const updateResponsiveStyles = () => {
      if (!spanRef.current || !containerRef.current) return;
      const width = window.innerWidth;

      // Update font size responsively
      if (width >= 1024) {
        const v = normalizeLength(sizeDesktop);
        if (v !== undefined) spanRef.current.style.fontSize = v;
      } else if (width >= 768) {
        const v = normalizeLength(sizeTablet);
        if (v !== undefined) spanRef.current.style.fontSize = v;
      } else {
        const v = normalizeLength(sizeMobile);
        if (v !== undefined) spanRef.current.style.fontSize = v;
      }

      // Helper to pick value based on breakpoint
      const pick = (m?: CssLength, t?: CssLength, d?: CssLength): CssLength | undefined => {
        const mv = m;
        const tv = t ?? mv;
        const dv = d ?? tv;
        if (width >= 1024) return dv;
        if (width >= 768) return tv;
        return mv;
      };

      // Update positions responsively (only when single-value prop is not provided)
      if (!left) {
        const v = pick(leftMobile, leftTablet, leftDesktop);
        const nv = normalizeLength(v);
        if (nv !== undefined) containerRef.current.style.left = nv;
      }
      if (!right) {
        const v = pick(rightMobile, rightTablet, rightDesktop);
        const nv = normalizeLength(v);
        if (nv !== undefined) containerRef.current.style.right = nv;
      }
      if (!top) {
        const v = pick(topMobile, topTablet, topDesktop);
        const nv = normalizeLength(v);
        if (nv !== undefined) containerRef.current.style.top = nv;
      }
      if (!bottom) {
        const v = pick(bottomMobile, bottomTablet, bottomDesktop);
        const nv = normalizeLength(v);
        if (nv !== undefined) containerRef.current.style.bottom = nv;
      }
    };

    updateResponsiveStyles();
    window.addEventListener('resize', updateResponsiveStyles);
    return () => window.removeEventListener('resize', updateResponsiveStyles);
  }, [
    sizeMobile,
    sizeTablet,
    sizeDesktop,
    left,
    leftMobile,
    leftTablet,
    leftDesktop,
    right,
    rightMobile,
    rightTablet,
    rightDesktop,
    top,
    topMobile,
    topTablet,
    topDesktop,
    bottom,
    bottomMobile,
    bottomTablet,
    bottomDesktop,
  ]);

  // Build position classes using Tailwind arbitrary values
  const buildPositionClasses = (prop: string | undefined, mobile: string | undefined, tablet: string | undefined, desktop: string | undefined, prefix: string): string => {
    if (prop) return ""; // If single value provided, use inline style
    if (!mobile && !tablet && !desktop) return "";
    
    const mobileValue = mobile || "0";
    const tabletValue = tablet || mobileValue;
    const desktopValue = desktop || tabletValue;
    
    if (mobileValue === tabletValue && tabletValue === desktopValue) {
      return `${prefix}-[${mobileValue}]`;
    }
    return `${prefix}-[${mobileValue}] md:${prefix}-[${tabletValue}] lg:${prefix}-[${desktopValue}]`;
  };

  // Position handled via inline styles to support decimals and dynamic values reliably
  const leftClasses = "";
  const rightClasses = "";
  const topClasses = "";
  const bottomClasses = "";

  // Build inline styles for position (when single value is provided)
  const positionStyle: React.CSSProperties = {};
  const leftNorm = normalizeLength(left);
  const rightNorm = normalizeLength(right);
  const topNorm = normalizeLength(top);
  const bottomNorm = normalizeLength(bottom);
  if (leftNorm !== undefined) positionStyle.left = leftNorm;
  if (rightNorm !== undefined) positionStyle.right = rightNorm;
  if (topNorm !== undefined) positionStyle.top = topNorm;
  if (bottomNorm !== undefined) positionStyle.bottom = bottomNorm;
  
  // Build padding styles
  if (padding !== undefined) {
    const v = normalizeLength(padding);
    if (v !== undefined) positionStyle.padding = v;
  } else {
    const pt = normalizeLength(paddingTop);
    const pb = normalizeLength(paddingBottom);
    const pl = normalizeLength(paddingLeft);
    const pr = normalizeLength(paddingRight);
    if (pt !== undefined) positionStyle.paddingTop = pt;
    if (pb !== undefined) positionStyle.paddingBottom = pb;
    if (pl !== undefined) positionStyle.paddingLeft = pl;
    if (pr !== undefined) positionStyle.paddingRight = pr;
  }

  // Build transform
  const transformParts: string[] = [];
  if (translateX !== undefined) transformParts.push(`translateX(${normalizeLength(translateX)})`);
  if (translateY !== undefined) transformParts.push(`translateY(${normalizeLength(translateY)})`);
  if (rotate) transformParts.push(`rotate(${rotate})`);
  if (transform) transformParts.push(transform);
  if (transformParts.length > 0) {
    positionStyle.transform = transformParts.join(' ');
  }

  // Add z-index
  if (zIndex !== undefined) {
    positionStyle.zIndex = typeof zIndex === 'number' ? zIndex : zIndex;
  }

  // Default bottom class if no bottom values are provided
  const defaultBottomClass = !bottom && !bottomMobile && !bottomTablet && !bottomDesktop ? "bottom-0" : "";

  return (
    <div 
      ref={containerRef}
      className={`absolute ${defaultBottomClass} ${containerClassName}`.trim().replace(/\s+/g, ' ')}
      style={positionStyle}
    >
      <span
        ref={spanRef}
        className={`font-bold leading-none inline-block ${className}`}
        style={{
          fontSize: sizeMobile,
          background: gradientString,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >+</span>
    </div>
  );
}
