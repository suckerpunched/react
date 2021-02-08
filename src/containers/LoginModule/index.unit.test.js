import React from 'react';
import { render } from '@testing-library/react';

import { LoginProvider } from '../hooks/useLogin/useLogin' 
import LoginModule from './';

describe('LoginModule', () => {
  test('matches snapshot', () => {
    const wrapper = ({children}) => (<LoginProvider>{children}</LoginProvider>)
    const { container } = render(<LoginModule />, { wrapper });
    expect(container.cloneNode(true)).toMatchSnapshot();
  });
});