import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    mainView:{
        width:'100%',
        backgroundColor:'#F2F4F4',
    },
    activitiesTitle:{
        fontWeight:'bold',
        fontSize:40,
        marginLeft:10,
        marginBottom:10,
        marginTop:10,
        alignSelf:'center',
    },
    activitiesText:{
        marginLeft:10,
        marginBottom:10,
        marginTop:10,
        alignSelf:'center',
    },
    mainFormActivities:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        borderStyle:'solid',
        borderWidth:2,
        borderLeftColor:'#F08080',
        borderRightColor:"#fff",
        borderBottomColor:'#fff',
        borderTopColor:'#fff',
        borderLeftWidth:5,
        backgroundColor:'#fff',
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
    formActivities:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        marginBottom:10
    },
    inputLabel1:{
        color:'black',
        fontWeight:'600'
    },
    button1: {
        backgroundColor: colors.primary_3,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width: 250,
        marginBottom: 10,
        marginTop:10,
      },
    buttonText: {
        color: colors.white,
        fontSize: 18,
      },
    input1: {
        backgroundColor: colors.white,
        borderWidth:0.1,
        borderColor:'#ccc',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        width:250
      },
});

export default styles;