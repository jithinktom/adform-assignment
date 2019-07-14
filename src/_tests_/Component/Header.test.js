import React from "react";
import { shallow } from "enzyme";
import Header from "../../Components/Header/Header";

describe('Component should be rendered properly', () => {
    it('Render component', () => {
        expect(shallow(<Header />)).toHaveLength(1);
    });
});