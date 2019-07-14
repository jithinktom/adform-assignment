import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
    addCampaigns
} from "../../../Actions/CampaignActions";
import InitialState from "../../../Store/InitialState";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(InitialState);

describe("Campaign actions", () => {
    beforeEach(() => {
        store.clearActions();
    });

    it("should dispatch action of type: ADD_CAMPAIGNS_FULFILLED", () => {
        store.dispatch(addCampaigns());
        const actions = store.getActions();
        const expectedAction = ["ADD_CAMPAIGNS_FULFILLED"];
        expect(actions.map(item => item.type)).toEqual(expectedAction);
    });

});