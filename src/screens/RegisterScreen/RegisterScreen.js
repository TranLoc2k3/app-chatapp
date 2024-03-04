import { View, Text, Linking } from 'react-native';
import React from 'react';
import styles from './styles';
import { IconButton, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export const RegisterScreen = () => {
   const navigation = useNavigation();

   const handleIconPress = () => {
      navigation.navigate('AuthenticationScreen');
   };
   return (
      <View style={styles.container}>
         <Text style={{ fontWeight: '600' }}>
            Nhập số điện thoại của bạn để tạo tài khoản mới
         </Text>
         <TextInput
            mode="outlined"
            placeholder="Nhập số điện thoại"
            style={styles.input}
            outlineStyle={styles.inputOutline}
            contentStyle={styles.inputContent}
         />

         <IconButton
            style={styles.btnNext}
            mode="contained"
            containerColor="#4B8FFE"
            iconColor="#fff"
            icon="arrow-right"
            onPress={handleIconPress}
         />
      </View>
   );
};
