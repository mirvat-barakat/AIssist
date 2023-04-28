import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    mainView:{
        width:'100%',
        backgroundColor:'#F2F4F4',
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
    button: {
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