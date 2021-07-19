import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    root:{
        padding:'0',
        position:'relative',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        paddingBottom:'80px',

    },
    banner:
        {
            position:'relative',
            display:'block',
            height:"100vh",
            marginBottom:'10px'
        },
    image00:{
        position:'absolute',
        width:"100%",
        height:"650px",
        opacity:'1',
        transition:'opacity 0.3s',



    },
    image01:
        {
            position:'absolute',
            width:"100%",
            height:"650px",
            opacity:'0',
            transition:' opacity0.3s'
        },
    parent:
        {
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            flexWrap:'wrap'
        },
    imgposter:
        {
            backgroundColor:'red',
            width:'180px',
            height:'300px',
            marginBottom:'10px',
            borderTopRightRadius:'5px',
            borderTopLeftRadius:'5px'
        },
    detailposter:
        {
            display:'flex',
            flexDirection:'column',
            backgroundColor:'#CFCFCF',
            marginBottom:'12px',
            borderRadius:'10px'
        },
    nameposters:
        {
            textAlign:'right',
            fontFamily:'shabnam',
            fontSize:'12px ',
            paddingRight:'10px',
            marginBottom:'15px'

        },
    linkposter:
        {
            textDecorationLine: "none",
            color:'black'
        }
});

export default useStyle;