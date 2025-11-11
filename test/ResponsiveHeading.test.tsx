import React from 'react';
import { render } from '@testing-library/react';
import ResponsiveHeading from '../src/components/ResponsiveHeading';

import { describe } from '@jest/globals';

describe('ResponsiveHeading', () => {
  test('compone clases correctamente según props', () => {
    const { getByText } = render(
      <ResponsiveHeading
        as="h2"
        sizeMobile="text-3xl"
        sizeDesktop="48px"
        color="#818181"
        weight="semibold"
        align="center"
        marginBottomMobile="mb-2"
      >
        Encabezado de prueba
      </ResponsiveHeading>
    );

    const h = getByText('Encabezado de prueba');
    expect(h.tagName).toBe('H2');
    const cls = (h as HTMLElement).className;
    expect(cls).toContain('text-3xl');
    expect(cls).toContain('lg:text-[48px]');
    expect(cls).toContain('text-[#818181]');
    expect(cls).toContain('font-semibold');
    expect(cls).toContain('text-center');
    expect(cls).toContain('mb-2');
  });
});