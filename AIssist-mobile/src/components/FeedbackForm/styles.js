import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({

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
        borderColor:'#ccc',
        borderWidth:0.1,
        backgroundColor: colors.white,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        width:250
      },
});

export default styles;