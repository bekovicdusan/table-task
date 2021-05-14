import React, {memo, useState} from 'react';

import { useMount, useUpdate } from '../hooks';

const Status = ({id, statuses, refresh}) => {
    const[statusez, setStatuses] = useState([]);

    useMount(() => {
        setStatuses(statuses);
    })

    useUpdate(() => {
        console.log('change in state detected')
    }, [statusez]);

    const checkPrime = number => {
        if (number < 2) return false;

        for (let k = 2; k < number; k++){
            if( number % k == 0){
              return false;
            }
        }
        return true;
    }

    let status;
    if (checkPrime(id)) {
        status = statuses[0]
    } else {
        status = statuses[1]
    }

    if (id === 1) status = statuses[2]

    const handleClick = option => {
        let status = option.target[4].selected;
        if (status) {
            var newType = prompt("Please enter the name of the new status", "");
            console.log(newType);
            statuses.push(newType);
            console.log(statuses);
            console.log(statusez + " before");
            setStatuses(statuses);
            console.log(statusez + " after");
        }

    }

    return (
        <select onChange={handleClick}>
            <option selected>{status}</option>
            {statusez.map((status, i) => (
                <option value={status} key={"s-" + i}>{status}</option>
            ))}
        </select>
    )
}

const memoizedStatus = memo(Status);

export default memoizedStatus;