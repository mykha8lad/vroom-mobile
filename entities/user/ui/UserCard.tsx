import React, { FC, useState } from 'react';
import * as ImagePicker from "expo-image-picker";
import { IUser } from '../model/types';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

interface UserProps {
    user: IUser
}

export const UserCard: FC<UserProps> = ({user}) => {      
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
            const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (!permission.granted) {
              alert("Нужно разрешение для доступа к фото!");
              return;
            }
        
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [1, 1],
              quality: 1,
            });
        
            if (!result.canceled) {
              setImage(result.assets[0].uri);
            }
    };

    return (
        <View style={styles.headerContainer}>
        
            <TouchableOpacity style={styles.avatarContainer} onPress={pickImage}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.avatar} />
                        ) : (
                            <View style={styles.placeholder}>
                                <Image source={require('../../../assets/images/main-images/profile-images/Avatar.png')} style={styles.editIcon} />
                            </View>
                        )}
            </TouchableOpacity>
        
            <View style={styles.userInfoContainer}>
                <Text style={styles.userNameText}>{user.userName}</Text>
        
                <Text style={styles.nickNameText}>@{user.nickName}</Text>
            </View>        
        </View>        
    );
};

export default UserCard;

export const styles = StyleSheet.create({
    userInfoContainer: {
        rowGap: 4,
        alignItems: 'center',
    },    
    userNameText: {
        fontSize: 20,
    },
    nickNameText: {
        fontSize: 14,
        color: '#0EA2DE',
    },   
    headerContainer: {
        flexDirection: 'column',
        rowGap: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    avatarContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        width: "100%",
        height: "100%",
    },
    placeholder: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
    },
    editIcon: {
        width: 120,
        height: 120,        
    },
});