import React, { useCallback, useEffect, useState } from 'react';
import classes from './Component.module.scss';

import { useMount, useUpdate } from '../hooks';
import TableRow  from './TableRow';

const Table = ({totalEntries}) => {
    const [types, setType] = useState([]);
    const [statuses, setStatus] = useState([]);


    useMount(() => {
        setType([
            ...types,
            "TypeBuzz",
            "TypeFizz",
            "TypeFizzBuzz",
            "TypeN",
            "New Type"
        ]);
        setStatus([
            ...statuses,
            "StatusFizz",
            "StatusBuzz",
            "StatusFizzBuzz",
            "New Status"
        ]);
    });

    useUpdate(() => {
        console.log('change registered in Table')
    }, [statuses]);

    const addNewType = () => {
        var newType = prompt("Please enter the name of the new type", "");
        console.log(newType);
        let typesArr = types;
        typesArr.push(newType);
        console.log(types + ' before');
        console.log(types);
    };


    return (
        <table className={classes.homeTable} id="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                { 
                totalEntries.map((rowNb, i) => (
                    <TableRow key={i} entry={rowNb} name={"Name" + rowNb} types={types} statuses={statuses}/>
                )) }
            </tbody>
        </table>
    )

}

export default Table;