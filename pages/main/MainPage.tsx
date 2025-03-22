import React from 'react';
import { styles } from './MainPageStyles';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MyChannelPage from '@/pages/my-channel/MyChannelPage';

import RecommendedPage from '@/pages/recommended/ReccomendedPage';
import BriefsPage from '@/pages/briefs/BriefsPage';
import FollowedPage from '@/pages/followed/FollowedPage';
import SearchPage from '@/pages/search/SearchPage';
import ProfilePage from '@/pages/profile/ProfilePage';
import ProfileStack from '@/app/sections.routes';

import NotificationsIcon from '@/assets/images/main-images/Notifications.svg';
import AddVideoIcon from '@/assets/images/main-images/AddVideo.svg';
import LogotypeIcon from '@/assets/images/main-images/Logotype.svg';

import RecommendedActiveIcon from '@/assets/images/main-images/main-navigation-icons/active/RecommendedActive.svg';
import BriefsActiveIcon from '@/assets/images/main-images/main-navigation-icons/active/BriefsActive.svg';
import SearchActiveIcon from '@/assets/images/main-images/main-navigation-icons/active/SearchActive.svg';
import FollowedActiveIcon from '@/assets/images/main-images/main-navigation-icons/active/FollowedActive.svg';

import RecommendedNoActiveIcon from '@/assets/images/main-images/main-navigation-icons/inactive/RecommendedNoActive.svg';
import BriefsNoActiveIcon from '@/assets/images/main-images/main-navigation-icons/inactive/BriefsNoActive.svg';
import SearchNoActiveIcon from '@/assets/images/main-images/main-navigation-icons/inactive/SearchNoActive.svg';
import FollowedNoActiveIcon from '@/assets/images/main-images/main-navigation-icons/inactive/FollowedNoActive.svg';

import AvatarIcon from '@/assets/images/main-images/main-navigation-icons/Avatar.svg';

import { getUserById } from '@/entities/user/api/userApi';

const icons: any = {
    Recommended: { active: RecommendedActiveIcon, inactive: RecommendedNoActiveIcon },
    Briefs: { active: BriefsActiveIcon, inactive: BriefsNoActiveIcon },
    Search: { active: SearchActiveIcon, inactive: SearchNoActiveIcon },
    Followed: { active: FollowedActiveIcon, inactive: FollowedNoActiveIcon },
    Profile: { active: AvatarIcon, inactive: AvatarIcon },
};

import {
    View,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    Platform,
} from 'react-native';

const Header = () => {
    return(
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <LogotypeIcon/>
                    
                <View style={styles.toolsList}>
                    <TouchableOpacity>
                        <AddVideoIcon/>
                    </TouchableOpacity>

                    <TouchableOpacity>                        
                        <NotificationsIcon/>
                    </TouchableOpacity>
                </View>
            </View>        
        </View>
    )
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Динамический компонент для анимации иконок
const CustomTabIcon = ({ focused, IconActive, IconInactive }: any) => { 
    return (
        <View style={ styles.tabIcon }>
            {focused ? <IconActive width={24} height={24} /> : <IconInactive width={24} height={24} />}
        </View>
    );
};

const TabNavigetion = () => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor="#000" barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />            

                <Header />

                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused }) => (
                            <CustomTabIcon focused={focused} IconActive={icons[route.name].active} IconInactive={icons[route.name].inactive} />
                        ),
                        tabBarStyle: styles.tabBar,
                        tabBarShowLabel: false,
                        headerShown: false,
                        animation: 'shift',
                        
                    })}
                    >
                    <Tab.Screen name="Recommended" component={RecommendedPage} />
                    <Tab.Screen name="Briefs" component={BriefsPage} />
                    <Tab.Screen name="Search" component={SearchPage} />
                    <Tab.Screen name="Followed" component={FollowedPage} />
                    <Tab.Screen name="Profile" component={ProfileStack} />
                </Tab.Navigator>                        

        </SafeAreaView>
    )
}

export default function MainPage() {    
    return (
        <Stack.Navigator>
      {/* Главный экран с табами */}
      <Stack.Screen 
        name="MainTabs" 
        component={TabNavigetion} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
    )
}