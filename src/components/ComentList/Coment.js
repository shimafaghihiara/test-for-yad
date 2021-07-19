import React, {useState} from 'react';
import {Button, ButtonBase} from "@material-ui/core";
import useStyle from "./Style";
import Divider from "@material-ui/core/Divider";

const Coment = ({item}) => {
    const classes=useStyle();

    const [like,setLike]=useState(false);
    const likes=()=>{
        setLike(!like);

    }
    return (

            <div className={classes.parent}>
                <div className={classes.users}>
                    <div className={classes.prof}>
                        <img src={item.img1} className={classes.profimg}/>
                    </div>
                    <div className={classes.part2}>
                        <div className={classes.part3}>
                            <div className={classes.nameprof}>{item.name}</div>
                            <div className={classes.idprof}> {item.id} </div>
                        </div>
                        <div className={classes.comentuser}>{item.commentx}</div>
                    </div>
                </div>
                <div className={classes.part4}>
                    <Button className={classes.btn}>share</Button>
                    <ButtonBase onClick={likes}><img src={like ? "./images/heart2.png" :"./images/heart.png"} className={classes.likee} /></ButtonBase>

                </div>
                <Divider orientation={"horizontal"}    />
            </div>


    );
};

export default Coment;