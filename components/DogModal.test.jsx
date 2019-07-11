/* eslint-env jest */

import { shallow, mount } from "enzyme";
import React from "react";
import DogModal from "./DogModal";
import cssModal from "./DogModal.scss";
import cssImage from "./DogImage.scss";

describe("<DogModal/>", () => {
  it("has the correct className", () => {
    const wrapper = shallow(
      <DogModal imageURL="http://placehold.it/300x300" />
    );
    expect(wrapper.children().hasClass(cssModal.DogModal)).toBe(true);
  });

  it("render image", () => {
    const wrapper = shallow(
      <DogModal imageURL="http://placehold.it/300x300" />
    );
    expect(wrapper.exists(cssImage.DogImage)).toBe(true);
  });

  it("handle onClick", () => {
    let i = 0;
    const wrapper = mount(
      <DogModal imageURL="http://placehold.it/300x300" onClick={() => i++} />
    );
    wrapper.children().simulate("click");
    expect(i).toBe(1);
  });
});
