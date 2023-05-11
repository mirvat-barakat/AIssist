import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 70,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      paddingHorizontal: 10,
      marginTop:25,
    },
    backButton: {
      marginRight: 10,
    },
    titleContainer: {
      flex: 1,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 22,
      color:'white',
      textAlign:'center',
      marginRight:25
    },
  });

  export default styles;