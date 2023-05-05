import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    main: {
        backgroundColor:colors.grey,
        height:'100%',
        marginTop:20,
    },
    mainSpecialistView:{
        width:'100%',
    },
    specialistView:{
        width:'90%',
        height:200,
        borderStyle:'solid',
        borderRadius:10,
        backgroundColor:'white',
        marginBottom:10,
        paddingBottom:10,
        alignSelf:'center',
        display:'flex',
        flexDirection:'column',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    specialistName:{
        fontWeight:'700'
    },
    phone:{
        marginLeft:-20,
        marginTop:5,
    },
    call:{
        display:'flex',
        flexDirection:'row',
        gap:20,
    },
    profilePhoto:{
        position:'relative',
        width:135,
        height:200,
        marginTop:0,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    card:{
        display:'flex',
        flexDirection:'row',
        gap:10,
    },
    specialistInfo:{
        display:'flex',
        flexDirection:'column',
        gap:10,
        marginTop:10,
    },
});
export default styles;