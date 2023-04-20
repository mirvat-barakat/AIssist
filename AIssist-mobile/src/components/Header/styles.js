import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
        top:20,
        left:0,
        right:0,
        height:70,
        backgroundColor:'#F08080',
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
        color:"white",
    },
});

export default styles;