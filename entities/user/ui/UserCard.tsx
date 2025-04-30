import React, { FC, useState } from 'react';
import * as ImagePicker from "expo-image-picker";
import { useStore } from '@/shared/store/useStore';
import { User } from '@/shared/store/useStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';

interface UserProps {
    user: User
}

export const UserCard: FC<UserProps> = ({user}) => {   

    const handleSetNickName = () => {
        const { user, token, updateUser } = useStore.getState();

        Alert.prompt(
            'Имя',
            'Введите имя, которое будет отображаться публично',
            [
                {
                    text: 'Отмена',
                    style: 'cancel',
                },
                {
                    text: 'Сохранить',
                    onPress: async (display) => {
                    if (!display) return;
        
                    try {
                        const response = await axios.put(
                            `https://back.buhprogsoft.com.ua/api/Users/${user?.id}`,
                            { displayName: display },
                            {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                            }
                        );                        
        
                        // Обновим Zustand и AsyncStorage
                        updateUser({ displayName: display });
                        const updatedUser = { ...user, displayName: display };
                        await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
            
                        console.log('Никнейм обновлён:', display);
                    } catch (error: any) {
                        console.error('Ошибка при обновлении ника:', error.message);
                        Alert.alert('Ошибка', 'Не удалось сохранить никнейм');
                    }
                },
                },
            ],
            'plain-text'
        );
    };
    
    const uploadAvatar = async (uri: string) => {
        const { user, token, updateUser } = useStore.getState();

        try {
                    
            if (!user || !token) return;
        
            const formData = new FormData();
            formData.append('avatar', {
                uri,
                name: 'avatar.jpg',
                type: 'image/jpeg',
            } as any); // кастим из-за TS
        
            const response = await axios.put(
                `https://back.buhprogsoft.com.ua/api/Users/${user.id}/avatar`,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
                }
            );
        
            const updatedAvatarUrl = response.data.avatar;
        
            // Обновим Zustand
            updateUser({ avatar: updatedAvatarUrl });
        
            // И сохраним в AsyncStorage
            const newUser = { ...user, avatar: updatedAvatarUrl };
            await AsyncStorage.setItem('user', JSON.stringify(newUser));
        
            console.log('Аватар обновлён:', updatedAvatarUrl);
        } catch (error: any) {
            console.error('Ошибка при обновлении аватара:', error.message);
            Alert.alert('Ошибка', 'Не удалось загрузить аватар');
        }
    };

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
                const uri = result.assets[0].uri;                
                await uploadAvatar(uri); // сразу обновим на сервере
            }
    };

    return (
        <View style={styles.headerContainer}>
        
            <TouchableOpacity style={styles.avatarContainer} onPress={pickImage}>
                <Image
                    source={user?.avatar ? { uri: user.avatar } : require('../../../assets/images/main-images/profile-images/Avatar.png')}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
            </TouchableOpacity>
        
            <View style={styles.userInfoContainer}>     
                {user.displayName ? (           
                    <Text style={styles.displayNameText}>{user.displayName}</Text>
                ) : (
                    <TouchableOpacity onPress={handleSetNickName}>
                        <Text style={{ color: '#007AFF', fontSize: 16 }}>...</Text>
                    </TouchableOpacity>
                )}        
                <Text style={styles.userNameText}>@{user.userName}</Text>                                   
            </View>        
        </View>        
    );
};

// require()} style={styles.editIcon}

export default UserCard;

export const styles = StyleSheet.create({
    userInfoContainer: {
        rowGap: 4,
        alignItems: 'center',
    },    
    displayNameText: {
        fontSize: 20,
    },
    userNameText: {
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