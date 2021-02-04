import React from "react";
import { create } from "react-test-renderer";

import Backdrop from './Backdrop';

describe("Backdrop", () => {
  test("matches the snapshot", () => {
    const component = create(<Backdrop/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});