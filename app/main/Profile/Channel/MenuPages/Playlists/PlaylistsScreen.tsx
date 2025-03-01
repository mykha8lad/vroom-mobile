import React, { useState, useRef, useEffect } from 'react';
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
  FlatList,
} from 'react-native';

import { videosPlaylists } from '../../../Playlists/Videos';
import { AuthorPlaylistsPreview } from '@/app/previews/Paylists/AuthorPaylistsPreview';

export default function PlaylistsScreen({ navigation }: any) {
    return(
        <View style={styles.videosRow}>
            <FlatList
                data={videosPlaylists}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => ( <AuthorPlaylistsPreview preview={item[item.length-1]} playlist={item}  navigation={navigation}/> )}
                scrollEnabled={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({    
    videosRow: {
        marginLeft: 16,        
    }
});