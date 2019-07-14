import moment from 'moment';
import clone from 'clone';
import { DATE_FORMAT } from '../Constants';

/**
 * This function is used to filter out invalid campaigns.
 * Campaigns with no/invalid start/end dates are considered as invalid campaigns.
 * Also, if there are more than one campaign with same 'id', 
 * those duplicates will be removed.
 */

export const filterValidData = (campaigns) => {
    let validData = []
    if (campaigns && campaigns.length > 0) {
        let clonedCampaigns = clone(campaigns)
        const map = new Map();
        console.log("campaigns with duplicate ids will be removed")
        for (const item of clonedCampaigns) {
            if (!map.has(item.id)) {
                map.set(item.id, true);    // set any value to Map
                validData.push(item);
            }
        }
        validData = validData.filter(item =>
            item.endDate &&
            item.startDate &&
            moment(item.endDate, DATE_FORMAT).format() !== "Invalid date" &&
            moment(item.startDate, DATE_FORMAT).format() !== "Invalid date"
        )
    }

    return validData;
}