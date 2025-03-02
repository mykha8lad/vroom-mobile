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

import Video from '@/widgets/Videos/VideoChannel/Video';
import { videos } from '@/shared/api/testData';

export default function VideosArticle() {
    return(
        <View style={{marginBottom: 10}}>
            <FlatList
                data={videos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Video preview={item} />} 
                scrollEnabled={false}               
            />
        </View>
    )
}