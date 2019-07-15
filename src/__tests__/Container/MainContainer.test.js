import React from "react";
import { shallow } from "enzyme";
import MainContainer from "../../Containers/MainContainer/MainContainer";

describe('Component should be rendered properly', () => {
    it('Render component', () => {
        expect(shallow(<MainContainer />)).toHaveLength(1);
    });
});