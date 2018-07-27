import { mount } from "enzyme";

import AzActionGroups from "../AzActionGroups";

describe("<AzActionGroups /> component test", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<AzActionGroups />);
  });

  it("should display in page", () => {
    const AzActionGroupsNode = wrapper.find(AzActionGroups);
    expect(AzActionGroupsNode.length).toBe(1);
  })
})
