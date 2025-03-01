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

import VideoPreview from '@/app/previews/Home/VideoPreview';
import { videos } from '@/app/main/Recommended/RecommendedScreen';

export default function VideosScreen() {
    return(
        <View style={{marginBottom: 10}}>
            <FlatList
                data={videos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <VideoPreview preview={item} />} 
                scrollEnabled={false}               
            />
        </View>
    )
}