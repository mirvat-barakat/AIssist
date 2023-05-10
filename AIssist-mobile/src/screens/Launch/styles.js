import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    mainViewLaunch:{
        width:'100%',
        height:'100%',
        backgroundColor:colors.primary_1,

    },
    logoLaunch: {
        top:'50%',
        bottom:'50%',
        height: 170,
        resizeMode: 'contain',
        marginTop: -40,
      },
});
export default styles;