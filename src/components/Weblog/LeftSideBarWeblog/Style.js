import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    root:{
        position:'absolute',
        width:'30%',
        overflow:'hidden'


    },
    category:
        {
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-around',
            height:'max-content',
            width:'100%',
            alignItems:'center',
            paddingTop:'10px',
        },
     subcategory:
        {

            backgroundColor:'#D8E0E8',
            padding:'5px',
            borderRadius:'5px',
          marginBottom:'10px',

         },
    img1:
        {
            width:'370px'
        },
    TextTitle:
        {
            direction:'rtl',
            textAlign:'right',
            padding:'2px',
            fontSize:'12px'

        }


});

export default useStyle;