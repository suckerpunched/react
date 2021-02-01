import React from "react";
import { create } from "react-test-renderer";

import Button from './Button';

describe("Button", () => {
  test("matches the snapshot", () => {
    const component = create(<Button>Button</Button>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});