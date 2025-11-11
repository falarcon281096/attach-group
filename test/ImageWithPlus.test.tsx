import React from 'react';
import { render } from '@testing-library/react';
import ImageWithPlus from '../src/components/ImageWithPlus';

import { describe } from '@jest/globals';

describe('ImageWithPlus', () => {
  test('muestra símbolo "+" con degradado y bordes redondeados según posición', () => {
    const { container } = render(
      <ImageWithPlus
        src="/images/test.jpg"
        alt="Imagen de prueba"
        width={600}
        height={400}
        position="RIGHT_DOWN"
      />
    );

    // símbolo +
    const plus = container.querySelector('span');
    expect(plus).toBeInTheDocument();
    expect(plus!.textContent).toBe('+');
    // degradado aplicado al texto
    expect((plus as HTMLElement).style.background).toContain('linear-gradient');

    // contenedor de imagen con bordes redondeados en el lado derecho
    const roundedRight = container.querySelector('.rounded-r-3xl');
    expect(roundedRight).toBeTruthy();
    // overflow-hidden para recorte limpio de bordes
    expect(roundedRight!.className).toContain('overflow-hidden');
  });
});