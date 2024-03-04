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
      borderWidth: 1,
      borderRadius: 8
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
   avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
   },
});

export default styles;
