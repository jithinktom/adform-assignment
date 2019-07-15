import React from "react";
import { shallow, mount } from "enzyme";
import SearchFilter from "../../Components/SearchFilter/SearchFilter";
import { DATE_RANGE_ERROR } from "../../Constants";

describe('Component should be rendered properly', () => {

    let component;
    let filter = jest.fn();

    beforeEach(() => {
        component = shallow(<SearchFilter
            filter={filter}
        />);
        // console.log(component)
    });

    it('Render component', () => {
        expect(component).toHaveLength(1);
    });

    it("updates state on entering inputs", (done) => {
        const wrapper = mount(<SearchFilter filter={filter} />)
        let startDate = "2019-01-01", endDate = "2019-01-10", searchText="name";
		wrapper.find('input').at(0).simulate('change', { target: { value: startDate } });
        wrapper.find('input').at(1).simulate('change', { target: { value: endDate } });
        wrapper.find('input').at(2).simulate('change', { target: { value: searchText } });
		process.nextTick(() => {
			expect(wrapper.instance().state.startDate).toEqual(startDate)
            expect(wrapper.instance().state.endDate).toEqual(endDate)
            expect(wrapper.instance().state.searchText).toEqual(searchText)
            expect(filter).toBeCalled();
			done();
		});
    });
    
    it("error should be displayed if end date is before start date", (done) => {
        const wrapper = mount(<SearchFilter filter={filter} />)
        let startDate = "2019-01-10", endDate = "2019-01-01", searchText="name";
        wrapper.setState({ startDate, endDate, searchText });
		process.nextTick(() => {
            expect(wrapper.find('.MuiInputBase-formControl').at(1).hasClass('Mui-error'));
            expect(filter).toBeCalled()
			done();
		});
    });
    
    it("Form prevents default action on submit", (done) => {
        let preventDefault = jest.fn()
        const wrapper = mount(<SearchFilter filter={filter} />)
        wrapper.find('form').simulate('submit', { preventDefault: preventDefault})
		process.nextTick(() => {
            expect(preventDefault).toBeCalled()
			done();
		});
	});

});
