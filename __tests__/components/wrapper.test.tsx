import React from "react";
import { shallow, mount } from "enzyme";

import { Wrapper } from '../../components/Wrapper';


describe('Content', () => {
    it('should create a new content', () => {
        const wrapper = mount(<Wrapper />);
        // console.log(wrapper.debug());
    })
})