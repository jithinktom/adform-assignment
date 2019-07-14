import { combineReducers } from "redux";
import campaignStore from './CampaignReducer';

const rootReducer = combineReducers({ campaignStore });

export default rootReducer;