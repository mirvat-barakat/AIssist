import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

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
        width: 270,
        marginBottom: 20,
        marginTop:-20,
      },
    inputLabel: {
        marginBottom: 10,
        fontSize:20,
        color:colors.white,
        marginTop:10,
      },
    input: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
      },
    button: {
        backgroundColor: colors.primary_3,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width: 135,
        marginBottom: 20,
        marginTop:10,
        alignSelf:'center'
      },
    buttonText: {
        color: colors.white,
        fontSize: 18,
      },
    icon: {
        color: colors.primary_3,
    },
    loginText: {
      color: colors.white,
      fontSize: 16,
    },
  loginLink: {
      color: colors.primary_3,
      textDecorationLine: 'underline',
    },
});

export default styles;