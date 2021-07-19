import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    root:{

        position:'fixed',
        height: '100%',
        width: '20%',
        overflow: 'hidden',
        left:"0",
        top:'10%',
        bottom:'200px'
    },
    tweeterParent:
        {
            padding:'10px 0',

        },
    tweeterName:
        {
            flex:1,
            direction:'rtl',
            marginRight:'10px'
        },
    profName:
        {
            flex: 1,
            fontSize: '1rem !important',
        },
    profId:
        {
            flex: 1,
            fontSize: '0.75rem !important',
            direction:'ltr'
        },
    tweeterRoot:{
        position:'absolute',
        borderRadius:'2.5rem',
        backgroundColor: "#E6E8EA",
        margin:'5px',
        marginTop:'15px',
        padding:'11px 10px',
        width:'95%',

    },
    tweeterTitle:{
        fontSize:'1.1rem !important',
        fontWeight:'600 !important',
        marginBottom:'11px'
    },
    hashtagButte:{
        width:'100%',
        direction:'rtl',
        textAlign:'right',
    }




});

export default useStyle;