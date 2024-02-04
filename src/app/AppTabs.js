import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Header from '../components/Header';
import ContactScreen from '../screens/ContactScreen';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import MessageScreen from '../screens/MessageScreen';
import StoryScreen from '../screens/StoryScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
   return (
      <Tab.Navigator
         initialRouteName="Message"
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
               let iconName;
               if (route.name === 'Tin nhắn') {
                  iconName = focused
                     ? 'ios-chatbubbles'
                     : 'ios-chatbubbles-outline';
               } else if (route.name === 'Danh bạ') {
                  iconName = focused ? 'ios-people' : 'ios-people-outline';
               } else if (route.name === 'Khám phá') {
                  iconName = focused ? 'ios-compass' : 'ios-compass-outline';
               } else if (route.name === 'Nhật ký') {
                  iconName = focused ? 'ios-time' : 'ios-time-outline';
               } else if (route.name === 'Cá nhân') {
                  iconName = focused ? 'ios-person' : 'ios-person-outline';
               }
               return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerTitleAlign: 'left',
            headerStyle: {
               backgroundColor: '#4D9DF7',
            },
         })}
      >
         <Tab.Screen
            name="Tin nhắn"
            component={MessageScreen}
            options={{
               header: (props) => <Header {...props} type="message" />,
            }}
         />
         <Tab.Screen
            name="Danh bạ"
            component={ContactScreen}
            options={{
               header: (props) => <Header {...props} type="contact" />,
            }}
         />
         <Tab.Screen
            name="Khám phá"
            component={DiscoveryScreen}
            options={{
               header: (props) => <Header {...props} type="discovery" />,
            }}
         />
         <Tab.Screen
            name="Nhật ký"
            component={StoryScreen}
            options={{
               header: (props) => <Header {...props} type="timeline" />,
            }}
         />
         <Tab.Screen
            name="Cá nhân"
            component={AccountScreen}
            options={{
               header: (props) => <Header {...props} />,
            }}
         />
      </Tab.Navigator>
   );
};

export default AppTabs;
