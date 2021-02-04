import React from 'react';
import { render } from '@testing-library/react';
import LoginModule from './';

describe('LoginModule', () => {
  test('matches snapshot', () => {
    const { container } = render(<LoginModule />);
    expect(container.cloneNode(true)).toMatchSnapshot();
  });
});