import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const VideosForYouPreview = ({ preview }: any) => {
    return (
            <View style={styles.container}>
                {/* Видео */}
                <TouchableOpacity>
                    <Image source={preview.videoPreview} style={styles.video} resizeMode="cover" />
                </TouchableOpacity>
        
                {/* Информация о видео */}
                <View style={styles.infoContainer}>                
                    <View style={styles.timeView}>
                        <Text style={styles.timeText}>{preview.time}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{preview.titleVideo}</Text>                    
                        <Text style={styles.subTitle}>{preview.channelName}</Text>                    
                    </View>                
                </View>
            </View>
        );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        rowGap: 5,
        width: 280,
        marginEnd: 4,
      },
      video: {
        width: 280,
        height: 158, 
        borderRadius: 10,       
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
        marginLeft: 4,        
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
        fontSize: 26,
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
        right: 5,
        bottom: 62,
        borderRadius: 5,
      },
      timeText: {
        color: '#fff',
      },      
})

export default VideosForYouPreview;