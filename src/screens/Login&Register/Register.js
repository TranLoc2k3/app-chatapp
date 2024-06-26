import { View, Text, TouchableOpacity, TextInput, Image, Alert } from "react-native";
import { AntDesign, Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import styles from "./StyleRegister";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../apis/api";
// import auth from "@react-native-firebase/auth";

const Register = () => {
    const [phone, setPhone] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const isPassword = true;
    const regexPhone = /^84\d{9}$/;
    const navigation = useNavigation();
    // Connect Firebase
    const hanldPressDashBoard = () => {
        navigation.navigate("DashBoard");
    };

    const hanldPressLogin = () => {};

    const [phoneNumber, setPhoneNumber] = useState("");

    async function signInWithPhoneNumber(phoneNumber) {}

    async function confirmCode() {}

    const hanldPressRegister = async () => {
        if (!phone) {
            Alert.alert("Vui lòng nhập số điện thoại");
            return;
        }
        if (!regexPhone.test(phone)) {
            Alert.alert("Số điện thoại không đúng định dạng");
            return;
        }

        
        try {
            const res = await api.checkUserExist({
                username: phone,
            });
            if (res.data.status) {
                navigation.navigate("OTP", { phoneNumber: phone });
                return;
            } else {
                
                Alert.alert("Số điện thoại đã tồn tại");
            }
        } catch (error) {
            Alert.alert("Lỗi", error.message);
        }
    };
    const handlPressPass = () => {};
    // const onSignInWithPhoneNumber = async () => {
    //     console.log("hi");
    //     const confirmation = await auth().signInWithPhoneNumber("0833434562");
    //     console.log(confirmation);
    // };
    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    // }, []);
    return (
        <View style={styles.container}>
            <StatusBar translucent />
            <View style={{ height: StatusBar.currentHeight }}></View>
            <View style={styles.containerTabBar}>
                <TouchableOpacity
                    onPress={hanldPressDashBoard}
                    style={{ paddingLeft: 10, paddingRight: 10, justifyContent: "center", paddingTop: 10 }}
                >
                    <Ionicons name="arrow-back" size={30} color="#fff" />
                </TouchableOpacity>
                <View style={{ width: "73%", justifyContent: "center", paddingTop: 10 }}>
                    <Text style={{ fontSize: 22, color: "white" }}>Đăng Ký</Text>
                </View>
            </View>
            <View style={styles.containerText}>
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                    Vui lòng nhập số điện thoại để đăng ký tài khoản
                </Text>
            </View>
            <View style={styles.containerInput}>
                {/* <TextInput onChangeText={x=>setuserName(x)} value={userName} placeholder="Vui lòng nhập Tên người dùng" style={{marginLeft:15,marginRight:15,height:50,fontSize:22,borderBottomWidth:1,}}/> */}
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        borderWidth: 1,
                        marginRight: 10,
                        marginLeft: 10,
                        borderRadius: 20,
                        backgroundColor: "#DCDCDC",
                        alignItems: "center",
                    }}
                >
                    <View style={{ flex: 0.15, alignItems: "center" }}>
                        <Feather name="phone" size={32} color="black" />
                    </View>
                    <TextInput
                        onChangeText={(x) => setPhone(x)}
                        value={phone}
                        placeholder="Vui lòng nhập số điện thoại"
                        style={{ marginRight: 15, height: 50, fontSize: 22, flex: 0.85 }}
                        keyboardType="phone-pad"
                        id="phonenumber"
                    />
                </View>

                <TouchableOpacity
                    onPress={(hanldPressLogin) => {
                        navigation.navigate("Login");
                    }}
                    style={{ marginTop: 25, alignItems: "center", width: "100%" }}
                >
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={{ fontSize: 20, marginRight: 10 }}> Đã có tài khoản?</Text>
                        <Text style={{ fontSize: 22, fontWeight: "bold", marginRight: 10, color: "#F4A460" }}>
                            {" "}
                            Đăng nhập
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.containerBottom}>
                <TouchableOpacity onPress={hanldPressRegister} style={styles.bottom}>
                    <Text style={{ fontSize: 22, color: "#fff", fontWeight: "bold" }}> Xác thực mã OTP </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Register;
