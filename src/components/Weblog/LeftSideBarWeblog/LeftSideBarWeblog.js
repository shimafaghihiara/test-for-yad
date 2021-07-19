import React from 'react';
import useStyle from "./Style";
import {Typography} from "@material-ui/core";

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
const LeftSideBarWeblog = () => {
    const classes=useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.category}>
                {
                   ImageLeftSide.map(item=><div className={classes.subcategory}>
                           <img className={classes.img1} src={item.srcs}/>
                           <Typography className={classes.TextTitle}>{item.Title} </Typography>
                       </div>
                   )
                }


            </div>


        </div>
    );
};

export default LeftSideBarWeblog;