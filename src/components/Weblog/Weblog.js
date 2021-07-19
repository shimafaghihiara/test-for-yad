import React from 'react';
import useStyle from "./Style";
import {Typography} from "@material-ui/core";
import LeftSideBarWeblog from "./LeftSideBarWeblog/LeftSideBarWeblog";
import MainWeblog from "./MainWeblog/MainWeblog";

const ImageLeftSide=[
    {
        srcs:'images/LeftSideWeblog/biomutant.jpg',
        Title:'بررسی بازی Biomutant'
    },
    {
        srcs:'images/LeftSideWeblog/mainstream.jpg',
        Title:'نقد فیلم Mainstream | پشت پرده اینفلوئنسرها'
    },
    {
        srcs:'images/LeftSideWeblog/outriders.jpg',
        Title:'بررسی بازی Outriders'
    },
    {
        srcs:'images/LeftSideWeblog/the-elder.jpg',
        Title:'تاخیر انتشار آپدیت نسل نهمی بازی The Elder Scrolls Online'
    },

];

const Weblog = () => {
    const classes=useStyle();
    return (
        <div className={classes.root1}>
            <LeftSideBarWeblog/>
            <MainWeblog/>
        </div>
    );
};

export default Weblog;