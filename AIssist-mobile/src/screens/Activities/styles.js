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
    },
    formActivities:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
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
      inputLabel: {
        marginBottom: 10,
        fontSize:20,
        color:colors.white,
      },
    input: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
      },
});

export default styles;