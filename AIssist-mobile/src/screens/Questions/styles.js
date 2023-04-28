import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    mainViewQuestions:{
        width:'100%',
        backgroundColor:'#F2F4F4',
    },
    container: {
      flex: 1,
      padding: 20,
    },
    questionsTitle:{
        fontWeight:'bold',
        fontSize:40,
        marginLeft:10,
        marginBottom:10,
        marginTop:10,
        alignSelf:'center',
    },
    questionsText:{
        marginLeft:10,
        marginBottom:10,
        marginTop:10,
        alignSelf:'center',
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
      padding: 10,
      marginRight: 10,
    },
    searchButton: {
      backgroundColor: '#F2F4F4',
      borderRadius: 5,
      padding: 10,
    },
    searchButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    searchIcon: {
      marginRight: 5,
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
  });
  
  export default styles;
  
  
  
  
  
  