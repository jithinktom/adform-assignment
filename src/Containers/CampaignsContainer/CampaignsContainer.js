import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ListComponent from '../../Components/ListComponent/ListComponent';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import './CampaignsContainer.scss';
import { NO_CAMPAIGNS, DATE_FORMAT, YEAR_FORMAT, SAMPLE_CAMPAIGNS } from '../../Constants';
import { addCampaigns } from '../../Actions/CampaignActions';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import clone from 'clone';

/**
 * This component acts as parent container for campaigns listing.
 * Actions will be called from this container. This also modifies the data 
 * to the form it should be displayed and pass down it to ListComponent.
 */

class CampaignsContainer extends React.Component {

    state = {
        campaigns: []
    }

    /**
	 * This component lifecycle method populates the data to state variable
     * when the campaigns change in the Redux store.
	 */

    componentWillReceiveProps(nextProps) {
        this.setState({
            campaigns: this.modifyData(nextProps.campaigns)
        })
    }

    /**
	 * This component lifecycle method populates the state variable
     * when the component finishes mounting. Exposing a method
     * AddCampaigns to browser console to add data.
	 */

    componentDidMount() {
        window.AddCampaigns = this.addCampaigns;
        this.setState({
            campaigns: this.modifyData(this.props.campaigns)
        })
    }

    /**
	 * This method is used to inject data to application from browser console.
	 */

    addCampaigns = (data) => {
        //Console message displayed if the entered data is not an array.
        if (!Array.isArray(data))
            console.log("Not an array!")
        else
            this.props.addCampaigns(data)
    }

    /**
	 * This method returns necessary components according to the length of the data.
	 */

    renderCampaigns = () => {
        if (this.props.campaigns && this.props.campaigns.length > 0) {
            return <ListComponent
                tableHeaders={['Id', 'Name', 'Start Date', 'End Date', 'Active', 'Budget(USD)']}
                rowNames={['id', 'name', 'startDate', 'endDate', 'active', 'Budget']}
                list={this.state.campaigns} />
        }
        else {
            return <React.Fragment>
                <Typography variant="subtitle1" gutterBottom>
                    {NO_CAMPAIGNS}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => this.addCampaigns(SAMPLE_CAMPAIGNS)}>
                    Click here to fill with some sample data
                </Button>
            </React.Fragment>
        }
    }

    /**
     * We need to modify the data before rendering. A property called 'active'
     * will be added to each campaign. This is done here so that the ListComponent
     * will not have to take care of it.
     */

    modifyData = (campaigns) => {
        let validData = clone(campaigns)
        validData.forEach(item => {
            // formatting budget values.
            if(item.Budget && !isNaN(item.Budget)){
                item.Budget = Math.abs(item.Budget) > 999 ? ((Math.abs(item.Budget)/1000).toFixed(1)) + 'k' : Math.abs(item.Budget)
            }
            let isActive = moment().isBetween(moment(item.startDate, DATE_FORMAT), moment(item.endDate, DATE_FORMAT))
            item.active = <span className={`active-flag ${isActive ? 'active' : 'inactive'}`}>{isActive ? 'active' : 'inactive'}</span>
        })
        return validData;
    }

    /**
     * This method filters the data according to the search params.
     */

    filter = (filterData) => {
        // Campaigns will be modified and added with active flag. The modified data 
        // is used for filtering.
        let filteredData = this.modifyData(this.props.campaigns)
        filteredData = filteredData.filter(campaign => {
            let include = true;
            if (filterData.startDate &&
                moment(campaign.endDate, DATE_FORMAT).isBefore(moment(filterData.startDate, YEAR_FORMAT)))
                include = false
            if (filterData.endDate &&
                moment(filterData.endDate, YEAR_FORMAT).isBefore(moment(campaign.startDate, DATE_FORMAT)))
                include = false
            if (filterData.searchText) {
                let match = null
                try {
                    let searchText = filterData.searchText.toLowerCase()
                    var re = new RegExp(searchText, 'g');
                    match = campaign.name.toLowerCase().match(re);
                }
                catch (err) {
                    match = null
                }
                if (!match)
                    include = false
            }
            if (include)
                return campaign
        })
        this.setState({
            campaigns: filteredData
        })
    }

    render() {
        return (
            <div className="campaigns-container">
                <Typography variant="h6" gutterBottom>
                    Campaigns
                </Typography>
                <SearchFilter filter={this.filter} />
                {this.renderCampaigns()}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        campaigns: state.campaignStore.campaigns
    }
}

export default connect(mapStateToProps, {
    addCampaigns
})(CampaignsContainer);