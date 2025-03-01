import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const VideoPreview = ({ preview }: any) => {
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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        rowGap: 5,
      },
      video: {
        width: '100%',
        height: 200,        
      },
      infoContainer: {
        flexDirection: "row",        
      },
      thumbnail: {
        width: 30,
        height: 30,
        borderRadius: 20,
        marginLeft: 16,        
      },
      textContainer: {
        marginLeft: 16,
      },
      title: {        
        fontSize: 14,
      },
      subTitleRow: {
        flexDirection: 'row',
        columnGap: 3,
        alignItems: 'center',
      },
      subTitle: {
        color: '#404040',
        fontSize: 12,
      },
      sep: {
        color: '#404040',
      },
      more: {
        marginRight: 10,
      },
      timeView: {
        backgroundColor: '#000',
        paddingHorizontal: 3,
        paddingVertical: 1.5,
        opacity: .75,
        position: 'absolute',
        right: 10,
        bottom: 70,
        borderRadius: 5,
      },
      timeText: {
        color: '#fff',
      },      
})

export default VideoPreview;