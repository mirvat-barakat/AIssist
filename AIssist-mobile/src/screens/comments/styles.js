import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    box:{
    position: 'absolute',
    bottom:0,
    alignSelf:'center',
  },
  mainCommentView:{
    marginTop:'10%',
  },
  commentView:{
    height:'100%',
  },
  comment:{
    borderRadius:10,
    backgroundColor:'white',
    marginLeft:'20%',
    marginRight:'5%'
  },
  commentContent:{
    top:10,
    marginLeft:15,       
    lineHeight: 22,         
    fontSize: 16, 
  },

});
export default styles;





