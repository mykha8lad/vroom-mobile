import React, { FC, useState, useEffect } from 'react';

import { VideoHistory } from '@/widgets/Videos/VideoHistory/VideoHistory';
import { MyPlaylist } from '@/widgets/Playlists/MyPlaylist/MyPlaylist';
import { styles } from './ProfilePageStyles';
import { videos } from '@/shared/api/testData';
import { videosPlaylists } from '@/shared/api/testData';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native';

import UserIcon from '@/assets/images/main-images/profile-images/nav-images/User.svg';
import HistoryIcon from '@/assets/images/main-images/profile-images/nav-images/History.svg';
import PlaylistsIcon from '@/assets/images/main-images/profile-images/nav-images/Playlists.svg';
import SettingsIcon from '@/assets/images/main-images/profile-images/nav-images/Settings.svg';
import AngleIcon from '@/assets/images/main-images/profile-images/nav-images/Angle.svg';
import UserCard from '@/entities/user/ui/UserCard';
import { getUserById } from '@/entities/user/api/userApi';
import { IUser } from '@/entities/user/model/types';

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

export default function ProfilePage({ navigation, user }: any) {
    const [userP, setUserP] = useState<IUser | null>(null);    

    useEffect(() => {
        const fetchUser = async () => {          
            const userData = await getUserById("2");       
    
        if (userData) {
            setUserP(userData);
        }
    };
        fetchUser();
    }, []);

    
    return(
        <ScrollView style={{backgroundColor: '#fff', height: '100%'}}>
                            
                {userP ? <UserCard user={userP} /> : <Text>Ошибка загрузки пользователя</Text>} 

                <View style={styles.profileNavContainer}>
                    
                    <ProfileNavItem Icon={UserIcon} title="Your channel" screenName='GeneralChannel'/>
                    <ProfileNavItem Icon={HistoryIcon} title="History" screenName='History'/>

                    <View style={styles.videosRow}>
                        <FlatList
                            data={videos}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <VideoHistory preview={item} />}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <ProfileNavItem Icon={PlaylistsIcon} title="Playlists" screenName='Playlists'/>

                    <View style={styles.videosRow}>
                        <FlatList
                            data={videosPlaylists}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => ( <MyPlaylist preview={item[item.length-1]} playlist={item}  navigation={navigation}/> )}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <ProfileNavItem Icon={SettingsIcon} title="Settings" screenName='Settings'/>

                </View>            
        </ScrollView>
    );
}

