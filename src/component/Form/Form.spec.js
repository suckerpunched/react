import React from "react";
import { create } from "react-test-renderer";

import Form from './Form';

describe("Form", () => {
  test("matches the snapshot", () => {
    const component = create(<Form>Form</Form>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});