import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';

export const ChatItem = ({ navigation, data }) => {
   const { name, member, message, dateTimeSend } = data;
   const [numberMessageUnread, setNumberMessageUnread] = useState(
      data.numberMessageUnread || 0
   );
   const image = 'https://www.w3schools.com/w3images/avatar6.png';
   return (
      <Pressable
         style={styles.container}
         onPress={() => navigation.navigate('ChatScreen', data)}
      >
         <Image source={{ uri: image }} style={styles.image} />
         <View style={styles.contentContainer}>
            <View style={{ flex: 1, marginLeft: 10, rowGap: 4 }}>
               <Text style={styles.name}>{name}</Text>
               <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={styles.message}
               >
                  {message}
               </Text>
            </View>
            <View style={{ alignItems: 'center', rowGap: 4 }}>
               <Text style={styles.time}>
                  {dateTimeSend.split(' ')[1].split(':', 2).join(':')}
               </Text>
               {numberMessageUnread ? (
                  <View
                     style={{
                        backgroundColor: 'red',
                        borderRadius: 50,
                        width: 20,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                  >
                     <Text style={{ color: 'white', textAlign: 'center' }}>
                        {numberMessageUnread}
                     </Text>
                  </View>
               ) : (
                  ''
               )}
            </View>
         </View>
      </Pressable>
   );
};
