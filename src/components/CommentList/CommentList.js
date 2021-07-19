import React from 'react';
import useStyle from "../CommentList/Style";
import {Grid, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";


const CommentList = ({data}) => {
    const classes=useStyle();
    return (
        <div className={classes.root}>
            <Grid container direction={"row"} className={classes.gridroot}>
                <Grid item direction={"column"}>
                    <img src={data.img1} className={classes.imageuser}/>
                </Grid>
                <Grid item direction={"column"} style={{paddingTop:'20px'}}>
                    <Grid container direction={"row"}>
                        <Grid item container >
                            <Typography className={classes.name}>{data.name}</Typography>
                            <Typography className={classes.id}>{data.id}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography>{data.commentx}</Typography>
                    </Grid>
                </Grid>
                <Divider orientation={"horizontal"} className={classes.divider} />
            </Grid>

        </div>
    );

};

export default CommentList;