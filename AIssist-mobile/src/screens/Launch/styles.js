import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.primary_1,
      },
      logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
      },
      logo: {
        width: 200,
        height: 200,
      },
      bottomContainer: {
        marginBottom: 50,
      },
      button: {
        backgroundColor: colors.primary_3,
        paddingVertical: 10,
        paddingHorizontal: 80,
        borderRadius: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        alignSelf:'center'
      },
});
export default styles;