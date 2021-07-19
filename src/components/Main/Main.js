import React, {useState} from 'react';
import useStyle from "../Main/Style";
import {Grid} from "@material-ui/core";

const images=[
        "./images/s.jpg",
        "./images/s2.jpg",
        "./images/s3.jpg"
]

const Main = () => {
    const classes=useStyle();
    const [slide,setSlide]=useState(0);
    const changeSlide=()=>{
            setSlide(slide+1===images.length? 0 :slide+1);

    }


    return (
        <div className={classes.root}>
            <div className={classes.slider}>
                    {
                            images.map((item,index)=><img src={item} onClick={changeSlide}
                                                          className={index===slide ? classes.images : classes.images2}/>)
                    }
            </div>
                <div className={classes.banner}>
                        <Grid container direction={"row"} >
                                <Grid item direction={"column"} className={classes.littlebanner}>
                                       <img src={"./images/banner1.jpg"} className={classes.radios}/>
                                </Grid>
                                <Grid item direction={"column"} className={classes.littlebanner2}>
                                        <img src={"./images/banner2.jpg"} className={classes.radios}/>
                                </Grid>
                                <Grid item direction={"column"} className={classes.littlebanner3}>
                                        <img src={"./images/banner3.jpg"} className={classes.radios}/>
                                </Grid>
                        </Grid>
                </div>
                <div className={classes.content}>

            src\components\RightSideBar\RightSideBar.js
            Line 12:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
            Line 22:33:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

            Search for the keywords to learn more about each warning.
            To ignore, add // eslint-disable-next-line to the line befor
            src\components\RightSideBar\RightSideBar.js
            Line 12:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
            Line 22:33:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

            Search for the keywords to learn more about each warning.
            To ignore, add // eslint-disable-next-line to the line befor
            src\components\RightSideBar\RightSideBar.js
            Line 12:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
            Line 22:33:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

            Search for the keywords to learn more about each warning.
            To ignore, add // eslint-disable-next-line to the line befor
            src\components\RightSideBar\RightSideBar.js
            Line 12:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
            Line 22:33:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

            Search for the keywords to learn more about each warning.
            To ignore, add // eslint-disable-next-line to the line befor
            src\components\RightSideBar\RightSideBar.js
            Line 12:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
            Line 22:33:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

            Search for the keywords to learn more about each warning.
            To ignore, add // eslint-disable-next-line to the line befor
            src\components\RightSideBar\RightSideBar.js
            Line 12:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
            Line 22:33:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

            Search for the keywords to learn more about each warning.
            To ignore, add // eslint-disable-next-line to the line befor
            src\components\RightSideBar\RightSideBar.js
            Line 12:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
            Line 22:33:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

            Search for the keywords to learn more about each warning.
            To ignore, add // eslint-disable-next-line to the line befor
            src\components\RightSideBar\RightSideBar.js
            Line 12:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
            Line 22:33:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

            Search for the keywords to learn more about each warning.
            To ignore, add // eslint-disable-next-line to the line befor
            src\components\RightSideBar\RightSideBar.js
            Line 12:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
            Line 22:33:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

            Search for the keywords to learn more about each warning.
            To ignore, add // eslint-disable-next-line to the line befor
            src\components\RightSideBar\RightSideBar.js
            Line 12:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
            Line 22:33:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

            Search for the keywords to learn more about each warning.
            To ignore, add // eslint-disable-next-line to the line befor
            src\components\RightSideBar\RightSideBar.js
            Line 12:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
            Line 22:33:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

            Search for the keywords to learn more about each warning.
            To ignore, add // eslint-disable-next-line to the line befor
            src\components\RightSideBar\RightSideBar.js
            Line 12:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
            Line 22:33:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

            Search for the keywords to learn more about each warning.
            To ignore, add // eslint-disable-next-line to the line befor
                </div>

        </div>
    );
};

export default Main;