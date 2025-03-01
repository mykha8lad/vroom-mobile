import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,  
  StatusBar,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';

import { videos } from '@/app/main/Recommended/RecommendedScreen';
import VideoPreview from '@/app/previews/Home/VideoPreview';
import VideosForYouPreview from '@/app/previews/Home/VideosForYouPreview';

export default function HomeScreen() {
    return(        
        <View style={styles.containerHomeSection}>
            <View>
                <VideoPreview preview={videos[videos.length - 1]}/>
            </View>
            <View style={styles.videosRow}>
                <Text style={{fontSize: 16}}>For you</Text>
                <FlatList
                    data={videos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <VideosForYouPreview preview={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHomeSection: {
        rowGap: 16,
    },
    videosRow: {
        marginLeft: 16,
        marginBottom: 10,
        rowGap: 4,
    }
})
