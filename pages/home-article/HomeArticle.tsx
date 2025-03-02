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

import { styles } from './HomeArticleStyles';
import { videos } from '@/shared/api/testData';
import Video from '@/widgets/Videos/VideoChannel/Video';
import VideoForYou from '@/widgets/Videos/VideoForYou/VideoForYou';

export default function HomeArticle() {
    return(
        <View style={styles.containerHomeSection}>
            <View>
                <Video preview={videos[videos.length - 1]}/>
            </View>
            <View style={styles.videosRow}>
                <Text style={{fontSize: 16}}>For you</Text>
                <FlatList
                    data={videos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <VideoForYou preview={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}