import React from 'react';
import { render } from '@testing-library/react';
import HeaderAthena from '../src/components/HeaderAthena';

// describe is provided globally by Jest, no import needed
import { describe } from '@jest/globals';

describe('HeaderAthena', () => {
  test('renderiza un header estático y transparente (no fixed)', () => {
    const { container } = render(<HeaderAthena showBorder={false} />);
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
    expect(header!.className).toContain('static');
    expect(header!.className).not.toContain('fixed');
    expect(header!.className).toContain('bg-transparent');
  });
});