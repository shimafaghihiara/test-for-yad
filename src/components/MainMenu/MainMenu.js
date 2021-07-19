import React, {useState} from 'react';
import useStyle from "../MainMenu/Style";
import {Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";



const MainMenu = () => {

    const [opened,setOpened ]=useState(false);
    const openmenu=()=>{
        setOpened(!opened)
    };

    const classes=useStyle();


    return (
        <div className={classes.root}>
                <div id={"menu"} className={opened ? classes.menu2 : classes.menu3} >
                 <div className={opened? classes.showtexts : classes.hidetexts} onMouseLeave={openmenu}>
                    <Link to={"/"} className={classes.detailText}> <Typography  className={classes.detailText}>خانه</Typography></Link>
                     <Link to={"/MoviesSeries"}  className={ classes.detailText}> <Typography className={classes.detailText}>فیلم و سریال</Typography></Link>
                     <Link to={"/weblog"} className={classes.detailText}> <Typography className={classes.detailText}>وبلاگ</Typography></Link>
                 </div></div>
            <div className={classes.profDetail}>
                <div>
                    <Link to={"/ComentList"} ><img src={"/images/profile.png"} className={classes.profilepic} /></Link>
                </div>
                <div className={classes.columnprof}>
                <div className={classes.Nameprof}>
                    <Typography >شیما فقیهی</Typography>
                    <Typography className={classes.Idprof}>@shimshim.fga</Typography>
                </div>

            </div>
                <div className={classes.menu}>
                    <button className={classes.btnmenu}  onClick={openmenu} >منوی اصلی</button>
                </div>
                <div>
                    <Link to={"/"}> <img src={"/images/logo.png"} className={classes.logo}/></Link>
                </div>

            </div>

        </div>
    );
};

export default MainMenu;
