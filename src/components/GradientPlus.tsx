"use client";

import React, { useEffect, useRef } from 'react';

interface GradientColorStop {
  color: string;
  position: string;
}

interface GradientPlusProps {
  className?: string;
  containerClassName?: string;
  // Position properties
  left?: string;
  leftMobile?: string;
  leftTablet?: string;
  leftDesktop?: string;
  right?: string;
  rightMobile?: string;
  rightTablet?: string;
  rightDesktop?: string;
  top?: string;
  topMobile?: string;
  topTablet?: string;
  topDesktop?: string;
  bottom?: string;
  bottomMobile?: string;
  bottomTablet?: string;
  bottomDesktop?: string;
  // Padding properties
  paddingBottom?: string;
  paddingTop?: string;
  paddingLeft?: string;
  paddingRight?: string;
  padding?: string;
  // Transform properties
  transform?: string;
  rotate?: string;
  translateX?: string;
  translateY?: string;
  // Size properties
  sizeMobile?: string;
  sizeTablet?: string;
  sizeDesktop?: string;
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
    if (!spanRef.current) return;

    const updateSize = () => {
      if (!spanRef.current) return;
      const width = window.innerWidth;
      if (width >= 1024) {
        spanRef.current.style.fontSize = sizeDesktop;
      } else if (width >= 768) {
        spanRef.current.style.fontSize = sizeTablet;
      } else {
        spanRef.current.style.fontSize = sizeMobile;
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [sizeMobile, sizeTablet, sizeDesktop]);

  // Apply responsive inline positions to avoid relying on dynamic Tailwind classes
  useEffect(() => {
    if (!containerRef.current) return;

    const applyResponsivePositions = () => {
      if (!containerRef.current) return;
      const width = window.innerWidth;

      const pick = (m?: string, t?: string, d?: string): string | undefined => {
        const mv = m;
        const tv = t ?? mv;
        const dv = d ?? tv;
        if (width >= 1024) return dv;
        if (width >= 768) return tv;
        return mv;
      };

      // Left/Right
      if (left === undefined) {
        const v = pick(leftMobile, leftTablet, leftDesktop);
        if (v !== undefined) {
          containerRef.current.style.left = v;
          containerRef.current.style.right = '';
        }
      }
      if (right === undefined) {
        const v = pick(rightMobile, rightTablet, rightDesktop);
        if (v !== undefined) {
          containerRef.current.style.right = v;
          // If right is set, clear left so positioning isn't conflicted
          if (left === undefined) containerRef.current.style.left = '';
        }
      }

      // Top/Bottom
      if (top === undefined) {
        const v = pick(topMobile, topTablet, topDesktop);
        if (v !== undefined) containerRef.current.style.top = v;
      }
      if (bottom === undefined) {
        const v = pick(bottomMobile, bottomTablet, bottomDesktop);
        if (v !== undefined) containerRef.current.style.bottom = v;
      }
    };

    applyResponsivePositions();
    window.addEventListener('resize', applyResponsivePositions);
    return () => window.removeEventListener('resize', applyResponsivePositions);
  }, [
    left, leftMobile, leftTablet, leftDesktop,
    right, rightMobile, rightTablet, rightDesktop,
    top, topMobile, topTablet, topDesktop,
    bottom, bottomMobile, bottomTablet, bottomDesktop,
  ]);

  // Build position classes using Tailwind arbitrary values, supporting negative via '-left-[...]'
  const mkClass = (prefix: string, value: string): string => {
    const trimmed = value.trim();
    const isNegative = trimmed.startsWith('-');
    const abs = isNegative ? trimmed.slice(1) : trimmed;
    return `${isNegative ? '-' : ''}${prefix}-[${abs}]`;
  };

  const buildPositionClasses = (
    prop: string | undefined,
    mobile: string | undefined,
    tablet: string | undefined,
    desktop: string | undefined,
    prefix: string
  ): string => {
    if (prop) return ""; // If single inline value provided, skip classes
    if (!mobile && !tablet && !desktop) return "";

    const mv = mobile;
    const tv = tablet ?? mv;
    const dv = desktop ?? tv;
    if (!mv && !tv && !dv) return "";

    if (mv && tv === mv && dv === mv) {
      return mkClass(prefix, mv);
    }
    const parts: string[] = [];
    if (mv) parts.push(mkClass(prefix, mv));
    if (tv && tv !== mv) parts.push(`md:${mkClass(prefix, tv)}`);
    if (dv && dv !== tv) parts.push(`lg:${mkClass(prefix, dv)}`);
    return parts.join(' ');
  };

  const leftClasses = buildPositionClasses(left, leftMobile, leftTablet, leftDesktop, "left");
  const rightClasses = buildPositionClasses(right, rightMobile, rightTablet, rightDesktop, "right");
  const topClasses = buildPositionClasses(top, topMobile, topTablet, topDesktop, "top");
  const bottomClasses = buildPositionClasses(bottom, bottomMobile, bottomTablet, bottomDesktop, "bottom");

  // Build inline styles for position (when single value is provided)
  const positionStyle: React.CSSProperties = {};
  if (left) positionStyle.left = left;
  if (right) positionStyle.right = right;
  if (top) positionStyle.top = top;
  if (bottom) positionStyle.bottom = bottom;
  
  // Build padding styles
  if (padding) {
    positionStyle.padding = padding;
  } else {
    if (paddingTop) positionStyle.paddingTop = paddingTop;
    if (paddingBottom) positionStyle.paddingBottom = paddingBottom;
    if (paddingLeft) positionStyle.paddingLeft = paddingLeft;
    if (paddingRight) positionStyle.paddingRight = paddingRight;
  }

  // Build transform
  const transformParts: string[] = [];
  if (translateX) transformParts.push(`translateX(${translateX})`);
  if (translateY) transformParts.push(`translateY(${translateY})`);
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
      className={`absolute ${defaultBottomClass} ${leftClasses} ${rightClasses} ${topClasses} ${bottomClasses} ${containerClassName}`.trim().replace(/\s+/g, ' ')}
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
