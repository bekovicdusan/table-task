import React, { useState } from 'react';
import { useMount } from '../hooks';

import Status from './Status';
import Type from './Type';

const TableRow = ({entry, name, types, statuses}) => {

    return (
           <tr>
               <td>{entry}</td>
               <td><input type="text" defaultValue={name}/></td>
               <td><Type id={entry} types={types}/></td>
               <td><Status id={entry} statuses={statuses}/></td>
           </tr>
    )
}

export default TableRow;