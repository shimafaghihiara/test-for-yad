import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    root:{
        position:'relative',
        height: 'fit-content',
        overflow: 'hidden',
        backgroundColor:'#31799A',
        bottom:'0',
        display:'block',
        padding:'10px',
        paddingTop:'30px',
        color:'white',



    },
    column1:{
        direction:'rtl',
        paddingRight:"40px",
        paddingLeft:'80px',
        paddingBottom:'40px'
    },
    fasele:{
        paddingBottom:'5px'
    },
    rulefooter:{
        textAlign:'center',
        fontSize:'14px',
        fontFamily:'shabnam !important',
        paddingBottom:'20px',
        direction:'rtl',
        color:'#D0DAE4 !important'
    }





});

export default useStyle;