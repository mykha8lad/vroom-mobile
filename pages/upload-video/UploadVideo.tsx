import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Image, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useVideoStore } from '@/shared/store/useStore';

const UploadVideo = () => {
    
    const parseJwt = (token: string) => {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(
                atob(base64)
                .split('')
                .map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
                .join('')
            );
            return JSON.parse(jsonPayload);
        } catch (e) {
            console.error('Ошибка при декодировании токена:', e);
            return {};
        }
    };

    const [videoFile, setVideoFile] = useState<any>(null);
    const [thumbnail, setThumbnail] = useState<any>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const uploadVideo = useVideoStore(state => state.uploadVideo);

    const pickVideo = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Videos,
          videoQuality: ImagePicker.UIImagePickerControllerQualityType.Medium,
        });
      
        if (!result.canceled && result.assets?.length > 0) {
          setVideoFile(result.assets[0]);
        }
      };

    const pickThumbnail = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        });
        if (!result.canceled) {
        setThumbnail(result.assets[0]);
        }
    };

    useEffect(() => {
        (async () => {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Для загрузки видео нужно разрешение к галерее');
          }
        })();
      }, []);

    const handleUpload = async () => {
        if (!videoFile || !thumbnail || !title) return;
      
        const token = await AsyncStorage.getItem('token');
        const decodedToken: any = parseJwt(token!);

        console.log('Расшифрованный токен:', decodedToken);
        const userId = decodedToken.sub; // или другое поле, где у тебя id
      
        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('videoFile', {
            uri: videoFile.uri,
            type: 'video/mp4',
            name: 'upload.mp4',
        } as any);
        formData.append('thumbnailFile', {
            uri: thumbnail.uri,
            type: 'image/jpeg',
            name: 'thumb.jpg',
        } as any);
      
        try {
            await uploadVideo(formData);
            alert('Видео успешно загружено!');
        } catch (err) {
            console.log('Ошибка при загрузке видео:', err);
        }
    };

    return (
        <View style={{ padding: 16 }}>
        <TextInput placeholder="Название" value={title} onChangeText={setTitle} />
        <TextInput placeholder="Описание" value={description} onChangeText={setDescription} />
        <Button title="Выбрать видео" onPress={pickVideo} />
        {videoFile && <Text>Выбрано: {videoFile.name}</Text>}
        <Button title="Выбрать обложку" onPress={pickThumbnail} />
        {thumbnail && <Image source={{ uri: thumbnail.uri }} style={{ width: 100, height: 100 }} />}
        <Button title="Загрузить" onPress={handleUpload} />
        </View>
    );
};

export default UploadVideo;
