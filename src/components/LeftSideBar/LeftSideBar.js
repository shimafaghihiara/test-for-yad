import React from 'react';
import useStyle from "../LeftSideBar/Style";
import {ButtonBase, Divider, Grid, Typography} from "@material-ui/core";

const tweeters=[
    {
        name:"Xiaomi",
        id:"@Xiaomi",
        img:"./images/left4.png"
    },

    {
        name:"bilgates",
        id:"@bilgates",
        img:"./images/left2.png"

    },
    {
        name:"Mahsa",
        id:"@mahsagh433",
        img:"./images/left3.png"

    },

    {
        name:"maryam",
        id:"@s.maryam",
        img:"./images/left5.png"

    }
];

const Tweeter=({name,id,img})=>{
    const classes=useStyle();
    return(

        <Grid container direction={"row-reverse"} className={classes.tweeterParent}>
            <ButtonBase className={classes.hashtagButte}>
            <img src={img} style={{width:55}}/>
            <Grid item container direction={"column"} className={classes.tweeterName}>
                <Typography className={classes.profName}>{name}</Typography>
                <Typography className={classes.profId}>{id}</Typography>
            </Grid>
            </ButtonBase>

        </Grid>


    )
};

const LeftSideBar = () => {
    const classes=useStyle();
    return (
      <div className={classes.root}>
          <Grid container direction={"column"} className={classes.tweeterRoot} alignItems={'center'} >
              <Typography className={classes.tweeterTitle}>بهترین خبرنگاران</Typography>
              <Divider style={{marginLeft:-24, marginRight: -24}} />

              {
                  tweeters.map((item, index) => {
                      return(
                          <>

                              <Tweeter name={item.name} id={item.id} img={item.img}/>
                              {index !== tweeters.length-1 &&
                              <Divider style={{marginLeft: -24, marginRight: -24}}/>}

                          </>
                      )
                  })

              }



          </Grid>
      </div>
    );
};

export default LeftSideBar;