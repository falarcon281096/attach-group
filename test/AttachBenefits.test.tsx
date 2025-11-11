import React from 'react';
import { render } from '@testing-library/react';
import AttachBenefits from '../src/components/AttachBenefits';

describe('AttachBenefits', () => {
  it('renderiza tarjetas con borde redondeado y gradiente de borde', () => {
    const { container } = render(<AttachBenefits />);

    const items = Array.from(container.querySelectorAll('.benefit-item'));
    expect(items.length).toBeGreaterThan(0);

    // Verificar estilos inline del borde y gradiente
    items.forEach((item) => {
      const style = (item as HTMLElement).style;
      expect(style.borderRadius).toBe('1rem');
      expect(style.backgroundImage).toContain('linear-gradient(#464646, #464646)');
      expect(style.backgroundImage).toContain('linear-gradient(109.97deg, #2F7DE1 1.8%, #22D3C5 99.93%)');
      expect(style.backgroundClip).toBe('padding-box, border-box');
    });

    // Verificar el ícono y su fondo
    const icon = container.querySelector('.benefit-item > span');
    expect(icon).toBeInTheDocument();
    const iconStyle = (icon as HTMLElement).style;
    expect(iconStyle.background).toBe('#22D1C4');
  });
});