import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    mainViewFeedbacks:{
        width:'100%',
        backgroundColor:'#F2F4F4',
    },
    intro:{
        marginTop:20,
      },
    feedbacksTitle:{
        fontWeight:'bold',
        fontSize:40,
        marginLeft:10,
        marginBottom:10,
        marginTop:10,
        alignSelf:'center',
    },
    feedbacksText:{
        marginLeft:10,
        marginBottom:10,
        marginTop:10,
        alignSelf:'center',
    },
    mainFormFeedbacks:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        borderStyle:'solid',
        borderWidth:2,
        borderLeftColor:'#F08080',
        borderRightColor:"#fff",
        borderBottomColor:'#fff',
        borderTopColor:'#fff',
        borderLeftWidth:5,
        backgroundColor:'#F2F4F4',
        marginLeft:10,
        marginBottom:20,
        marginRight:10,
        width:300,
        alignSelf:'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    formFeedbacks:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        marginBottom:10,
        marginLeft:20,
        marginTop:5,
    },
    inputLabel1:{
        color:'black',
        fontWeight:'600',
        paddingLeft:10,
        paddingRight:20,
        marginBottom:5
    },
    button1: {
        backgroundColor: colors.primary_3,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width: 250,
        marginBottom: 10,
        marginTop:10,
        marginLeft:20,
      },
    buttonText: {
        color: colors.white,
        fontSize: 18,
      },
    input1: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        width:250
      },
});

export default styles;