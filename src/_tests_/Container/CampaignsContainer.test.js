import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from 'react-redux';
import CampaignsContainer from "../../Containers/CampaignsContainer/CampaignsContainer";
import InitialState from '../../Store/InitialState';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SAMPLE_CAMPAIGNS } from "../../Constants";

const mockStore = configureStore([thunk]);

describe('Test CampaignsContainer', () => {

    let props = {};
    let mountedCampaignContainer;

    const mountComponent = (propOverrides) => {
        if (propOverrides) {
            props = { ...props, ...propOverrides };
        }
        if (!mountedCampaignContainer) {
            mountedCampaignContainer = mount(
                <Provider store={mockStore(InitialState)}>
                    <CampaignsContainer {...props} />
                </Provider>)
        }
        return mountedCampaignContainer;
    }

    it('Render component', () => {
        expect(mountComponent()).toHaveLength(1);
    });

    // it('calls addCampaign function on clicking button', () => {
    //     const addCampaigns = jest.fn()
    //     const wrapper = mountComponent({
    //         addCampaigns: addCampaigns,
    //         campaigns: []
    //     })
    //     expect(wrapper.find('button')).toHaveLength(1)
    //     wrapper.find('button').simulate('click')
    //     expect(addCampaigns).toHaveBeenCalled();
    // });

    it('modifies data', () => {
        const wrapper = shallow(<CampaignsContainer />).dive()
        const instance = wrapper.instance();
        jest.spyOn(instance, 'modifyData').and.callThrough();
        expect(instance.modifyData).toHaveBeenCalled();
    });

});