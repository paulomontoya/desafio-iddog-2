/* eslint-env jest */

import { shallow, mount } from "enzyme";
import React from "react";
import TokenPersister from "./TokenPersister";

jest.mock("../routes", () => {
  return {
    Router: {
      pushRoute: route => {}
    }
  };
});

describe("<TokenPersister/>", () => {
  beforeEach(() => {
    window.localStorage.removeItem("di-token");
  });

  it("renders their children", () => {
    const wrapper = mount(
      <TokenPersister currentToken="token__jest">
        <div className="test__jest" />
      </TokenPersister>
    );

    expect(wrapper.exists(".test__jest")).toBe(true);
  });

  it("do not render if has no token", () => {
    const wrapper = mount(
      <TokenPersister currentToken="">
        <div className="test__jest" />
      </TokenPersister>
    );
    expect(wrapper.exists(".test__jest")).toBe(false);
  });
});
