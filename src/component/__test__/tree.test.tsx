import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { data } from "src/constant";
import Tree from "../tree";

Enzyme.configure({ adapter: new Adapter() });

const component = <Tree data={data}/>;

describe("Tree component", () => {
  const wrapper = mount(component);

  it("Should render Tree component", () => {
    expect(wrapper.find(Tree).length).toBe(1);
  });
});
