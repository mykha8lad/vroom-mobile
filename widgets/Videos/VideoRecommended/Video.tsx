import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './VideoStyles';
import { useNavigation } from '@react-navigation/native';
import { IVideo } from "@/entities/video/model/types";
import MoreIcon from './icons/More.svg'
import { FC } from "react";

// const Video = ({ preview }: any) => {    
//     const navigation: any = useNavigation();

//     const handlePress = () => {
//         navigation.navigate('VideoPlayer');
//     };

//     return (
//         <View style={styles.container}>            
//             <TouchableOpacity onPress={handlePress}>
//                 <Image source={preview.videoPreview} style={styles.video} resizeMode="cover" />
//             </TouchableOpacity>
            
//             <View style={styles.infoContainer}>
//                 <Image source={preview.avatar} style={styles.thumbnail} />
//                 <View style={styles.timeView}>
//                     <Text style={styles.timeText}>{preview.time}</Text>
//                 </View>
//                 <View style={styles.textContainer}>
//                     <Text style={styles.title}>{preview.titleVideo}</Text>
//                     <View style={styles.subTitleRow}>
//                         <Text style={styles.subTitle}>{preview.channelName}</Text>
//                         <Text style={styles.sep}>·</Text>
//                         <Text style={styles.subTitle}>{preview.views} views</Text>
//                         <Text style={styles.sep}>·</Text>
//                         <Text style={styles.subTitle}>{preview.date} ago</Text>
//                     </View>
//                 </View>
//                 <MoreIcon/>
//             </View>
//         </View>
//     );
// };

// export default Video;

import React from 'react';

const BASE_URL = 'https://back.buhprogsoft.com.ua';

const VideoPreviewForList = ({ preview }: { preview: any }) => {
    const navigation: any = useNavigation();

    const handlePress = () => {
        navigation.navigate('VideoPlayer', { video: preview });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
                <Image
                    source={{ uri: BASE_URL + preview.thumbnailUrl }}
                    style={styles.video}
                    resizeMode="cover"
                />
            </TouchableOpacity>

            <View style={styles.infoContainer}>
                <Image
                    source={
                        preview.avatar
                            ? { uri: preview.avatar }
                            : require('../../../assets/images/main-images/profile-images/Avatar.png')
                    }
                    style={styles.thumbnail}
                />
                <View style={styles.timeView}>
                    <Text style={styles.timeText}>
                        {preview.duration ? `${preview.duration}s` : '0s'}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        {preview.title || 'Без названия'}
                    </Text>
                    <View style={styles.subTitleRow}>
                        <Text style={styles.subTitle}>{preview.user?.userName || 'Автор'}</Text>
                        <Text style={styles.sep}>·</Text>
                        <Text style={styles.subTitle}>{preview.viewsCount ?? 0} views</Text>
                        <Text style={styles.sep}>·</Text>
                        <Text style={styles.subTitle}>
                            {new Date(preview.createdAt).toLocaleDateString()}
                        </Text>
                    </View>
                </View>
                <MoreIcon />
            </View>
        </View>
    );
};

export default VideoPreviewForList;
