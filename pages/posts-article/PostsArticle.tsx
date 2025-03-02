import React, { useState, useRef, useEffect } from 'react';

import Post from '@/widgets/Posts/Post'
import { posts } from '@/shared/api/testData';
import { styles } from './PostsArticleStyles';

import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native';

export default function PostsArticle() {
    return(
        <ScrollView>
            <View style={styles.postsColumn}>
                <FlatList
                    data={posts}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => ( <Post preview={item} /> )}
                    scrollEnabled={false}
                />
            </View>
        </ScrollView>
    )
}