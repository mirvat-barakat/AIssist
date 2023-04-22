import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    main: {
        backgroundColor:colors.grey,
    },
    Heading: {
        fontSize:32,
        marginTop:30,
        marginLeft:15,
        fontWeight:'bold',
    },
    TextInput:{
        height:39,
        width:'90%',
        backgroundColor:colors.white,
        borderRadius:10,
        marginLeft:15,
        flexWrap:'wrap',
        padding:10,
    },
    TextInputView:{
        dispaly:'flex',
        alignItems: 'center',
    },
    mainPostView:{
        width:'100%',
    },
    postTitle:{
        width:'90%',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
    },
    postView:{
        width:'100%',
        alignItems:'center',
        marginTop:20,
    },
    profilePhoto:{
        width:50,
        height:50,
        borderRadius:50,
    },
    username:{
        alignContent:'center',
        marginTop:15,
    },
    imageView:{
        display:'flex',
        flexDirection:'row'
    },
    

});
export default styles;