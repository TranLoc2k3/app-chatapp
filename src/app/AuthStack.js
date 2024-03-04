import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InterfaceScreen } from '../screens/InterfaceScreen/InterfaceScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PasswordScreen from '../screens/PasswordScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
   return (
      <Stack.Navigator initialRouteName="Interface">
         <Stack.Screen
            name="Interface"
            component={InterfaceScreen}
            options={{ headerShown: false }}
         />

         <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
               headerTitle: 'Đăng nhập',
               headerBackground: () => (
                  <View
                     style={{
                        backgroundColor: '#4A8CFE',
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ddd',
                     }}
                  />
               ),
               headerTintColor: '#fff',
            }}
         />
         <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
               headerTitle: 'Đăng ký',
               headerBackground: () => (
                  <View
                     style={{
                        backgroundColor: '#4A8CFE',
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ddd',
                     }}
                  />
               ),
               headerTintColor: '#fff',
            }}
         />
         <Stack.Screen
            name="AuthenticationScreen"
            component={AuthenticationScreen}
            options={{
               headerTitle: 'Nhập mã xác nhận',
               headerBackground: () => (
                  <View
                     style={{
                        backgroundColor: '#4A8CFE',
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ddd',
                     }}
                  />
               ),
               headerTintColor: '#fff',
            }}
         />
         <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
               headerTitle: 'Thông tin cá nhân',
               headerBackground: () => (
                  <View
                     style={{
                        backgroundColor: '#4A8CFE',
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ddd',
                     }}
                  />
               ),
               headerTintColor: '#fff',
            }}
         />
         <Stack.Screen
            name="PasswordScreen"
            component={PasswordScreen}
            options={{
               headerTitle: 'Mật khẩu đăng nhập',
               headerBackground: () => (
                  <View
                     style={{
                        backgroundColor: '#4A8CFE',
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ddd',
                     }}
                  />
               ),
               headerTintColor: '#fff',
            }}
         />

      </Stack.Navigator>
   );
};

export default AuthStack;
