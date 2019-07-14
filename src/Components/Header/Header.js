import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Campaign Manager
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;