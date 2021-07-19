import {makeStyles} from "@material-ui/styles";
import {colors} from "@material-ui/core";

const useStyle = makeStyles({
    root: {
        position:'fixed',
        display:'block',
        width:'100%',
        height:'4rem',
        zIndex:1,
        backgroundColor:"#31799A",
        top: 0
    },
    menu2:{
        borderBottomRightRadius:'10px',
        borderBottomLeftRadius:'10px',
        position:'fixed',
        width:'12rem',
        height:'12rem',
        zIndex:4,
        backgroundColor:"#31799A",
        right:'2rem',
        top:'62px',
        transition:'height .2s',

    },
    menu3:{
        borderBottomRightRadius:'10px',
        borderBottomLeftRadius:'10px',
        position:'fixed',
        width:'12rem',
        height:'0',
        zIndex:4,
        backgroundColor:"#31799A",
        right:'2rem',
        top:'62px',
        transition:'height .2s'

    },
    showtexts:{
        height:'100%'

    },
    hidetexts:{
        visibility:"hidden",
    },
    profilepic:{
        width:'50px',

    },
    detailText:{
        textAlign:"center",
        color:'white',
        fontWeight:'50',
        paddingTop:'20px',
        textDecorationLine: "none"
    },
   detailText2:
        {
            visibility:''


        },
    Idprof:{
        color:'#D0DCE1',
        fontSize:'12px'

    },
    Nameprof:{
        color:'#FFFFFF',
        fontSize:'15px'

    },
    parentText:{
        marginLeft: '0.5rem',
        marginTop:'10px',
        width: 'max-content',
        direction: 'ltr'
    },
    menu:{
       display:'flex',
        flexDirection:'row',
        flexGrow:1,
        color:'white'
    },
    btnmenu:{
        position:'fixed',
        top:"15px",
        right:'5%',
        color:'white !important',
        fontFamily:'shabnam !important',
        width:'100px',
        height:'30px',
        border:'none',
        backgroundColor:'unset'
    },
    logo:{
        position:'fixed',
        width:'55px',
        right:'1%',
        top:'0'



    },
    profDetail:{
        display:'flex',
        flexDirection:'row',
        marginLeft:'20px',
        marginTop:'10px'
    },
    columnprof:
        {
            display:'flex',
            flexDirection:'column',
            marginLeft:'10px'
        }



});

export default useStyle;