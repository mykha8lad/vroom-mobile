import React, { useState } from 'react';
import * as ImagePicker from "expo-image-picker";
import styles from './profileStyles';
import { VideoHistoryPreview } from './History/HistoryRow';
import { VideoPlaylistsPreview } from './Playlists/PlaylistsRow';
import { videos } from '../Recommended/RecommendedScreen';
import { videosPlaylists } from './Playlists/Videos';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native';

import UserIcon from '@/assets/images/main-images/profile-images/nav-images/User.svg';
import HistoryIcon from '@/assets/images/main-images/profile-images/nav-images/History.svg';
import PlaylistsIcon from '@/assets/images/main-images/profile-images/nav-images/Playlists.svg';
import SettingsIcon from '@/assets/images/main-images/profile-images/nav-images/Settings.svg';
import AngleIcon from '@/assets/images/main-images/profile-images/nav-images/Angle.svg';

export type RootStackParamList = {
    GeneralChannel: undefined;
    Settings: undefined;
    Playlists: undefined;
    History: undefined;
};

type ProfileNavProp = NativeStackNavigationProp<RootStackParamList>;

interface ProfileNavItemProps {
    Icon: React.FC;
    title: string;
    screenName: keyof RootStackParamList;  // Ограничиваем экраны только теми, которые есть в RootStackParamList
}

const ProfileNavItem: React.FC<ProfileNavItemProps> = ({ Icon, title, screenName }) => {
    const navigation = useNavigation<ProfileNavProp>();

    return (
        <View>
            <TouchableOpacity style={styles.profileNavButton} onPress={() => navigation.navigate(screenName)}>
                <View style={styles.profileNavButtonRow}>
                    <Icon />
                    <Text style={styles.profileNavButtonText}>{title}</Text>
                </View>
                <AngleIcon />
            </TouchableOpacity>
        </View>
    );
};

export default function ProfileScreen({ navigation }: any) {
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

    return(
        <ScrollView style={{backgroundColor: '#fff', height: '100%'}}>
            
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
                        <Text style={styles.userNameText}>Life Hater</Text>

                        <Text style={styles.nickNameText}>@LiFeHaTeR99</Text>
                    </View>

                </View>
                <View style={styles.profileNavContainer}>
                    
                    <ProfileNavItem Icon={UserIcon} title="Your channel" screenName='GeneralChannel'/>
                    <ProfileNavItem Icon={HistoryIcon} title="History" screenName='History'/>

                    <View style={styles.videosRow}>
                        <FlatList
                            data={videos}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <VideoHistoryPreview preview={item} />}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <ProfileNavItem Icon={PlaylistsIcon} title="Playlists" screenName='Playlists'/>

                    <View style={styles.videosRow}>
                        <FlatList
                            data={videosPlaylists}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => ( <VideoPlaylistsPreview preview={item[item.length-1]} playlist={item}  navigation={navigation}/> )}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <ProfileNavItem Icon={SettingsIcon} title="Settings" screenName='Settings'/>

                </View>            
        </ScrollView>
    );
}

