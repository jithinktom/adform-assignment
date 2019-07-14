/**
 * This function takes arguments such as action and payload
 * and dispatches the action.
*/

const dispatchFn = (action, payload) => (dispatch) => {
    dispatch({
        type: action,
        payload
    });
}

/**
 * This action function is used to Add Campaigns to store.
 */


export const addCampaigns = (campaigns) => dispatch => {
    dispatch(dispatchFn('ADD_CAMPAIGNS_FULFILLED', campaigns));
}