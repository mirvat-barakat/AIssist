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
        // display:'flex',
        // flexDirection:'column',
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
        display:'flex',
        flexDirection:'column',
    },
    profilePhoto:{
        width:50,
        height:50,
        borderRadius:50,
    },
    username:{
        alignContent:'center',
        // marginTop:15,
        marginLeft:10,
    },
    imageView:{
        display:'flex',
        flexDirection:'row',
        marginLeft:15,
        alignItems:'center',
    },
    shareButton: {
        backgroundColor: colors.primary_3,
        color: '#fff',
        border: 'none',
        borderRadius: 10,
        padding: 10,
        width:100,
        cursor: 'pointer',
        fontSize: 16,
        marginTop:10,
        },
        shareButtonText: {
            color: '#fff',
            fontWeight: 'bold',
            textAlign:'center',
            },
    postContent:{
        // display:'flex',
        // flexWrap: 'wrap',   
        // textAlign: 'left',
        marginLeft:15,       
        lineHeight: 22,         
        fontSize: 16, 
    },
    

});
export default styles;