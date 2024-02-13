import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

/**
 * Component tin nhắn.
 *
 * @param {Object} props - Props cho component tin nhắn.
 * @param {Object} props.data - Dữ liệu tin nhắn.
 * @param {string} props.data.user - Người dùng gửi tin nhắn.
 * @param {string} props.data.time - Thời gian gửi tin nhắn.
 * @param {string} props.data.content - Nội dung của tin nhắn.
 * @param {number} props.index - Chỉ mục của tin nhắn.
 * @returns {JSX.Element} Component Tin nhắn được hiển thị.
 */

export const Mess = ({ data, index }) => {
   const { user, time, content } = data;
   const avatar = 'https://placekitten.com/200/200';
   return (
      <TouchableOpacity>
         <View
            style={[
               styles.container,
               user ? { alignSelf: 'flex-end' } : {},
               index === 0 ? { marginBottom: 20 } : {},
            ]}
         >
            {user ? null : (
               <Image source={{ uri: avatar }} style={styles.avatar} />
            )}
            <View
               style={[
                  styles.messageContainer,
                  user ? { backgroundColor: '#CFF0FF' } : {},
               ]}
            >
               <Text style={styles.content}>{content}</Text>
               <Text style={styles.time}>{time}</Text>
            </View>
         </View>
      </TouchableOpacity>
   );
};
