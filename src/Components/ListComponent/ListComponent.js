import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './ListComponent.scss';

/**
 * This component is used to iterate over an array 
 * that is received as a prop and render it in the shape of a table.
 * The component does not care about the data it receives. 
 * The props are table header names, object keys and array of data.
 */

class ListComponent extends React.Component {

    render() {
        const { tableHeaders, list, rowNames } = this.props;
        return (
            <div className="list-component">
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            {/* Iterating table headers */}
                            {tableHeaders.map(heading => {
                                return <TableCell key={heading}>{heading}</TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Iterating table rows */}
                        {list.map(listItem => (
                            <TableRow key={listItem.id}>
                                {/* Iterating cells inside a row */}
                                {rowNames.map(rowName => {
                                    return <TableCell key={rowName}>{listItem[rowName]}</TableCell>
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default ListComponent;