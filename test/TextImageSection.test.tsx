import React from 'react';
import { render } from '@testing-library/react';
import TextImageSection from '../src/components/TextImageSection';

import { describe } from '@jest/globals';

describe('TextImageSection', () => {
  test('muestra título con degradado, imagen y GradientPlus', () => {
    const title = 'Precalificación de leads';
    const gradient = 'linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)';

    const { container, getByText } = render(
      <TextImageSection
        title={title}
        titleGradient={gradient}
        text={<p>Contenido de prueba</p>}
        imageSrc="/images/prueba.jpg"
        imageAlt="Imagen de sección"
        imageWidth={800}
        imageHeight={400}
        showGradientPlus={true}
      />
    );

    const h2 = getByText(title);
    expect(h2).toBeInTheDocument();
    const style = (h2 as HTMLElement).style;
    expect(style.backgroundImage).toContain(gradient);
    expect(style.webkitBackgroundClip).toBe('text');

    // la imagen debe estar presente
    const img = container.querySelector('img[alt="Imagen de sección"]');
    expect(img).toBeTruthy();

    // el plus de GradientPlus debe existir
    const plus = Array.from(container.querySelectorAll('span')).find(el => el.textContent === '+');
    expect(plus).toBeTruthy();
  });
});