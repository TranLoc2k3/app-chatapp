import { ScrollView, View, Text, TouchableOpacity, Image, ImageBackground, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./StyleProfile";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { format } from "date-fns";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import { launchImageLibrary } from "react-native-image-picker";
import { PermissionsAndroid, Platform } from "react-native";
import { differenceInYears } from 'date-fns';


import { api } from "../../apis/api";

const InputProfile = (props) => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [avatarImage, setAvatarImage] = useState('https://products111.s3.ap-southeast-1.amazonaws.com/Avatar0366775345.jpeg');
    const navigation = useNavigation();

    const [birthday, setBirthday] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const { idNewUser } = props?.route?.params;

    

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || birthday;
        setShowDatePicker(false);
        const isoString = currentDate.toISOString();
        const dateString = isoString.split('T')[0]; // Tách ngày tháng năm từ chuỗi ISO 8601
        setBirthday(dateString);
    };
    

    const handleAvatarPress = async () => {
        try {
            const permissionsGranted = await requestPermissions();
            if (permissionsGranted) {
                const result = await openImagePicker();
                if (!result.didCancel) {
                    setAvatarImage(result.assets[0].uri);
                }
            } else {
                console.log("Người dùng từ chối cấp quyền truy cập camera và thư viện ảnh");
            }
        } catch (error) {
            console.log("Đã xảy ra lỗi khi xử lý ảnh:", error);
        }
    };
    
    const requestPermissions = async () => {
        try {
            if (Platform.OS === "android") {
                const cameraPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
                const photoPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
                return cameraPermission === PermissionsAndroid.RESULTS.GRANTED && photoPermission === PermissionsAndroid.RESULTS.GRANTED;
            } else {
                return true;
            }
        } catch (error) {
            console.log("Đã xảy ra lỗi khi yêu cầu quyền:", error);
            return false;
        }
    };
    
    const openImagePicker = () => {
        return new Promise((resolve, reject) => {
            const options = {
                mediaType: "photo",
                cameraType: "back",
            };
            launchImageLibrary(options, (response) => {
                resolve(response);
            });
        });
    };

    const hanldPressGoBack = () => {
        navigation.navigate("InputPass");
    };

    const hanldPressRegister = async () => {
        if (!name) {
            Alert.alert("Vui lòng nhập tên!");
            return;
        }
        if (!gender) {
            Alert.alert("Vui lòng chọn giới tính!");
            return;
        }
        if (!avatarImage) {
            Alert.alert("Vui lòng chọn ảnh đại diện!");
            return;
        }
        if (!birthday) {
            Alert.alert("Vui lòng chọn ngày sinh!");
            return;
        }
        
        if (birthday > new Date()) {
            Alert.alert("Ngày sinh không hợp lệ!");
            return;
        }

        const age = differenceInYears(new Date(), new Date(birthday));
        if (age <16) {
            Alert.alert("Tuổi phải lớn hơn hoặc bằng 16!");
            return;
        }

        else {
            Alert.alert("Đăng ký thành công");
            navigation.navigate("Login");
        }

        const formData = new FormData();
        formData.append('id', 1);
        formData.append('image', {
            uri: avatarImage,
            type: 'image/jpeg',
            name: 'photo.jpg',
        });        

        try {
            const res = await api.updateInfo(idNewUser, {
                fullname: name,
                sex: gender ,
                birthday: birthday.toString(0, 10),
                image: formData,
            });
            console.log(res);
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    console.log("birthday", birthday);

    return (
        <View style={styles.container}>
            <View style={styles.containerTabBar}>
                <TouchableOpacity
                    onPress={hanldPressGoBack}
                    style={{
                        paddingLeft: 10,
                        paddingRight: 10,
                        justifyContent: "center",
                        paddingTop: 10,
                    }}
                >
                    <Ionicons name="arrow-back" size={30} color="#fff" />
                </TouchableOpacity>
                <View
                    style={{
                        width: "73%",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: 10,
                    }}
                >
                    <Text style={{ fontSize: 24, color: "white" }}>Cập nhật thông tin</Text>
                </View>
            </View>

            <ScrollView style={{ paddingBottom: 0 }}>
                <View style={styles.containerBody}>
                    <ImageBackground style={styles.containerBody_Top}>
                        <TouchableOpacity onPress={handleAvatarPress}>
                            {avatarImage ? (
                                <Image style={styles.containerBody_Top_Avt} source={{ uri: avatarImage }} />
                            ) : (
                                <Image style={styles.containerBody_Top_Avt} source={require('../../../assets/avata.jpg')} />
                            )}
                        </TouchableOpacity>
                    </ImageBackground>

                    <View style={styles.containerInput}>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                borderWidth: 2,
                                marginRight: 10,
                                marginTop: 20,
                                marginLeft: 10,
                                borderRadius: 50,
                                backgroundColor: "#fff",
                                alignItems: "center",
                            }}
                        >
                            <View style={{ flex: 0.15, alignItems: "center" }}>
                                <Feather name="user" size={32} color="black" />
                            </View>
                            <TextInput
                                onChangeText={(x) => setName(x)}
                                value={name}
                                placeholder="Tên của bạn"
                                style={{
                                    marginRight: 15,
                                    height: 50,
                                    fontSize: 22,
                                    flex: 0.85,
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 20, marginRight: 10 }}>Giới tính:</Text>
                        <RadioButton.Group onValueChange={(value) => {
    console.log("Selected gender:", value);
    setGender(value);
}} value={gender}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton.Item label="Nam" value="male" />
        <RadioButton.Item label="Nữ" value="female" />
    </View>
</RadioButton.Group>

                    </View>

                    <View style={styles.containerInput}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, marginRight: 10, marginLeft: 10 }}>Ngày sinh:</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 22, marginLeft: 10, marginRight: 10 }}>
                                    {format(birthday, 'MM-dd-yyyy')}
                                </Text>
                                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                                    <Feather name="calendar" size={32} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {showDatePicker && (
                            <DateTimePicker
                                value={birthday}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}
                    </View>
                </View>
            </ScrollView>

            <View style={styles.containerBottom}>
                <TouchableOpacity onPress={hanldPressRegister} style={styles.bottom} >
                    <Text style={{ fontSize: 22, color: '#fff', fontWeight: 'bold' }}> Hoàn tất </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default InputProfile;
