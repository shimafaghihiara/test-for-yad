import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    root:{
        position:'fixed',
        height: '100%',
        width: '20%',
        overflow: 'hidden',
        left:"80%",
        top:'10%'
    },
    logoRigh:{
        width:'80px',
        paddingTop:'5px',
        textAlign:'right'
    },
    title:{
        direction:'rtl',
        marginTop:'15px',

    },
    titleright:{
        paddingTop:'40px',
        paddingLeft:'30px',
        fontWeight:'800'
    },
    items:{
        margin:'20px 10px 10px'
    },
    hashtagButte:
        {
            paddingTop:'20px',
            paddingRight:'30px',
            width:'100%',
            direction:'rtl',
            textAlign:'right'
        },
    content:{
        width:'100%' ,
        direction:'rtl',
        textAlign:'right',
        margin:'5px'
    },
    hashtag:
        {
            direction:'rtl'

        }




});

export default useStyle;