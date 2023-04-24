import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    header:{
        left:0,
        right:0,
        height:90,
        backgroundColor:colors.primary_1,
        flexDirection:"row",
        justifyContent:"space-between",
        elevation:4,
    },
    logo1:{
        top:5,
        width: 80,
        height: 65,
        resizeMode: 'contain',
    },
    icon: {
        top:20,
        left:-20,
        color: colors.white,
    },
});

export default styles;