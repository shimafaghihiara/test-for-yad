import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    root:{
        position:'relative',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        minHeight:'100vh',
        paddingTop: '4rem'
    },

    divider1:
        {
            height: '100% !important',
            width: '2px !important',
            backgroundColor: '#F0F0F0 !important',
            position:'fixed',
            left:'20%',
            top:'0',

            zIndex: -1


        },
    divider2:
        {
            height: '100% !important',
            width: '2px !important',
            backgroundColor: '#F0F0F0 !important',
            position:'fixed',
            left:'80%',
            top:'10%',

            zIndex: -1
        },
    contain:
        {
            overflow:"auto"
        }



});

export default useStyle;