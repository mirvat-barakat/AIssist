import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    box:{
    position: 'absolute',
    bottom:0,
    alignSelf:'center',
  },
  mainView:{
    marginTop:'10%',
  },
  mainCommentView:{
    display:'flex',
    flexDirection:'row',
    marginTop:'10%',
    marginLeft:'10%'
  },
  commentView:{
    height:'100%',
  },
  profilePhoto:{
    width:50,
    height:50,
    borderRadius:50,
  },
  comment:{
    borderRadius:10,
    backgroundColor:'white',
    marginLeft:'5%',
    marginRight:'5%'
  },
  commentContent:{
    top:10,      
    lineHeight: 22,         
    fontSize: 16, 
  },

});
export default styles;





