import React from 'react';
import { render } from '@testing-library/react';
import Header from '../src/components/Header';

import { describe } from '@jest/globals';

describe('Header', () => {
  test('aplica fondo degradado y es fixed por defecto', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
    expect(header!.className).toContain('fixed');
    expect(header!.className).toContain('bg-gradient-to-r');
  });

  test('variant="galileo" usa el degradado correcto', () => {
    const { container } = render(<Header variant="galileo" />);
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
    expect(header!.className).toContain('bg-gradient-to-r');
    expect(header!.className).toContain('from-[#FF3F73]');
    expect(header!.className).toContain('to-[#FFC351]');
  });

  test('showBorder=true agrega borde lateral en contenedor interno', () => {
    const { container } = render(<Header showBorder={true} />);
    const inner = container.querySelector('header > div');
    expect(inner).toBeInTheDocument();
    expect(inner!.className).toContain('lg:border-l-2');
  });
});