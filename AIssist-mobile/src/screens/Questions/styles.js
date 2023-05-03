import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    mainViewQuestions:{
        width:'100%',
        backgroundColor:'#F2F4F4',
    },
    intro:{
      marginTop:20,
    },
    container: {
      flex: 1,
      padding: 20,
    },
    questionsTitle:{
        fontWeight:'bold',
        fontSize:40,
        marginLeft:20,
        marginBottom:10,
        marginTop:10,
        alignSelf:'flex-start',
    },
    questionsText:{
        marginLeft:20,
        marginBottom:10,
        marginRight:20,
        marginTop:10,
        alignSelf:'center',
        fontSize:16,
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
      marginRight: 10,
      height:100,
      shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    searchIcon: {
      marginRight: 10,
    },
    result: {
      marginTop: 20,
    },
    resultTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    resultText: {
      fontSize: 16,
    },
    answer:{
      marginLeft:20,
      marginBottom:10,
      marginRight:20,
      marginTop:10,
      alignSelf:'center',
      fontSize:16,
  },
  });
  
  export default styles;
  
  
  
  
  
  