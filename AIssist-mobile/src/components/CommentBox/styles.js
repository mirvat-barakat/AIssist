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
      flex: 1,
      borderRadius: 10,
      padding: 10,
      marginRight: 10,
      width: 250,
      backgroundColor:'white',
    },
    button: {
      borderRadius: 50,
      padding: 10,
    },
  });

  export default styles;