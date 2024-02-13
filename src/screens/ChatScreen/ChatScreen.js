import React, { useState } from 'react';
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Mess from '../../components/Mess';
import styles from './styles';

export const ChatScreen = ({ route }) => {
   const [message, setMessage] = useState('');
   const insets = useSafeAreaInsets();
   const messages = [
      {
         user: 0,
         time: '12:00',
         content: 'Xin chào, tôi là Phúc.',
      },
      {
         user: 0,
         time: '12:01',
         content: 'Rất vui được gặp bạn',
      },
      {
         user: 1,
         time: '12:00',
         content: 'Chào cậu, tôi là Thanh.',
      },
      {
         user: 1,
         time: '12:01',
         content: 'Rất vui được gặp bạn',
      },
      // Thêm tin nhắn khác tại đây nếu cần
   ];

   return (
      <KeyboardAvoidingView
         enabled
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         keyboardVerticalOffset={60}
         style={{ flexGrow: 1 }}
      >
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
               <FlatList
                  inverted
                  data={messages}
                  style={{ flexGrow: 1, backgroundColor: '#E2E8F1' }}
                  renderItem={({ item, index }) => <Mess data={item} index={index} />}
                  keyExtractor={(_, index) => index.toString()}
               />
               <View style={[styles.chatContainer, { paddingBottom: insets.bottom }]}>
                  <IconButton icon="sticker-emoji" size={28} iconColor="#333" />
                  <TextInput
                     style={styles.input}
                     value={message}
                     onChangeText={(text) => setMessage(text)}
                     placeholder="Nhập tin nhắn"
                     placeholderTextColor={'#888'}
                     underlineColorAndroid="transparent"
                  />
                  {!message ? (
                     <>
                        <IconButton icon="dots-horizontal" size={32} iconColor="#333" />
                        <IconButton icon="microphone-outline" size={32} iconColor="#333" />
                        <IconButton icon="file-image" size={32} iconColor="#333" />
                     </>
                  ) : (
                     <IconButton icon="send-circle" size={32} iconColor="#4D9DF7" />
                  )}
               </View>
            </View>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
   );
};
