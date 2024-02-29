// import { View, Text } from 'react-native';
// import React from 'react';
// import { FlatList } from 'react-native';
// import ChatItem from '../ChatItem';

// export const ChatList = ({ navigation }) => {
//    const data = [
//       {
//          id: 1,
//          name: 'Hồng Nhung',
//          message: 'Chào bạn, bạn đã ăn trưa chưa?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=4',
//          numberMessageUnread: 2,
//       },
//       {
//          id: 2,
//          name: 'Anh Tuấn',
//          message: 'Dự án mới của chúng ta đang tiến triển thế nào rồi?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=5',
//          numberMessageUnread: 0,
//       },
//       {
//          id: 3,
//          name: 'Linh Chi',
//          message: 'Hôm nay trời nắng đẹp quá, muốn đi chơi không?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=6',
//          numberMessageUnread: 1,
//       },
//       {
//          id: 4,
//          name: 'Trung Hiếu',
//          message: 'Bạn đã xem bảng thông báo mới chưa?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=7',
//          numberMessageUnread: 3,
//       },
//       {
//          id: 5,
//          name: 'Lê Quang',
//          message: 'Cần bạn kiểm tra lại các vấn đề kỹ thuật.',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=8',
//          numberMessageUnread: 0,
//       },
//       {
//          id: 6,
//          name: 'Minh Thu',
//          message: 'Cuối tuần này chúng ta sẽ tổ chức sự kiện gì đó không?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=9',
//          numberMessageUnread: 1,
//       },
//       {
//          id: 7,
//          name: 'Hồng Nhung',
//          message: 'Chào bạn, bạn đã ăn trưa chưa?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=4',
//          numberMessageUnread: 2,
//       },
//       {
//          id: 8,
//          name: 'Anh Tuấn',
//          message: 'Dự án mới của chúng ta đang tiến triển thế nào rồi?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=5',
//          numberMessageUnread: 0,
//       },
//       {
//          id: 9,
//          name: 'Linh Chi',
//          message: 'Hôm nay trời nắng đẹp quá, muốn đi chơi không?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=6',
//          numberMessageUnread: 1,
//       },
//       {
//          id: 10,
//          name: 'Trung Hiếu',
//          message: 'Bạn đã xem bảng thông báo mới chưa?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=7',
//          numberMessageUnread: 3,
//       },
//       {
//          id: 11,
//          name: 'Lê Quang',
//          message: 'Cần bạn kiểm tra lại các vấn đề kỹ thuật.',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=8',
//          numberMessageUnread: 0,
//       },
//       {
//          id: 12,
//          name: 'Minh Thu',
//          message: 'Cuối tuần này chúng ta sẽ tổ chức sự kiện gì đó không?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=9',
//          numberMessageUnread: 1,
//       },
//       {
//          id: 13,
//          name: 'Hồng Nhung',
//          message: 'Chào bạn, bạn đã ăn trưa chưa?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=4',
//          numberMessageUnread: 2,
//       },
//       {
//          id: 14,
//          name: 'Anh Tuấn',
//          message: 'Dự án mới của chúng ta đang tiến triển thế nào rồi?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=5',
//          numberMessageUnread: 0,
//       },
//       {
//          id: 15,
//          name: 'Linh Chi',
//          message: 'Hôm nay trời nắng đẹp quá, muốn đi chơi không?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=6',
//          numberMessageUnread: 1,
//       },
//       {
//          id: 16,
//          name: 'Trung Hiếu',
//          message: 'Bạn đã xem bảng thông báo mới chưa?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=7',
//          numberMessageUnread: 3,
//       },
//       {
//          id: 17,
//          name: 'Lê Quang',
//          message: 'Cần bạn kiểm tra lại các vấn đề kỹ thuật.',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=8',
//          numberMessageUnread: 0,
//       },
//       {
//          id: 18,
//          name: 'Minh Thu',
//          message: 'Cuối tuần này chúng ta sẽ tổ chức sự kiện gì đó không?',
//          time: '10:00',
//          avatar: 'https://i.pravatar.cc/150?img=9',
//          numberMessageUnread: 1,
//       },
//    ];

//    return (
//       <View>
//          <FlatList
//             data={data}
//             keyExtractor={(item) => item.id.toString()} // Đảm bảo rằng key là một chuỗi
//             renderItem={({ item }) => (
//                <ChatItem navigation={navigation} data={item} />
//             )}
//          />
//       </View>
//    );
// };

import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ChatItem from '../ChatItem';
import axios from 'axios';

export const ListChat = ({ navigation }) => {
   const [data, setData] = useState([]);
   useEffect(() => {
      getApiChatsByUserId();
   }, []);

   // Func Call API to get data
   const getApiChatsByUserId = async (userID) => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(res.data);
   };
   return (
      <View>
         <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ChatItem navigation={navigation} data={item} />}
         />
      </View>
   );
};