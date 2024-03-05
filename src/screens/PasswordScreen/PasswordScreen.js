import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper'; // Import Snackbar
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export const PasswordScreen = () => {
   const navigation = useNavigation();
   const [showPassword, setShowPassword] = useState(false);
   const [phoneNumber, setPhoneNumber] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState(''); // State cho xác nhận mật khẩu
   const [errorMessage, setErrorMessage] = useState(''); // State cho thông báo lỗi

   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   const handleContinue = () => {
      if (password !== confirmPassword) {
         setErrorMessage('Mật khẩu và xác nhận mật khẩu không khớp'); // Nếu mật khẩu và xác nhận mật khẩu không khớp, hiển thị thông báo lỗi
         return; // Dừng xử lý tiếp theo
      }
      // Xử lý tiếp theo nếu mật khẩu và xác nhận mật khẩu khớp
      navigation.navigate('ProfileScreen');
   };

   return (
      <View style={styles.container}>
         <Text style={{ fontWeight: '600' }}>
            Vui lòng nhập mật khẩu để đăng nhập vào tài khoản của bạn
         </Text>

         <TextInput
            mode="outlined"
            placeholder="Số điện thoại"
            style={styles.input}
            outlineStyle={styles.inputOutline}
            contentStyle={styles.inputContent}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
         />

         <TextInput
            mode="outlined"
            placeholder="Mật khẩu"
            style={[styles.input, { marginBottom: 12 }]}
            outlineStyle={styles.inputOutline}
            contentStyle={styles.inputContent}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
         />

         <TextInput
            mode="outlined"
            placeholder="Xác nhận mật khẩu"
            style={styles.input}
            outlineStyle={styles.inputOutline}
            contentStyle={styles.inputContent}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showPassword}
         />

         <Button
            mode="contained"
            style={[
               styles.button,
               {
                  backgroundColor: '#4A8CFE',
                  width: '50%',
                  alignSelf: 'center',
               },
            ]}
            contentStyle={styles.button}
            onPress={handleContinue}
         >
            Tiếp tục
         </Button>

         {/* Hiển thị Snackbar khi có thông báo lỗi */}
         <Snackbar
            visible={!!errorMessage} // Hiển thị Snackbar nếu có thông báo lỗi
            onDismiss={() => setErrorMessage('')} // Ẩn Snackbar khi người dùng nhấn vào
         >
            {errorMessage}
         </Snackbar>
      </View>
   );
};
