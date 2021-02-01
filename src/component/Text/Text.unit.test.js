import React from "react";
import { render, screen } from '@testing-library/react';
import { create } from "react-test-renderer";

import Text from './Text';

describe("Text", () => {
  test("matches the snapshot", () => {
    const component = create(<Text>Text</Text>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('renders with correct text', () => {
    render(<Text>Testing Is Fun!</Text>);

    const text = screen.getByText('Testing Is Fun!')
    expect(text).toBeInTheDocument();
  });
});