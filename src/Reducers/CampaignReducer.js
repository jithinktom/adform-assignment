import { filterValidData } from '../Helpers/helper';
const InitialState = {
    campaigns : []
}

const campaignStore = (state = InitialState, action = {}) => {
    switch (action.type) {
        /**
         * This case is used to add campaigns. The data coming as payload
         * will be filtered. Only valid data objects will be added to store.
         */
        case 'ADD_CAMPAIGNS_FULFILLED': {
            return {
                ...state,
                campaigns: filterValidData([...state.campaigns, ...action.payload])
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default campaignStore;