import React from "react";
import { create } from "react-test-renderer";

import Text from './Text';

describe("Text", () => {
  test("matches the snapshot", () => {
    const component = create(<Text>Text</Text>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});