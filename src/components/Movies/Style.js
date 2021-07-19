import {makeStyles} from "@material-ui/styles";
import {colors} from "@material-ui/core";

const useStyle = makeStyles({
    root: {
    position:'relative',

    },
    part1:
        {
            position:'relative',
            width:'100%',
            marginBottom:'-5px'
        },
    imgmovies:
        {
            width:'100%'
        },
    nameMovie:
        {
            position:'absolute',
            left:'78%',
            top:'8%',

        },
    fontMovie:
        {
            position:'absolute',
            fontFamily:'shabnam',
            color:'white',
            backgroundColor:'#31799A',
            border:'none',
            borderRadius:'5px',
            padding:'10px',
            opacity:'0.9',
            width:'max-content',
            height:'25px'
        },
    year:
        {
            position:'absolute',
            backgroundColor:'#31799A',
            borderRadius:'5px',
            padding:'10px',
           justifyContent:'center',
            color:'white',
            left:'73%',
            top:'9.5%',
            paddingTop:'7px',
            paddingBottom:'3px',
            opacity:'0.8',
            width:'30px',
            height:'25px',

        },
    imdb1:
        {
            position:'absolute',
            display:'flex',
            backgroundColor:'#31799A',
            borderRadius:'5px',
            padding:'10px',
            justifyContent:'center',
            color:'white',
            left:'68.9%',
            top:'9.5%',
            paddingTop:'7px',
            paddingBottom:'3px',
            opacity:'0.8',
            width:'max-content',
            height:'25px'

        },
    descrip:
        {
            position:'absolute',
            display:'flex',
            flexDirection:'row',
            left:'50%',
            top:'20%',
            right:'5%',
            backgroundColor:'#31799A',
            opacity:'0.8',
            borderRadius:'10px',
            padding:'20px'

        },
    des:
        {
            direction:'rtl',
            textAlign:'justify',
            color:'white'
        },
    showpart:
        {
            position:'absolute',
            left:'70%',
            top:'40%'
        },
    btnshow:
        {
            width:'100px',
            height:'30px',
            fontFamily:'shabnam',
            fontWeight:'700',
            backgroundColor:'#ABC8E5',
            borderRadius:'10px',
            border:'none',
            cursor:'pointer',

        },
    part2:
        {
            position:'relative',
            backgroundColor:'#485059',
            height:'200px',
            direction:'rtl',
            width:'100%',
            bottom:'28px'
        },
    casts:
        {
            display:'flex',
            flexDirection:'row',
            backgroundColor:'green',


        },
    axcast:
        {
            display:'flex',
            flexDirection:'row',
            textAlign:'center',
            marginRight:'20px'




        },
    cast:
        {
            display:'flex',
            flexDirection:'column'

        },
    text:
        {
            padding:'20px',
            color:'white'
        }

});

export default useStyle;