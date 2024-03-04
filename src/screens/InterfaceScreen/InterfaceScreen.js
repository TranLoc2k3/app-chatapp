import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Intro from '../../components/Intro';
import { Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const InterfaceScreen = ({ navigation }) => {
   const insets = useSafeAreaInsets();
   const [isEnglish, setIsEnglish] = useState(true);

   const englishTexts = {
      login: 'Login',
      register: 'Register',
      vietnamese: 'Tiếng Việt',
      english: 'English',
   };

   const buttonTexts = isEnglish ? englishTexts : {};

   return (
      <View
         style={[
            styles.container,
            {
               paddingTop: insets.top,
               paddingBottom: insets.bottom,
               paddingHorizontal: insets.left,
               paddingVertical: insets.right,
            },
         ]}
      >
         <Intro />
         <View style={{ rowGap: 8 }}>
            <Button
               mode="contained"
               style={[styles.button, { backgroundColor: '#4A8CFE' }]}
               contentStyle={styles.button}
               onPress={() => navigation.navigate('Login')}
            >
               {buttonTexts.login || 'Đăng nhập'}
            </Button>
            <Button
               mode="contained"
               style={[styles.button, { backgroundColor: '#414347' }]}
               contentStyle={styles.button}
               onPress={() => navigation.navigate('Register')}
            >
               {buttonTexts.register || 'Đăng ký'}
            </Button>
         </View>
         <View style={styles.languageContainer}>
            <Button
               mode="text"
               labelStyle={[
                  styles.buttonText,
                  !isEnglish ? styles.buttonActive : '',
               ]}
               style={[
                  styles.buttonLang,
                  !isEnglish ? styles.buttonActive : '',
               ]}
               onPress={() => setIsEnglish(false)}
            >
               {buttonTexts.vietnamese || 'Tiếng Việt'}
            </Button>
            <Button
               mode="text"
               labelStyle={[
                  styles.buttonText,
                  isEnglish ? styles.buttonActive : '',
               ]}
               style={[styles.buttonLang, isEnglish ? styles.buttonActive : '']}
               onPress={() => setIsEnglish(true)}
            >
               {buttonTexts.english || 'English'}
            </Button>
         </View>
      </View>
   );
};
