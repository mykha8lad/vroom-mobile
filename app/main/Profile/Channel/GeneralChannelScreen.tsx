import React, { useState, useRef, useEffect } from 'react';
import styles from './styleGeneralChannelScreen';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,  
  StatusBar,
  SafeAreaView,
  TextInput,
  Platform,
  Animated,
  Easing,  
  ScrollView,
} from 'react-native';

import NotificationIcon from './follow-image/Notification.svg';
import AngleIcon from './follow-image/Angle.svg';

import TikTokIcon from './social-image/TikTok.svg';
import InstagramIcon from './social-image/Instagram.svg';
import XIcon from './social-image/X.svg';
import DiscordIcon from './social-image/Discord.svg';
import TelegramIcon from './social-image/Telegram.svg';
import LinkIcon from './social-image/Link.svg';

import HomeScreen from './MenuPages/Home/HomeScreen';
import VideosScreen from './MenuPages/Videos/VideosScreen';
import LiveScreen from './MenuPages/Live/LiveScreen';
import PostsScreen from './MenuPages/Posts/PostsScreen';
import PlaylistsScreen from './MenuPages/Playlists/PlaylistsScreen';
import AboutScreen from './MenuPages/About/AboutScreen';

const MENU_ITEMS = [
    { key: 'home', title: 'Home' },
    { key: 'videos', title: 'Videos' },
    { key: 'live', title: 'Live' },
    { key: 'posts', title: 'Posts' },
    { key: 'playlists', title: 'Playlists' },
    { key: 'about', title: 'About' },
];

const PAGES: any = {
    home: HomeScreen,
    videos: VideosScreen,
    live: LiveScreen,
    posts: PostsScreen,
    playlists: PlaylistsScreen,
    about: AboutScreen,
  };

export default function GeneralChannelScreen() {
    const [selected, setSelected] = useState('home');
    // Ширина внутреннего контейнера меню (без учета отступа слева)
    const [innerWidth, setInnerWidth] = useState(0);
    // Анимированное значение для индикатора
    const indicatorAnim = useRef(new Animated.Value(0)).current;

    const spacing = 2; // расстояние между пунктами меню
    // Всего между пунктами будет (N - 1) отступов
    const totalSpacing = (MENU_ITEMS.length - 1) * spacing;
    // Ширина каждого пункта (и, соответственно, индикатора)
    const tabWidth = innerWidth > 0 ? (innerWidth - totalSpacing) / MENU_ITEMS.length -3 : 0;

    const onSelect = (key: any, index: any) => {
        setSelected(key);
        Animated.timing(indicatorAnim, {
          toValue: index * (tabWidth + spacing), // сдвиг = индекс * (ширина пункта + расстояние между ними)
          duration: 300,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false, // свойство left не поддерживает native driver
        }).start();
    };
    
      // При изменении внутреннего контейнера или выбранного пункта, задаём позицию индикатора
      useEffect(() => {
        const index = MENU_ITEMS.findIndex(item => item.key === selected);
        if (innerWidth > 0) {
          indicatorAnim.setValue(index * (tabWidth + spacing));
        }
      }, [innerWidth, selected, tabWidth, indicatorAnim]);

    const SelectedPage = PAGES[selected];

    return (
        <View style={styles.container}>
            <View style={styles.channelHeader}>

                <View style={styles.channelTitle}>
                    <Image source={require('./Avatar.png')} height={80} width={80}/>

                    <View style={styles.channelTitleInfo}>
                        <Text style={styles.userNameText}>Juxtopposed</Text>
                        <Text  style={styles.userFollowersText}>269K followers</Text>
                        <Text style={styles.nickNameText}>@Juxtopposed</Text>
                    </View>

                </View>

                <View style={styles.channelSocialContainer}>

                    <TouchableOpacity style={styles.followingBtn}>
                        <NotificationIcon width={19} height={19}/>
                        <Text>Following</Text>
                        <AngleIcon width={19} height={19}/>
                    </TouchableOpacity>

                    <View style={styles.channelSocialRow}>
                    
                        <TouchableOpacity>
                            <TikTokIcon width={24} height={24}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <InstagramIcon width={24} height={24}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <XIcon width={24} height={24}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <DiscordIcon width={24} height={24}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <TelegramIcon width={24} height={24}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <LinkIcon width={24} height={24}/>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
            <View style={styles.menuContainer}>
                {/* Внутренний контейнер с отступом слева 16px */}
                <View style={styles.menuInnerContainer} onLayout={e => setInnerWidth(e.nativeEvent.layout.width)}>
                    {MENU_ITEMS.map((item, index) => (
                        <TouchableOpacity key={item.key} style={[styles.menuItem, { width: tabWidth, marginRight: index < MENU_ITEMS.length - 1 ? spacing : 0, },]} onPress={() => onSelect(item.key, index)} activeOpacity={0.7}>
                            <Text style={[styles.menuItemText, selected === item.key && styles.menuItemTextSelected,]}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    {/* Анимированный индикатор */}
                    {innerWidth > 0 && (
                        <Animated.View style={[styles.indicator, { width: tabWidth, left: indicatorAnim },]}/>
                    )}
                </View>
            </View>

            <View style={styles.pageContainer}>
                <ScrollView>
                    <SelectedPage />
                </ScrollView>
            </View>
        </View>
    )
}