import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import GeneralChannelScreen from './Channel/GeneralChannelScreen';
import HistoryScreen from './History/HistoryScreen';
import PlaylistsScreen from './Playlists/PlaylistsScreen';
import SettingsScreen from './Settings/SettingsScreen';

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="GeneralChannel" component={GeneralChannelScreen} />
            <Stack.Screen name="History" component={HistoryScreen} />
            <Stack.Screen name="Playlists" component={PlaylistsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
};

export default ProfileStack;