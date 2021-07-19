import React from 'react';
import useStyle from "./Style";
import {withRouter} from 'react-router-dom'
import {Typography} from "@material-ui/core";


const banners=[
    {
        nameposter:'بنجامین فیله',
        banner:'./images/posters/banner0.jpg',
        datepublish:'2019',
        description:'داستان این فیلم درباره بنجامین یک فیل بزرگ، قوی و خوش ذوق است که در باغ وحش نیوتاون زندگی می کند. او و بهترین دوست او، یک پسر ۹ ساله دلسوز و شجاع است که دوست دارند با هم به ماجراجویی بپردازند. اما وقتی یک زن باهوش تهدید می کند باغ وحش را تعطیل کند...',
        IMDB:'7.3',
        axcast1:'/images/left4.png',
        namecast1:'رضا گلزار',
    },
    {
        nameposter:'ابرها',
        banner:'./images/posters/banner1.jpg',
        datepublish:'2020',
        description:'نوازنده و خواننده جوان متوجه می شود دچار بیماری سرطان شده است و چند ماه بیشتر برای زندگی فرصت ندارد، او در این زمان محدود تصمیم می گیرد رویایش را دنبال کند و یک آلبوم ضبط کند...',
        IMDB:'7.5'
    },
    {
        nameposter:'یهودا و مسیح سیاه',
        banner:'./images/posters/banner2.jpg',
        datepublish:'2021',
        description:'داستان این فیلم زندگی فرد همپتون، رئیس حزب پلنگ سیاه در ایلینویز و خیانت سرنوشت سازی که توسط یکی از خبرچین‌های سازمان FBI در حق وی می‌شود را به تصویر می‌کشد.',
        IMDB:'7.7'
    },
    {
        nameposter:'زندگی در یک سال',
        banner:'./images/posters/banner3.jpg',
        datepublish:'2020',
        description:'فیلم زندگی در یک سال، درباره ی پسری جوان به نام دارین است که متوجه میشود عشق زندگی اش ایزابل در حال مرگ است و تنها یک سال فرصت زندگی کردن دارد.',
        IMDB:'7.7'
    },
    {
        nameposter:'ارویگ و جادوگر',
        banner:'./images/posters/banner4.jpg',
        datepublish:'2018',
        description:'انیمیشن ارویگ و جادوگر ، درمورد دختر بچه ای بازیگوش به اسم ایرویگ است که توسط یک جادوگر به فرزندخواندگی پذیرفته می شود. او به خانه ای عجیب و غریب نقل مکان می کند که انواع سِحر و جادوهای مختلف در آن وجود دارد. ایرویگ و جادوگر ماجراهای جالبی را با هم پشت سر می گذارند.',
        IMDB:'4.7'
    },
    {
        nameposter:'رایا و آخرین اژدها',
        banner:'./images/posters/banner5.jpg',
        datepublish:'2014',
        description:' این انیمیشن در سرزمینی به نام کوماندرا جریان پیدا می‌کند؛ دنیایی شامل پنج قبیله که همگی در سرزمینی زندگی می‌کنند که توسط اژدهایی خلق شده است که مدت‌ها از نابودی او می‌گذرد. این سرزمین آخرین هدیه‌ی اژدهایان به به مردم ساکن در آن محسوب می‌شود.',
        IMDB:'7.1'
    },
    {
        nameposter:'پالاسا 1978',
        banner:'./images/posters/banner6.jpg',
        datepublish:'2020',
        description:'پالاسا در دهکده نامی منطقه Srikakulam قرار دارد. کاست پایین در مقابل قدرت کاست بالا و نبرد سیاسی ، واقعیت اصلی داستان است. اینکه چگونه Mohan Rao و برادر بزرگترش با Pedda Shavukar و Chinna Shavukar روبرو می شوند.',
        IMDB:'7.5'
    },
    {
        nameposter:'یخ زده',
        banner:'./images/posters/banner7.jpg',
        datepublish:'2013',
        description:'آنای نترس و خوشبین داستان ما با کریستوف در یک سفر رویایی همراه می شود، با شرایطی مثل شرایط سرما و بوران اورست مواجه می شود و یک آدم برفی خنده دار با نام اولاف نیز در داستان می باشد که به دنبال خواهر آنا با نام السا می گردند. کسی که در تله ی پادشاه در زمستانی ابدی جاویدان شده و…',
        IMDB:'7.5'
    },
    {
        nameposter:'زندانی ها',
        banner:'./images/posters/banner8.jpg',
        datepublish:'1397',
        description:'داستان دانشجوی جوانی است که قصد دارد برای پایان نامه‌اش روی تعدادی زندانی‌ تحقیق کند. کارگردان قصد دارد در این فیلم تاثیر معنویات بر زندانی‌ها را به تصویر بکشد...',
        IMDB:'2.7'
    },
    {
        nameposter:'خبرچین',
        banner:'./images/posters/banner9.jpg',
        datepublish:'2013',
        description:'پدری بعد از اینکه برای پسرش در یک معامله مواد مخدر پاپوش دوخته شده و به زندان می افتد، برای آزاد کردن وی قبول می کند تا به عنوان یک مامور مخفی با نیروی مبارزه با مواد مخدر همکاری کند و…',
        IMDB:'6.5'
    },
    {
        nameposter:'بره دیگر',
        banner:'./images/posters/banner10.jpg',
        datepublish:'2020',
        description:'داستان این فیلم غم‌انگیز و ترسناک درباره‌ی دختری می‌باشد که در یک فرقه که همه‌ی اعضای آن را زن‌ها تشکیل می‌دهند و رهبری آن‌ها را مردی به عهده دارد ، متولد می‌شود ، خیلی زود این دختر شروع به زیر سئوال بردن آموزه‌های این مرد می‌کند که…',
        IMDB:'5'
    },
    {
        nameposter:'عزیمت',
        banner:'./images/posters/banner11.jpg',
        datepublish:'2020',
        description:'داستان این فیلم غم‌انگیز و ترسناک درباره‌ی دختری می‌باشد که در یک فرقه که همه‌ی اعضای آن را زن‌ها تشکیل می‌دهند و رهبری آن‌ها را مردی به عهده دارد ، متولد می‌شود ، خیلی زود این دختر شروع به زیر سئوال بردن آموزه‌های این مرد می‌کند که…',
        IMDB:'5'
    },
    {
        nameposter:'آلفا و امگا',
        banner:'./images/posters/banner12.jpg',
        datepublish:'2010',
        description:'2 گرگ به نام آلفا و امگا با هم مخالفت های زیادی داشتند و همیشه در حال جنگ با یک دیگر بوده اند. اما بعد از مدتی این 2 گرگ به سرزمین غریبی برده می شود که در آن جا برای رهایی با یک دیگر دوست می شوند و…',
        IMDB:'5.2'
    },
    {
        nameposter:'زن شگفت انگیز 1984',
        banner:'./images/posters/banner13.jpg',
        datepublish:'2020',
        description:'در فیلم زن شگفت انگیز ۱۹۸۴ ، در سال ۱۹۸۴ و در طول جنگ سرد، پرنسس دایانا ، زن شگفت ‌انگیز با دو دشمن قدرتمند روبه‌رو می‌شود؛ باربارا ان مینروا یا چیتا و مکسول لرد. از طرفی نیز عشقش استیو ترور برای کمک به او برمی گردد و….',
        IMDB:'5.4'
    },
];
const Movies = (props) => {
    const classes=useStyle();
    console.log(props)

    return (
        <div className={classes.root}>
            <div className={classes.part1}>
            <img src={"/images/posters/banner"+props.match.params.mId+".jpg"} className={classes.imgmovies}/>
                <div className={classes.nameMovie}>
                    <div className={classes.fontMovie}><Typography>{banners[props.match.params.mId].nameposter}</Typography></div></div>
                <div className={classes.year}><Typography>{banners[props.match.params.mId].datepublish}</Typography></div>
                <div className={classes.imdb1}><Typography>{banners[props.match.params.mId].IMDB}</Typography></div>
                <div className={classes.descrip}>
                    <Typography className={classes.des}>{banners[props.match.params.mId].description}</Typography>
                </div>
                <div className={classes.showpart}>
                    <button className={classes.btnshow} >نمایش</button>
                </div>
            </div>
            <div className={classes.part2}>
                <Typography className={classes.text}>عوامل</Typography>
            <div className={classes.casts}>
                <div className={classes.axcast}>
                    <div className={classes.cast}>
                    <img src={'/images/left4.png'} style={{width:"100px"}}/>
                <Typography>مایکل جکسون</Typography>
                <Typography style={{marginTop:'15px',fontSize:'14px'}}>بازیگر</Typography>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default withRouter(Movies) ;