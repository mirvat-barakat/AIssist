import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';
import { fonts} from '../../constants/Fonts';

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: colors.primary_1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    logo: {
        width: 170,
        height: 170,
        resizeMode: 'contain',
        marginTop: -40,
      },
      form:{
        marginTop:40,
      },
    inputContainer: {
        width: 300,
        marginBottom: 20,
        marginTop:-20,
      },
    inputLabel: {
        marginBottom: 10,
        fontSize:16,
        fontWeight:'500',
        color: colors.white,
        marginTop:10,
      },
    input: {
        backgroundColor:colors.white,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
      },
    button: {
        backgroundColor: colors.primary_3,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        alignSelf:'center',
        width: 135,
        marginBottom: 20,
      },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight:'bold'
      },
    forgotPasswordLink: {
        justifyContent:'flex-end',
        marginLeft:170,
        marginBottom:20,
        fontWeight:'600'
      },
    forgotPasswordText: {
        color: colors.primary_3,
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight:'600'
      },
    registerText: {
        color: colors.white,
        fontWeight:'500',
        fontSize: 16,
      },
    registerLink: {
        color: colors.primary_3,
        textDecorationLine: 'underline',
        fontSize:16,
        fontWeight:'600',
      },
    icon: {
        color: colors.primary_3,
    },
});

export default styles;