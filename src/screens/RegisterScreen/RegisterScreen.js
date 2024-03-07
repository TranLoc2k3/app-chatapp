import { View, Text, Linking } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import { IconButton, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { initializeRecaptcha } from 'react-native-recaptcha-enterprise';

export const RegisterScreen = () => {
   const navigation = useNavigation();

   const [confirm, setConfirm] = useState(null);

   async function signInWithPhoneNumber(phoneNumber) {
      const confirmation = await auth()
         .signInWithPhoneNumber(phoneNumber)
         .then(async (confirmation) => {
            console.log('Confirmation: ', confirmation);
            try {
               await confirmation.confirm('012345').then((user) => {
                  alert('Đăng nhập thành công. User:  ${user.uid}');
               });
            } catch (error) {
               console.log('error: ', error);
               console.log('Invalid code.');
               alert('Verification code is invalid: ${error}');
            }
         })
         .catch((error) => {
            console.log('Error: ', error);
         });
      setConfirm(confirmation);
   }

   // Handle confirm code button press
   async function confirmCode() {
      try {
         await confirm.confirm('012345').then((user) => {
            alert('Đăng nhập thành công. User:  ${user.uid}');
         });
      } catch (error) {
         console.log('error: ', error);
         console.log('Invalid code.');
         alert('Verification code is invalid: ${error}');
      }
   }

   const handleIconPress = () => {
      //get phone number from input
      signInWithPhoneNumber('+84377732317');

      //if(confirm !== null)
      //confirmCode();

      // navigation.navigate('AuthenticationScreen');
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
