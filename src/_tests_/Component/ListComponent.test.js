import React from "react";
import { shallow, mount } from "enzyme";
import ListComponent from "../../Components/ListComponent/ListComponent";

describe('Component should be rendered properly', () => {
    let component;
    const { tableHeaders, list, rowNames } = {
        tableHeaders: ["Id", "Name", "End Date", "Start Date", "Budget"],
        list: [
            {
                name: "Name",
                id: 1,
                endDate: "09/07/2019",
                startDate: "09/10/2019",
                Budget: 1234
            }
        ],
        rowNames: ["id", "name", "startDate", "endDate", "Budget"]
    }

    beforeEach(() => {
        component = shallow(<ListComponent
            tableHeaders={tableHeaders}
            list={list}
            rowNames={rowNames}
        />);
    });

    it('Render component', () => {
        expect(component).toHaveLength(1);
    });

    it("Props are received", () => {
        const listcomponent = mount(<ListComponent
            tableHeaders={tableHeaders}
            list={list}
            rowNames={rowNames} />);
        expect(listcomponent.props().tableHeaders).toEqual(tableHeaders);
        expect(listcomponent.props().list).toEqual(list);
        expect(listcomponent.props().rowNames).toEqual(rowNames);
    });

    it("should render 1 row", () => {
        const listcomponent = mount(<ListComponent
            tableHeaders={tableHeaders}
            list={list}
            rowNames={rowNames} />);
        expect(listcomponent.find("tr")).toHaveLength(2);
        expect(listcomponent.find("td")).toHaveLength(5);
    });
});
