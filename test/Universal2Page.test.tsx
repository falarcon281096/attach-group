import React from 'react';
import { render } from '@testing-library/react';
import Page from '../src/app/casos-de-exito/universal-2/page';

describe('Página Universal-2 (Casos de Éxito)', () => {
  it('usa layout flex responsivo y evita posicionamiento absoluto en la imagen', () => {
    const { container } = render(<Page />);

    // Layout principal flex-col -> lg:flex-row
    const layout = Array.from(container.querySelectorAll('div')).find((el) =>
      el.className.includes('flex') &&
      el.className.includes('flex-col') &&
      el.className.includes('lg:flex-row')
    );
    expect(layout).toBeDefined();

    // El contenedor de la imagen no debe usar posicionamiento absoluto
    const imageContainers = Array.from(container.querySelectorAll('div')).filter(
      (el) => el.querySelector('img')
    );
    expect(imageContainers.length).toBeGreaterThan(0);
    imageContainers.forEach((el) => {
      expect(el.className).not.toContain('absolute');
    });

    // Debe respetar el orden y márgenes responsivos (mt-6 en móvil, no en desktop)
    const hasMobileMargin = imageContainers.some((el) => el.className.includes('mt-6'));
    expect(hasMobileMargin).toBe(true);
  });
});