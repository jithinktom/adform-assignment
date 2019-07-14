import React from 'react';
import CampaignsContainer from '../CampaignsContainer/CampaignsContainer';
import './MainContainer.scss';

/**
 * This component controls the data section of the application.
 * Now since only Campains listing is only there, CampaignsContainer 
 * is the only child in this.
 */

class MainContainer extends React.Component {

    render() {
        return (
            <div className="main-container">
                <CampaignsContainer />
            </div>
        )
    }
}

export default MainContainer;