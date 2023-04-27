import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    header:{
        left:0,
        right:0,
        height:80,
        backgroundColor:colors.primary_1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: 'center',
        elevation:4,
    },
    logo1:{
        top:5,
        width: 90,
        height: 80,
        resizeMode: 'contain',
    },
    icon: {
        top:10,
        paddingRight:20,
        color: colors.white,
    },
});

export default styles;