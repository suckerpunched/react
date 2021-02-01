import React from "react";
import { create } from "react-test-renderer";

import Switch from './Switch';

describe("Switch", () => {
  test("matches the snapshot", () => {
    const component = create(<Switch/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});