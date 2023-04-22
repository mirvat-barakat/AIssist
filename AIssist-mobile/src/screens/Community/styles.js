import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    main: {
        backgroundColor:colors.grey,
    },
    Heading: {
        fontSize:32,
        marginTop:30,
        marginLeft:15,
        fontWeight:'bold',
    },
    TextInput:{
        height:39,
        width:'90%',
        backgroundColor:colors.white,
        borderRadius:10,
    },
    

});
export default styles;