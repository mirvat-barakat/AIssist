import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';



const styles = StyleSheet.create({
    mainViewQuestions:{
        width:'100%',
        backgroundColor:'#F2F4F4',
        alignContent:'center'
    },
    questionIcon:{
      width:100,
      height:100,
      alignSelf:"center"
    },
    heading:{
      alignSelf:'center',
      fontWeight:'700',
      fontSize:28,
      color:colors.primary_1
    },
    intro:{
      marginTop:20,
    },
    container: {
      flex: 1,
      padding: 20,
    },
    questionsText:{
        marginLeft:20,
        marginBottom:10,
        marginRight:20,
        marginTop:10,
        alignSelf:'center',
        fontSize:16,
        fontWeight:'500',
        textAlign:'justify'
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor:'white',
      padding: 10,
      marginRight: 5,
      shadowColor: '#000',
      fontSize: 16,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    result: {
      marginTop: 10,
    },
    resultTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    resultText: {
      fontSize: 16,
    },
    shareButton: {
      backgroundColor: colors.primary_3,
      color: '#fff',
      border: 'none',
      borderRadius: 10,
      padding: 10,
      width:135,
      cursor: 'pointer',
      marginTop:10,
      marginRight:10,
      alignSelf:'flex-end',
      marginRight:5
  },
  shareButtonText: {
      color: '#fff',
      fontSize:18,
      fontWeight: 'bold',
      textAlign:'center',
  },
    answer:{
      marginLeft:20,
      marginBottom:10,
      marginRight:20,
      marginTop:10,
      alignSelf:'center',
      fontSize:16,
      textAlign:'justify'

  },
  });
  
  export default styles;
  
  
  
  
  
  