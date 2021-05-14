import React, { useState } from 'react';
import classes from './Home.module.scss';
import { withRouter } from 'react-router-dom';

import Table from '../../components/Table';
import { useMount, useUpdate } from '../../hooks';

const Home = () => {
    const [totalEntries, setTotalEntries] = useState([100]);
    const [totalEntriesArr, setTotalEntriesArr] = useState([]);

    useMount(() => {
        console.log("state changed" + totalEntries);
        let finalEntries;
        if (totalEntries) {
            finalEntries = parseInt(totalEntries) + 1;
        } else {
            finalEntries = 101;
        }
        for (let i=1; i < finalEntries; i++) {
            setTotalEntriesArr(totalEntriesArr => [...totalEntriesArr, i])   
        }
    })

    useUpdate(() => {
        if (totalEntries != "100") {
            let index = parseInt(totalEntries) - 100;
            console.log(index + " from useUpdate");
            for (index; index < totalEntries; index++) {
                setTotalEntriesArr(totalEntriesArr => [...totalEntriesArr, index])   
            }
        }
    }, [totalEntries])

    const activateChild = (e) => {
        e.preventDefault();
        console.log("click");

        let breakpoint = totalEntriesArr.length + 101;
        for (let index = totalEntriesArr.length +1; index < breakpoint; index++) {
            console.log(index);
            setTotalEntriesArr(totalEntriesArr => [...totalEntriesArr, index])   
        }

    }

    return (
        <>
            <div className={classes.homeDiv}>
                <Table totalEntries={totalEntriesArr}/>
                <button onClick={activateChild}>Add Rows</button>
                <button>Export</button>
            </div>
        </>
    )
}

export default withRouter(Home);