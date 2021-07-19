import React, {useState} from 'react';
import useStyle from "./Style";
import {Link, withRouter} from "react-router-dom";
import Movies from "../Movies/Movies";

const images1=[
    "./images/11.jpg",
    "./images/12.jpg",
    "./images/13.jpg",
    "./images/14.jpg"
];
const posters=[
    {
        nameposter:'بنجامین فیله',
        poster:'./images/posters/poster0.jpg'
    },
    {
        nameposter:'ابرها',
        poster:'./images/posters/poster1.jpg'
    },
    {
        nameposter:'یهودا و مسیح سیاه',
        poster:'./images/posters/poster2.jpg'
    },
    {
        nameposter:'زندگی در یک سال',
        poster:'./images/posters/poster3.jpg'
    },
    {
        nameposter:'ارویگ و جادوگر',
        poster:'./images/posters/poster4.jpg'
    },
    {
        nameposter:'رایا و آخرین اژدها',
        poster:'./images/posters/poster5.jpg'
    },
    {
        nameposter:'پالاسا 1978',
        poster:'./images/posters/poster6.jpg'
    },
    {
        nameposter:'یخ زده',
        poster:'./images/posters/poster7.jpg'
    },
    {
        nameposter:'زندانی ها',
        poster:'./images/posters/poster8.jpg'
    },
    {
        nameposter:'خبرچین',
        poster:'./images/posters/poster9.jpg'
    },
    {
        nameposter:'بره دیگر',
        poster:'./images/posters/poster10.jpg'
    },
    {
        nameposter:'عزیمت',
        poster:'./images/posters/poster11.jpg'
    },
    {
        nameposter:'آلفا و امگا',
        poster:'./images/posters/poster12.jpg'
    },
    {
        nameposter:'زن شگفت انگیز 1984',
        poster:'./images/posters/poster13.jpg'
    },
];
const count=[1,2,3,4,5,6,7];
const MoviesSeries = () => {
    const classes=useStyle();
    const [slide,setSlide]=useState(0);
    const openImage=()=>{
        setSlide(slide+1===images1.length ? 0 : slide+1);
    }

    return (
        <div className={classes.root}>
       <div className={classes.banner}>
           {
               images1.map((item,index)=><img src={item} onClick={openImage}
                                                className={index===slide ? classes.image00 : classes.image01}/>)
           }

       </div>
            <div className={classes.parent}>
                {
                    posters.map((item,index)=>
                       <Link to={'/Movies/'+index} params={item} className={classes.linkposter}>
                           <div className={classes.detailposter}>
                            <img src={item.poster} className={classes.imgposter}/>
                            <div className={classes.nameposters}>{item.nameposter}</div>
                             </div></Link>
                    )
                }

            </div>

        </div>
    );
};

export default withRouter(MoviesSeries);