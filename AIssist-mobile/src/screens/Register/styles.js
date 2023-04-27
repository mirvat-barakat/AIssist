import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    view:{
      height:'100%',
      },
    container: {
        flex: 1,
        backgroundColor: colors.primary_1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    inputContainer: {
        width: 250,
        marginBottom: 20,
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
    icon: {
        color: colors.primary_3,
    },
    loginText: {
      color: colors.white,
      fontSize: 16,
    },
  loginLink: {
    marginTop: 10,
      color: colors.primary_3,
      textDecorationLine: 'underline',
    },
});

export default styles;