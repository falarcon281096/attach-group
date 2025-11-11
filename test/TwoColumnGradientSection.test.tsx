import React from 'react';
import { render } from '@testing-library/react';
import TwoColumnGradientSection from '../src/components/TwoColumnGradientSection';

import { describe } from '@jest/globals';

describe('TwoColumnGradientSection', () => {
  test('renderiza divisores responsive y aplica borde degradado en caja derecha', () => {
    const dividerGradient = 'linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)';

    const { container } = render(
      <TwoColumnGradientSection
        intro={<div>Intro</div>}
        left={<div>Left</div>}
        right={<div>Right content</div>}
        outro={<div>Outro</div>}
        showDivider={true}
        dividerGradient={dividerGradient}
        dividerWidth="2px"
        dividerPaddingX="12px"
        dividerOffsetX="0.5rem"
        rightBoxWithGradientBorder={true}
        rightBoxGradient={dividerGradient}
        rightBoxBorderRadius="16px"
        rightBoxPadding="16px"
      />
    );

    // divisores (mobile y desktop) con aria-hidden
    const hiddenDivs = container.querySelectorAll('div[aria-hidden="true"]');
    expect(hiddenDivs.length).toBeGreaterThan(0);
    // uno debe tener height (mobile)
    const mobileDivider = Array.from(hiddenDivs).find(d => (d as HTMLElement).style.height !== '');
    expect(mobileDivider).toBeTruthy();
    expect((mobileDivider as HTMLElement).style.background).toContain(dividerGradient);
    // otro debe tener width (desktop)
    const desktopDivider = Array.from(hiddenDivs).find(d => (d as HTMLElement).style.width !== '');
    expect(desktopDivider).toBeTruthy();
    expect((desktopDivider as HTMLElement).style.background).toContain(dividerGradient);
    expect((desktopDivider as HTMLElement).style.width).toBe('2px');

    // caja derecha con borde degradado aplicado via estilos inline
    const rightBox = Array.from(container.querySelectorAll('div')).find(d => (d as HTMLElement).style.borderImageSlice === '1');
    expect(rightBox).toBeTruthy();
    expect((rightBox as HTMLElement).style.borderImageSource).toContain(dividerGradient);
    expect((rightBox as HTMLElement).style.borderRadius).toBe('16px');
    expect((rightBox as HTMLElement).style.padding).toBe('16px');
  });
});