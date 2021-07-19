import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    root:{
        padding:'0',
        position:'relative',
        width: '810px',
        overflow: 'auto',
        left:"270px",
        paddingBottom:'80px',
    },
    parent:
        {
            display:"flex",
            flexDirection:'column',
            justifyContent:'space-around',
            width:'100%',
            height:'150px',

        },
    users:
        {
            height:'100px',
            direction:'rtl',
            display:'flex',

        },
    prof:{
    },
    profimg:
        {
            width:'70px',
            margin:'10px',

        },
    comentuser:
        {
            display:'flex',
            marginRight:'10px',
            marginBottom:'10px'
        },
    part2:{
        display:'flex',
        flexDirection:'column',
        justifyContent:"space-around"
    },
    part3:
        {
            display:'flex',
            flexDirection:'row',
            margin:'5px'
        },
    nameprof:
        {
            fontSize:'18px',
            marginLeft:'5px'
        },
    idprof:
        {
            direction:'ltr',
            color:'#9E9E9E',
            fontSize:'14px',
            paddingTop:'5px',
        },
    part4:
        {
            display:'flex',
            flexDirection:'row',
            padding:'5px'
        },
    btn:
        {
            borderRadius:'10px',
            backgroundColor:'#31799A',
            marginLeft:'10px'
        },
    likee:
        {
            marginLeft:'10px',
            width:'20px',
            height:'20px',

        }







});

export default useStyle;