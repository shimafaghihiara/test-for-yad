import React from 'react';
import useStyle from "./Style";
import CommentList from "../CommentList/CommentList";
import Divider from "@material-ui/core/Divider";

const coments00=[
    {
        name:"Xiaomi",
        id:"@Xiaomi",
        img1:"./images/left4.png",
        commentx:'برای دیدن #گوشی به اینترنت مراجعه کنید'
    },

    {
        name:"bilgates",
        id:"@bilgates",
        img1:"./images/left2.png",
        commentx: "برای دین گوشی های #شیاومی به آن مراجعه کنید"

    },
    {
        name:"Mahsa",
        id:"@mahsagh433",
        img1:"./images/left3.png",
        commentx: 'برای دین گوشی های شیاومی به #نمایندگی آن مراجعه کنید'
    },

    {
        name:"maryam",
        id:"@s.maryam",
        img1:"./images/left5.png",
        commentx: "عالی بود حرف نداشت"

    }
];
const Comments = () => {
    const classes=useStyle();
    return (
        <div className={classes.root}>
            {
                coments00.map(comment=><CommentList data={comment}/>)

            }


        </div>
    );
};

export default Comments;