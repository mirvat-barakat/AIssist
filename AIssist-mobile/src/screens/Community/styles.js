import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    main: {
        backgroundColor:colors.grey,
        height:'100%',
        marginTop:20,
    },
    intro:{
        marginTop:20,
      },
    scroll:{
        height:'100%',
    },
    Heading: {
        fontSize:32,
        marginTop:30,
        marginLeft:'5%',
        fontWeight:'bold',
        marginBottom:10
    },
    TextInput:{
        height:39,
        width:'90%',
        backgroundColor:colors.white,
        borderRadius:10,
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
        top:10,
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
    },
    postView:{
        width:'90%',
        borderStyle:'solid',
        backgroundColor:'white',
        marginTop:20,
        alignSelf:'center',
        display:'flex',
        flexDirection:'column',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    profilePhoto:{
        width:50,
        height:50,
        borderRadius:50,
    },
    username:{
        alignContent:'center',
        marginLeft:10,
        // fontSize:'25',
        fontWeight:'600'
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
        // fontSize: 16,
        marginTop:10,
        marginRight:10,
        alignSelf:'flex-end',
        marginRight:'5%'
    },
    shareButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign:'center',
    },
    commentButton: {
        color: '#fff',
        border: 'none',
        borderRadius: 10,
        padding: 10,
        width:100,
        cursor: 'pointer',
        fontSize: 16,
        marginTop:10,
    },
    commentButtonText: {
        color: 'black',
        fontWeight: '600',
        textAlign:'center',
        textDecorationLine:'underline',
    },
    postContent:{
        top:10,
        marginLeft:15,       
        lineHeight: 22,         
        fontSize: 16, 
    },
    icon: {
        color: colors.black,
        marginTop:15,
    },
    actions:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        flexWrap:'nowrap',
    },
    

});
export default styles;