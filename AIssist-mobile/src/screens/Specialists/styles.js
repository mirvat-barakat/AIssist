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
        borderStyle:'solid',
        backgroundColor:'white',
        // marginTop:10,
        marginBottom:10,
        paddingBottom:10,
        paddingTop:10,
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
        fontWeight:'600'
    },
    phone:{
        marginLeft:-20,
        marginTop:5,
    },
    call:{
        display:'flex',
        flexDirection:'row',
        gap:20,
        marginTop:10
    },
    callIcon:{
        marginLeft:20,
    },
    profilePhoto:{
        width:100,
        height:100,
        borderRadius:10,
        marginLeft:10
    },
    card:{
        display:'flex',
        flexDirection:'row',
        gap:20,
    },
    specialistInfo:{
        display:'flex',
        flexDirection:'column',
        gap:10,
    },
});
export default styles;