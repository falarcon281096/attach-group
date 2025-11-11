import React from 'react';
import { render } from '@testing-library/react';
import AthenaCards from '../src/components/AthenaCards';

describe('AthenaCards', () => {
  it('posiciona correctamente los íconos en esquinas inferiores (sin absolutar imágenes)', () => {
    const { container } = render(<AthenaCards />);

    // Los contenedores de íconos deben estar posicionados hacia las esquinas
    const absoluteDivs = Array.from(container.querySelectorAll('div')).filter(
      (el) => el.className.includes('absolute')
    );
    // Debe existir al menos uno con bottom-left y otro con bottom-right
    const hasBottomLeft = absoluteDivs.some(
      (el) => el.className.includes('bottom-4') && el.className.includes('-left-')
    );
    const hasBottomRight = absoluteDivs.some(
      (el) => el.className.includes('bottom-4') && el.className.includes('-right-')
    );
    expect(hasBottomLeft).toBe(true);
    expect(hasBottomRight).toBe(true);
  });
});