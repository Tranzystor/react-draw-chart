import React from "react";
import { shallow } from "enzyme";

import Area from "./Area";

describe("<Area />", () => {
  it("should render", () => {
    const wrapper = shallow(<Area />);
    expect(wrapper).toBeDefined();
  });
});
