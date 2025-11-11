import React from 'react';
import { render } from '@testing-library/react';
import Page from '../src/app/athena-ads/page';

describe('Página Athena Ads', () => {
  it('usa un contenedor de gradiente compartido para header y hero', () => {
    const { container } = render(<Page />);
    // Busca un contenedor con gradiente y borde inferior redondeado
    const gradientContainers = Array.from(
      container.querySelectorAll('div')
    ).filter((el) => el.className.includes('bg-gradient-to-r'));

    expect(gradientContainers.length).toBeGreaterThan(0);
    const shared = gradientContainers.find((el) =>
      el.className.includes('rounded-b-[30px]')
    );
    expect(shared).toBeDefined();

    // Header dentro del contenedor debe ser transparente
    const header = shared!.querySelector('header');
    expect(header).toBeInTheDocument();
    expect(header!.className).toContain('bg-transparent');
  });
});