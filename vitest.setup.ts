import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';

// Mock Next.js Image to render a basic img in tests
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default undefined;

// Provide simple mocks for Next.js components used in tests
vi.mock('next/image', () => ({
  default: (props: any) => {
    const { src, alt, ...rest } = props;
    // Render as a regular img for testing purposes
    return React.createElement('img', { src, alt, ...rest });
  },
}));

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: any) => {
    return React.createElement('a', { href, ...rest }, children);
  },
}));