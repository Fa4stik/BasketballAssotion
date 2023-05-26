import React from "react";
import {
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from '@mui/material';

const EnhancedTableHead = ({ order, orderBy, onRequestSort, headCells }) => {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow className="bg-gray-200">
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align='center'
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default EnhancedTableHead;