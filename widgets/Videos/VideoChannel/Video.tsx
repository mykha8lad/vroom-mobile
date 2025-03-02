import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from './VideoStyles'

const Video = ({ preview }: any) => {
    const [paused, setPaused] = useState(true);
    
    return (
        <View style={styles.container}>
            {/* Видео */}
            <TouchableOpacity onPress={() => setPaused(!paused)}>
                <Image source={preview.videoPreview} style={styles.video} resizeMode="cover" />
            </TouchableOpacity>
    
            {/* Информация о видео */}
            <View style={styles.infoContainer}>
                <View style={styles.timeView}>
                    <Text style={styles.timeText}>{preview.time}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{preview.titleVideo}</Text>
                    <View style={styles.subTitleRow}>
                        <Text style={styles.subTitle}>{preview.views} views</Text>
                        <Text style={styles.sep}>·</Text>
                        <Text style={styles.subTitle}>{preview.date} ago</Text>
                    </View>
                </View>                
            </View>
        </View>
    );
};

export default Video;