import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ComboBox } from 'react-native-paper';

export const ProfileScreen = () => {
   const navigation = useNavigation();
   const [showPassword, setShowPassword] = useState(false);
   const [name, setName] = useState('');
   const [gender, setGender] = useState('');
   const [dob, setDob] = useState('');

   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <View style={styles.container}>
         <Text
            style={{ fontWeight: '600', textAlign: 'center', marginBottom: 20 }}
         >
            Hãy cập nhật thông tin cá nhân của bạn
         </Text>

         {/* Avatar */}
         <View style={styles.avatar}>
            <Text style={{ fontWeight: '600', color: '#fff' }}>Avatar</Text>
         </View>

         {/* Input Tên */}
         <TextInput
            mode="outlined"
            placeholder="Tên của bạn"
            style={styles.input}
            outlineColor="#000"
            selectionColor="#000"
            value={name}
            onChangeText={setName}
         />

         {/* Input Giới tính */}
         <ComboBox
            style={styles.input}
            label="Giới tính"
            data={[
               { label: 'Nam', value: 'Nam' },
               { label: 'Nữ', value: 'Nữ' },
               { label: 'Khác', value: 'khác' },
            ]}

            // <TextInput
            //    mode="outlined"
            //    placeholder="Giới tính"
            //    style={styles.input}
            //    outlineColor="#000"
            //    selectionColor="#000"
            //    value={gender}
            //    onChangeText={setGender}
         />

         {/* Input Sinh nhật */}
         <TextInput
            mode="outlined"
            placeholder="Sinh nhật"
            style={styles.input}
            outlineColor="#000"
            selectionColor="#000"
            value={dob}
            onChangeText={setDob}
         />

         {/* Button Xác nhận */}
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
            Xác nhận
         </Button>
      </View>
   );
};
