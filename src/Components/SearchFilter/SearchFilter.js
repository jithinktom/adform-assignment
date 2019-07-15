import React from 'react';
import TextField from '@material-ui/core/TextField';
import './SearchFilter.scss';
import moment from 'moment';
import { DATE_RANGE_ERROR, YEAR_FORMAT } from '../../Constants';

/**
 * This component is used to collect filter parameters
 * and pass it to parent container.
 * Filter method which is passes in as a prop will be invoked.
 */

const Styles = {
    Input: {
        marginRight: '5%',
        width: '100%',
        maxWidth: '220px'
    }
}

class SearchFilter extends React.Component {

    state = {
        startDate: null,
        endDate: null,
        searchText: null
    }

    /**
     * This method is invoked when any input field changes.
     * The state will be updates and filter function will be called after that,
     * if there are no errors.
     */

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        }, () => {
            this.props.filter(this.state, this.checkErrors().error)
        })
    }

    /**
     * This method is used to detect any errors in the form.
     */

    checkErrors = () => {
        let error = {
            error: false,
            text: null
        }
        // If the end date is before start date, error should be displayed.
        if (moment(this.state.endDate, YEAR_FORMAT).isBefore(moment(this.state.startDate, YEAR_FORMAT))) {
            error = {
                error: true,
                text: DATE_RANGE_ERROR
            }
        }
        return error
    }

    /**
     * This method prevents the default action of form submit.
     */

    submit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={e => this.submit(e)} className="filters">
                <TextField
                    id="startDate"
                    label="Start Date"
                    style={Styles.Input}
                    type="date"
                    defaultValue={this.state.startDate}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.handleChange('startDate')}
                />
                <TextField
                    id="endDate"
                    label="End Date"
                    style={Styles.Input}
                    type="date"
                    defaultValue={this.state.endDate}
                    error={this.checkErrors().error}
                    helperText={this.checkErrors().text}
                    onChange={this.handleChange('endDate')}
                    InputProps={{ inputProps: { min: this.state.startDate || "" } }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="searchText"
                    label="Search by name"
                    style={Styles.Input}
                    type="text"
                    onChange={this.handleChange('searchText')}
                    defaultValue={""}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        )
    }
}

export default SearchFilter;