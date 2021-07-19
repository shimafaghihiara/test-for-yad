import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    root:{
        padding:'0',
        position:'relative',
        height: '100%',
        width: '810px',
        overflow: 'hidden',
        left:"270px",
        paddingBottom:'80px'
    },
    slider:{
        height: '350px',
        width:'810px',
        left:"0",
        top:'0',
        position: 'relative'

    },
    content:{
        width:'790px !important',
       padding:'10px'


    },
    images:
        {
            position: 'absolute',
            width:'100%',
            left:"0",
            top:'0',
            opacity:'1',
            transition: "opacity 0.7s"

        },
    images2:
        {
            position: 'absolute',
            width:'100%',
            left:"0",
            top:'0',
            opacity:'0',
            transition: "opacity 0.7s"

        },
    banner:{
        position:'relative',
        top:"5px",
        left:0,
        height:'150px',
        borderRadius:'10px'
    },
    littlebanner:{
        position:'absolute',
        width:'250px',
        backgroundColor:'pink',
        height:'140px',
        top:"5px",
        left:"10px",

    },
    radios:{
        borderRadius:'10px'
    },
    littlebanner2:{
        position:'absolute',
        width:'250px',
        backgroundColor:'pink',
        height:'140px',
        top:"5px",
        left:"280px",

    },
    littlebanner3:{
        position:'absolute',
        width:'250px',
        backgroundColor:'pink',
        height:'140px',
        top:"5px",
        left:"550px",

    }




});

export default useStyle;