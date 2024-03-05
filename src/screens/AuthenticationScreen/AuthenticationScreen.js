import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { IconButton, TextInput, Button } from 'react-native-paper';
import { URL } from '../../components/URL';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const AuthenticationScreen = () => {
   const navigation = useNavigation();
   const [remainingTime, setRemainingTime] = useState(60);

   useEffect(() => {
      const interval = setInterval(() => {
         setRemainingTime((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
   }, []);

   const resendCode = () => {
      setRemainingTime(60);
   };

   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   const buttonTiepTuc = () => {
      navigation.navigate('PasswordScreen');
   };

   return (
      <View style={styles.container}>
         <Text style={{ fontWeight: '600' }}>
            Vui lòng không chia sẻ mã xác nhận của bạn với bất kỳ ai
         </Text>

         <Icon
            name="phone"
            size={30}
            color="#4A8CFE"
            style={{ alignSelf: 'center', paddingTop: 30 }}
         />

         <Text style={{ fontWeight: '600', textAlign: 'center', padding: 20 }}>
            Mã xác nhận đang được gửi đến số điện thoại của bạn
         </Text>

         <TextInput style={styles.input}
            mode="outlined"
            placeholder="Mã xác nhận"
            outlineStyle={styles.inputOutline}
            contentStyle={styles.inputContent}
            keyboardType="phone-pad"
            maxLength={6}
         />

         <View
            style={{
               flexDirection: 'row',
               justifyContent: 'center',
               alignItems: 'center',
               marginBottom: 10,
               padding: 20,
            }}
         >
            <Text style={{ marginRight: 5 }}>
               Gửi lại mã xác nhận sau {remainingTime} giây
            </Text>
            <Text onPress={resendCode}>Gửi lại mã xác nhận</Text>
         </View>

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
            onPress={buttonTiepTuc}        
             >
            Tiếp tục
         </Button>
      </View>
   );
};
