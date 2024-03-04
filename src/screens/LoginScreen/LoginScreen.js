import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { IconButton, TextInput, Button } from 'react-native-paper';
import { URL } from '../../components/URL';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export const LoginScreen = () => {
   const navigation = useNavigation();
   const [showPassword, setShowPassword] = useState(false);
   const [phoneNumber, setPhoneNumber] = useState('');
   const [password, setPassword] = useState('');

   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <View style={styles.container}>
         <Text style={{ fontWeight: '600' }}>
            Vui lòng nhập số điện thoại và mật khẩu để đăng nhập
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

         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
               mode="outlined"
               placeholder="Mật khẩu"
               style={[styles.input, { flex: 1 }]}
               outlineStyle={styles.inputOutline}
               contentStyle={styles.inputContent}
               value={password}
               onChangeText={setPassword}
               secureTextEntry={!showPassword}
            />
            <IconButton
               icon={showPassword ? 'eye-off' : 'eye'}
               onPress={toggleShowPassword}
               color="#000"
            />
         </View>

         <View
            style={{
               flexDirection: 'row',
               justifyContent: 'flex-start',
               marginVertical: 6,
            }}
         >
            <Text>
               <URL url="">Lấy lại mật khẩu</URL>
            </Text>
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
            onPress={() => navigation.navigate('AuthStack')}
         >
            Đăng nhập
         </Button>
      </View>
   );
};
