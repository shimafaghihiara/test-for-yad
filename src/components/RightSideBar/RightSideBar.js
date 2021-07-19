import React from 'react';
import useStyle from "../RightSideBar/Style";
import Typography from "@material-ui/core/Typography";
import {ButtonBase, Grid} from "@material-ui/core";

const RightSideBar = () => {
    const classes=useStyle();
    const hashtags=["مسابقات دربی","خانه ویلایی","بهترین وعده غذایی"];
    return (
        <div className={classes.root}>
        <Grid container direction={"row"} className={classes.title}>
            <img src={"./images/pic.png"} className={classes.logoRigh}/>
            <Typography className={classes.titleright}>هشتگ ها</Typography>
        </Grid>
            <div className={classes.items}>
            {
                hashtags.map(item =>
                    <ButtonBase className={classes.hashtagButte}>
                    <Grid container direction={"row"} className={classes.content}>

                            <Grid item>
                                <img src={"./images/hashtag.png"}  width={'30'}/>
                            </Grid>
                            <Typography className={classes.hashtag}>
                                {item}
                            </Typography>




                    </Grid> </ButtonBase>

                )
            }
            </div>
            </div>

    );
};

export default RightSideBar;