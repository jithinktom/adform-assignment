import campaignStore from "../../../Reducers/CampaignReducer";
import { SAMPLE_CAMPAIGNS } from "../../../Constants";

describe('Campaign Reducer', () => {

    it('should return the initial state', () => {
        expect(campaignStore({}, {})).toEqual({});
    });

    it('method: addCampaigns', () => {
        let action = {
            type: "ADD_CAMPAIGNS_FULFILLED",
            payload: SAMPLE_CAMPAIGNS
        };
        var actualJSON = JSON.stringify(campaignStore({ campaigns: [] }, action));
        var expectedJSON = JSON.stringify({ campaigns: SAMPLE_CAMPAIGNS });
        expect(actualJSON).toEqual(expectedJSON);
    });

});