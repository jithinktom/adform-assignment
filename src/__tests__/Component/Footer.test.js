import React from "react";
import { shallow } from "enzyme";
import Footer from "../../Components/Footer/Footer";

describe('Component should be rendered properly', () => {
    it('Render component', () => {
        expect(shallow(<Footer />)).toHaveLength(1);
    });
});