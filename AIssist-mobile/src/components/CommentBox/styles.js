import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10,
      marginBottom: 10,
    },
    input: {
      borderRadius: 10,
      padding: 10,
      marginRight: 10,
      width: '80%',
      backgroundColor:'white',
      marginBottom:10
    },
    button: {
      borderRadius: 50,
      padding: 10,
      marginRight:10
    },
  });

  export default styles;