import React from 'react';
import useStyle from "./Style";

const MainWeblog = () => {
    const classes=useStyle();
    return (
        <div className={classes.root}>
            mainag gwfsrc\components\layout\Layout.js
            Line 11:8:  'CommentList' is defined but never used        no-unused-vars
            Line 16:8:  'LeftSideBarWeblog' is defined but never used  no-unused-vars

            Search for the keywords to learn more about each warning.
            To ignore, add // eslint-disable-next-line to the line before.







        </div>
    );
};

export default MainWeblog;