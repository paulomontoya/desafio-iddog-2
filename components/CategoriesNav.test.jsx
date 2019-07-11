/* eslint-env jest */

import { shallow } from "enzyme";
import React from "react";
import CategoriesNav from "./CategoriesNav";
import css from "./CategoriesNav.scss";

describe("<CategoriesNav/>", () => {
  it("render all 4 categories", () => {
    const wrapper = shallow(<CategoriesNav />);
    expect(wrapper.find("a").length).toBe(4);
  });

  it("Add active class in current category", () => {
    const wrapper = shallow(<CategoriesNav currentCategory={"husky"} />);
    expect(wrapper.find(`a.${css.LinkActive}`).text()).toBe("husky");
  });
});
