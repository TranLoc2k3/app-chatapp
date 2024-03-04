import { View, Text, Dimensions, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native';
import Slider from '../Slider';

export const Intro = () => {
   const slide = [
      {
         id: 1,
         title: 'Gọi video ổn định',
         description: 'Trò chuyện thật đã với bạn bè',
         image: require('../../assets/images/tintin.jpg'),
      },
      {
         id: 2,
         title: 'Chat nhóm tiện lợi',
         description: 'Cùng trao đổi thông tin với nhiều người',
         image: require('../../assets/images/tintin.jpg'),
      },
      {
         id: 3,
         title: 'Gửi ảnh nhanh chóng',
         description: 'Chia sẻ hình ảnh chất lượng cao',
         image: require('../../assets/images/tintin.jpg'),
      },
      {
         id: 4,
         title: 'Nhật ký bạn bè',
         description: 'Nơi cập nhật hoat động của bạn bè',
         image: require('../../assets/images/tintin.jpg'),
      },
      {
         id: 5,
         title: 'TinTin ứng dụng chat mới',
         image: require('../../assets/images/tintin.jpg'),
      },
   ];
   const { width, height } = Dimensions.get('window');
   const [sliderState, setSliderState] = useState({ currentPage: 0 });
   const setSliderPage = (event) => {
      const { currentPage } = sliderState;
      const { x } = event.nativeEvent.contentOffset;
      const indexOfNextScreen = Math.floor(x / width);
      if (indexOfNextScreen !== currentPage) {
         setSliderState({
            ...sliderState,
            currentPage: indexOfNextScreen,
         });
      }
   };
   const { currentPage: pageIndex } = sliderState;
   return (
      <SafeAreaView style={styles.container}>
         <FlatList
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={(event) => {
               setSliderPage(event);
            }}
            data={slide}
            horizontal={true}
            renderItem={({ item }) => <Slider item={item} />}
         />
         <View style={styles.paginationWrapper}>
            {slide.map((key, index) => (
               <View
                  style={[
                     styles.paginationDots,
                     { opacity: pageIndex === index ? 1 : 0.2 },
                  ]}
                  key={index}
               />
            ))}
         </View>
      </SafeAreaView>

   );
};
