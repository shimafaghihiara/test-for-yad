import React from 'react';
import useStyle from "../Footer/Style";
import {Grid, Typography} from "@material-ui/core";

const Footer = () => {
    const classes=useStyle();
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"}>
                <Grid item direction={"column"} className={classes.column1}>
                    <Typography className={classes.fasele}>درباره ما</Typography>
                    <Typography className={classes.fasele}>تماس ما</Typography>
                    <Typography className={classes.fasele}>اپلیکیشن ها</Typography>
                </Grid>
                <Grid item direction={"column"} className={classes.column1}>
                <Typography className={classes.fasele}>وبلاگ</Typography>
                <Typography className={classes.fasele}>قوانین</Typography>
                </Grid>
                <Grid item direction={"column"} className={classes.column1}>
                    <Typography className={classes.fasele}>سوالات متداول</Typography>
                    <Typography className={classes.fasele}>خرید اشتراک</Typography>
                </Grid>
            </Grid>
            <Typography className={classes.rulefooter}>خدمات ارائه شده در تماشاخونه، دارای مجوز های لازم از مراجع مربوطه می باشد و هر گونه بهره برداری و سوء استفاده از محتوای تماشاخونه، پیگرد قانونی دارد.</Typography>


        </div>
    );
};

export default Footer;