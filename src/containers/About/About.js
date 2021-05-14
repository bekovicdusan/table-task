import React from 'react';
import classes from './About.module.scss';
import { withRouter } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className={classes.aboutDiv}>
                About Works!
            </div>
        </>
    )
}

export default withRouter(About);