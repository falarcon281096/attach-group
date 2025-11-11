import React from 'react';
import { render } from '@testing-library/react';
import GradientPlus from '../src/components/GradientPlus';

import { describe } from '@jest/globals';

describe('GradientPlus', () => {
  test('aplica clases de posición responsive y gradiente en texto', () => {
    const { container } = render(
      <GradientPlus 
        leftMobile="-1rem"
        topMobile="2rem"
        gradientStartColor="#FFC351"
        gradientEndColor="#FF3F73"
      />
    );

    const wrapper = container.querySelector('div');
    expect(wrapper).toBeInTheDocument();
    const cls = (wrapper as HTMLElement).className;
    // clase negativa: -left-[1rem]
    expect(cls).toContain('-left-[1rem]');
    // top arbitrario
    expect(cls).toContain('top-[2rem]');
    // por defecto, bottom-0 si no se pasa bottom
    expect(cls).toContain('bottom-0');

    const plus = container.querySelector('span');
    expect(plus).toBeInTheDocument();
    expect(plus!.textContent).toBe('+');
    // estilo de gradiente aplicado
    expect((plus as HTMLElement).style.background).toContain('linear-gradient');
    expect((plus as HTMLElement).style.webkitBackgroundClip).toBe('text');
  });
});