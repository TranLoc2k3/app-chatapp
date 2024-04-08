import { Text, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import styles from "./StyleHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

// import { useDispatch } from "react-redux";
// import userAPI from "../../../redux/reducers/user/userAPI";
// import tokenService from "../../../services/token.service";

//      const { phone, fullname, urlavatar } = route.params;

function Header({fullname,id,name,image,owner})
{
    const navigation = useNavigation();
    // const dispatch = useDispatch();
    // const token = tokenService.getAccessToken();
    const hanldPress = () =>{
        navigation.goBack();
        // var user = userAPI.getUserInfo()(token);
        // dispatch(user);
    }
    return (
        <View style={styles.container}>
            <View style={styles.container_left}>
                <View  style={styles.containerIcon}>
                    <TouchableOpacity onPress={hanldPress} style={styles.button}>
                        <MaterialIcons 
                            name="keyboard-arrow-left"
                            size={32}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.container_friend_Name}>
                    <Text style={styles.friend_Name}>{fullname}</Text>
                </View>
            </View>
            <View style={styles.container_right}>
                <View style={styles.container_right_icon}>
                    <Feather name="phone" size={23} color="white" />
                </View>
                <View style={styles.container_right_icon}>
                    <Feather name="video"  size={26} color="white"/>
                </View>
                <TouchableOpacity style={styles.container_right_icon} onPress={()=> navigation.navigate("FriendProfile",{ phone: id, fullname: name, urlavatar: image })}>
                    <Feather name="menu" size={26} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Header;