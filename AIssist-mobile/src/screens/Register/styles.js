import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    logo: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginTop: -10,
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop:-20,
      },
    inputContainer: {
        width: 250,
        marginBottom: 20,
      },
    inputLabel: {
        marginBottom: 10,
        fontSize:20,
      },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
      },
    button: {
        backgroundColor: colors.primary_3,
        borderRadius: 10,
        padding: 12,
        alignItems: 'center',
        width: 100,
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
});

export default styles;