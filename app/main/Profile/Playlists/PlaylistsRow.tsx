import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import PlaylistsIcon from './Playlists.svg';

export const VideoPlaylistsPreview = ({ preview, playlist, navigation }: any ) => {    

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('PlaylistPreview', { videos: playlist })}
            style={styles.container}
        >
            <Image source={preview.videoPreview} style={styles.video} resizeMode="cover" />

            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <PlaylistsIcon width={15} height={15}/>
                    <Text style={styles.timeText}>{playlist.length} videos</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{preview.titleVideo}</Text>
                    <Text style={styles.subTitle}>{preview.channelName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        rowGap: 5,
        width: 160,
        marginStart: 4,
      },
      video: {
        width: 160,
        height: 90, 
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
      infoRow: {
        backgroundColor: '#000',
        paddingHorizontal: 3,
        paddingVertical: 1.5,
        opacity: .75,
        position: 'absolute',
        right: 5,
        bottom: 62,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 3,   
      },
      timeText: {
        color: '#fff',
      },      
})