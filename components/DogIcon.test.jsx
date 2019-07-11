/* eslint-env jest */

import { mount } from "enzyme";
import React from "react";
import DogIcon from "./DogIcon";

describe("<DogIcon/>", () => {
  it('display with collar"', () => {
    const wrapper = mount(<DogIcon withCollar={true} />);
    expect(wrapper.exists("#withCollarSVG")).toBe(true);
  });
  it('display without collar"', () => {
    const wrapper = mount(<DogIcon withCollar={false} />);
    expect(wrapper.exists("#withoutCollarSVG")).toBe(true);
  });
});
