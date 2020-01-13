import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import Header from "../header";

Enzyme.configure({ adapter: new Adapter() });

const component = <Header />;

describe("Header component", () => {
  const wrapper = mount(component);

  it("Should render Header component", () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it("Should render proper headings", () => {
    expect(wrapper.find("Text").length).toBe(2);
  });

  it("Should render main heading", () => {
    expect(wrapper.find("Text").at(0).text()).toEqual("Daher Test Project");
  });

  it("Should render github link title", () => {
    expect(wrapper.find("Text").at(1).text()).toEqual("Click here for source code");
  });
});
