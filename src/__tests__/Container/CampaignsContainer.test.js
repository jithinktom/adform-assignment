import React from "react";
import { shallow, mount } from "enzyme";
import { CampaignsContainer } from "../../Containers/CampaignsContainer/CampaignsContainer";
import { SAMPLE_CAMPAIGNS } from "../../Constants";
import ListComponent from "../../Components/ListComponent/ListComponent";

describe('Test CampaignsContainer', () => {

    const shallowRender = (props) => {
        return shallow(
            <CampaignsContainer {...props} />
        )
    }

    const mountRender = (props) => {
        return mount(
            <CampaignsContainer {...props} />
        )
    }

    it('component is rendered without errors', () => {
        let props = {
            campaigns: [],
            addCampaigns: jest.fn()
        }
        const wrapper = shallowRender(props)
        expect(wrapper).toHaveLength(1);
    })

    it('component is rendered when it gets data', () => {
        let props = {
            campaigns: SAMPLE_CAMPAIGNS,
            addCampaigns: jest.fn()
        }
        const wrapper = shallowRender(props)
        expect(wrapper).toHaveLength(1);
    })

    it('calls addCampaigns prop function, when the argument is an array', (done) => {
        let addCampaigns = jest.fn()
        let props = {
            campaigns: [],
            addCampaigns
        }
        const wrapper = mountRender(props)
        const button = wrapper.find('.MuiButton-containedPrimary').at(0)
        button.simulate('click')
        process.nextTick(() => {
            expect(addCampaigns).toBeCalled();
            done();
        });
    })

    it('does not call addCampaigns prop function, when the argument is not an array', (done) => {
        let addCampaigns = jest.fn()
        let props = {
            campaigns: [],
            addCampaigns
        }
        const wrapper = mountRender(props)
        wrapper.instance().addCampaigns(null)
        process.nextTick(() => {
            expect(addCampaigns).toHaveBeenCalledTimes(0)
            done();
        });
    })

    it('Return no data if search form has error', (done) => {
        let addCampaigns = jest.fn()
        const sampleData = [
            {
                "id": 1,
                "name": "Divavu",
                "startDate": "06/01/2019",
                "endDate": "06/10/2019",
                "Budget": 88377
            }
        ]
        let searchParams = {
        }
        let props = {
            campaigns: sampleData,
            addCampaigns
        }
        const wrapper = mountRender(props)
        wrapper.instance().filter(searchParams, true)
        process.nextTick(() => {
            expect(wrapper.instance().state.campaigns.length).toEqual(0)
            done();
        });
    })

    it('Filters the data correctly - does not match filter params', (done) => {
        let addCampaigns = jest.fn()
        const sampleData = [
            {
                "id": 1,
                "name": "Divavu",
                "startDate": "06/01/2019",
                "endDate": "06/10/2019",
                "Budget": 88377
            }
        ]
        let searchParams = {
            endDate:"2019/12/31",
            startDate: "2019/12/01",
            searchText: "Test"
        }
        let props = {
            campaigns: sampleData,
            addCampaigns
        }
        const wrapper = mountRender(props)
        wrapper.instance().filter(searchParams, false)
        process.nextTick(() => {
            expect(wrapper.instance().state.campaigns.length).toEqual(0)
            done();
        });
    })

    it('Filters the data correctly - match search params', (done) => {
        let addCampaigns = jest.fn()
        const sampleData = [
            {
                "id": 1,
                "name": "Divavu",
                "startDate": "06/01/2019",
                "endDate": "06/10/2019",
                "Budget": 88377
            }
        ]
        let searchParams = {
            endDate:"2019/12/31",
            startDate: "2019/06/01"
        }
        let props = {
            campaigns: sampleData,
            addCampaigns
        }
        const wrapper = mountRender(props)
        wrapper.instance().filter(searchParams, false)
        process.nextTick(() => {
            expect(wrapper.instance().state.campaigns.length).toEqual(1)
            done();
        });
    })

});