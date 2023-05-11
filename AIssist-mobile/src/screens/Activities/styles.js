import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    mainView:{
        width:'100%',
        backgroundColor:'#F2F4F4',
    },
    intro:{
      marginTop:'5%',
      },
    activitiesText:{
        marginLeft:'5%',
        marginRight:'5%',
        marginBottom:'5%',
        marginTop:10,
        fontSize:16,
        fontWeight:'500',
        // alignSelf:'center',
    },
    mainFormActivities:{
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
        backgroundColor:'#fff',
        marginLeft:'5%',
        marginRight:'5%',
        width:'90%',
        alignSelf:'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingTop:10,
        paddingBottom:10
    },
    formActivities:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        alignSelf:'center',
        marginBottom:10,
        marginLeft:40,
        marginRight:30,
    },
    inputLabel1:{
        color:'black',
        fontSize:16,
        fontWeight:'600',
        marginBottom:5
    },
    button1: {
        backgroundColor: colors.primary_3,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width: 135,
        marginBottom: 10,
        marginTop:10,
        marginLeft:25,
        alignSelf:'center'
      },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight:'bold'
      },
    input1: {
        backgroundColor: colors.white,
        borderWidth:0.4,
        borderColor:'#ccc',
        borderRadius: 10,
        fontSize:16,
        padding: 10,
        width:300
      },
      generatedActivities:{
        margintop:'5%',
        marginleft:'5%',
        width:'90%',
        alignSelf:'center',
        display:'flex',
        flexDirection:'column',
        marginBottom:'5%',
        fontSize:16
      },
      activityView:{
        width:'100%',
        marginRight:'5%',
        marginLeft:'5%',
        borderStyle:'solid',
        backgroundColor:'white',
        borderWidth:2,
        borderLeftColor:"#fff",
        borderBottomColor:'#fff',
        borderTopColor:'#fff',
        borderRightWidth:5,
        borderRightColor:'#F08080',
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
        paddingLeft:10,
        paddingBottom:10,
        paddingRight:10,
        paddingTop:10,
        
    },
    activityName:{
      marginBottom:20, 
      textAlign:'center',
      color:colors.primary_1,
      fontWeight:'700',
    },
    activityDescription:{
      textAlign:'justify',
    },
    feedbackText: {
      marginBottom:20,
      color: 'black',
      fontSize: 15,
      marginLeft:'5%',
    },
    feedbackLink: {
      color: colors.primary_3,
      textDecorationLine: 'underline',
      fontSize:15,
      fontWeight:'600',

    },
});

export default styles;