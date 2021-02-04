import React from "react";
import { create } from "react-test-renderer";

import Modal from './Modal';

describe("Modal", () => {
  test("matches the snapshot", () => {
    const component = create(<Modal>Modal</Modal>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});