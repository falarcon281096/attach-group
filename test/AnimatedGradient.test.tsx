import React from 'react';
import { render } from '@testing-library/react';
import AnimatedGradient from '../src/components/AnimatedGradient';

import { describe } from '@jest/globals';
import { expect } from 'vitest';

describe('AnimatedGradient', () => {
  it('no incluye overlay ni margen negativo y se renderiza correctamente', () => {
    const { container } = render(<AnimatedGradient />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
    // No debe tener clases de margen negativo del header fijo
    expect(section!.className).not.toContain('-mt-');
    // No debe existir overlay interno del gradiente
    const overlay = container.querySelector('.bg-gradient-to-br');
    expect(overlay).toBeNull();
  });
});