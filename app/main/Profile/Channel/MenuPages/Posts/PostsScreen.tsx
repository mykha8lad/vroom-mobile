import React, { useState, useRef, useEffect } from 'react';

import PostPreview from '@/app/previews/Post/PostPreview';

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

const posts = [
    {
        id: 1,
        avatar: require('./images/Avatar.png'),
        userName: 'Juxtopposed',
        postDate: '1 day ago',
        postTitle: 'none',
        postDescription: 'good day friends! the discord redesign file is now on Figma, in case you\'d like to take a look and try it out. check the video description for the link.',
        postImage: require('./images/Image.png'),
        likes: '1.6K',
        dislikes: '32',
        comments: '68',
    },
    {
        id: 2,
        avatar: require('./images/Avatar.png'),
        userName: 'Juxtopposed',
        postDate: '1 day ago',
        postTitle: 'none',
        postDescription: 'good day friends! the discord redesign file is now on Figma, in case you\'d like to take a look and try it out. check the video description for the link.',
        postImage: require('./images/Image.png'),
        likes: '',
        dislikes: '',
        comments: '',
    },
    {
        id: 3,
        avatar: require('./images/Avatar.png'),
        userName: 'Juxtopposed',
        postDate: '1 day ago',
        postTitle: 'none',
        postDescription: 'good day friends! the discord redesign file is now on Figma, in case you\'d like to take a look and try it out. check the video description for the link.',
        postImage: require('./images/Image.png'),
        likes: '',
        dislikes: '',
        comments: '',
    },
];

export default function PostsScreen() {
    return(
        <ScrollView>
            <View style={styles.postsColumn}>
                <FlatList
                    data={posts}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => ( <PostPreview preview={item} /> )}
                    scrollEnabled={false}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    postsColumn: {
        paddingLeft: 16,
    }
})