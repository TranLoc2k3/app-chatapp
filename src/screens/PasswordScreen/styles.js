import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#fff',
      flex: 1,
      paddingHorizontal: 12,
      paddingVertical: 16,
   },
   input: {
      marginBottom: 16,
      
      
   },
   inputOutline: {
      borderRadius: 0,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderBottomColor: '#727174',
   },
   inputContent: {
      paddingLeft: 0,
   },
   buttonLang: {
      borderRadius: 0,
   },
   buttonText: {
      color: '#586067',
   },
   buttonActive: {
      borderBottomWidth: 1,
      borderBottomColor: '#000',
      color: '#000',
   },
});

export default styles;
