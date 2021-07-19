import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    root:{
        padding:'0',
        position:'relative',
        height:'80px',
        overflow: 'hidden',
        paddingBottom:'80px'
    },
    gridroot:
        {
            position:'absolute',
            width:'100%',
            height:'150px',
            padding:'10px',
            direction:'rtl'

        },
    imageuser:
        {
            width:'70px',
            margin:'10px'
        },
    content:
        {
            padding:'10px',
        },
    name:
        {
            direction:'rtl',
            margin:'5px'
        },
    id:
        {
            margin:'5px',
            marginTop:'7px',
            color:'#B3B3B3',
            fontSize:'12px',
            direction:'ltr'
        },
    divider:
        {
            width: '100%',
        }




});

export default useStyle;