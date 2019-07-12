/* eslint-env jest */

import { shallow } from "enzyme";
import React from "react";
import DogsView from "./DogsView";
import cssLoading from "./LoadingSpinner.scss";
import cssView from "./DogsView.scss";
import DogImage from "./DogImage";

describe("<DogsView/>", () => {
  it("display loading", () => {
    const wrapper = shallow(<DogsView isLoading={true} />);
    expect(wrapper.exists(cssLoading.LoadingSpinner)).toBe(true);
  });

  it("list items", () => {
    const wrapper = shallow(
      <DogsView
        list={["https://test.com/image.jpg"]}
        isLoading={false}
        category={"husky"}
        error={""}
      />
    );
    expect(wrapper.hasClass(cssView.DogsView)).toBe(true);
    expect(wrapper.exists(DogImage)).toBe(true);
  });

  it("display error", () => {
    const wrapper = shallow(
      <DogsView
        list={[]}
        isLoading={false}
        category={"husky"}
        error={"Test Error"}
      />
    );
    expect(wrapper.hasClass(cssView.DogsView)).toBe(true);
    expect(wrapper.exists(".DogsViewError")).toBe(true);
    expect(wrapper.find(".DogsViewError").text()).toBe("Test Error");
    expect(wrapper.exists(DogImage)).toBe(false);
  });
});
