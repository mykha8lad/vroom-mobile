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

import { styles } from './PlaylistsArticleStyles';

import { videosPlaylists } from '@/shared/api/testData';
import { AuthorPlaylist } from '@/widgets/Playlists/AuthorPlaylist/AuthorPlaylist';

export default function PlaylistsArticle({ navigation }: any) {
    return(
        <View style={styles.videosRow}>
            <FlatList
                data={videosPlaylists}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => ( <AuthorPlaylist preview={item[item.length-1]} playlist={item}  navigation={navigation}/> )}
                scrollEnabled={false}
            />
        </View>
    )
}