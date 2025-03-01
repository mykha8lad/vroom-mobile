import { useState } from 'react';
import {
    View,   
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,  
    StatusBar,
    SafeAreaView,
    Platform,
    FlatList,
    ScrollView,
    TextInput,
} from 'react-native';

export default function RecommendedItem() {    
    return(
        <View style={styles.container}>
            <View style={styles.author}>
                <Image source={require('./Avatar.png')}/>

                <View style={styles.authorInfo}>
                    <Text style={styles.authorName}>Travel Channel</Text>
                    <Text style={styles.authorUserName}>@TravelChannel</Text>
                    <Text style={styles.authorFollowersCount}>684K followers</Text>
                </View>
            </View>

            <View>
                <TouchableOpacity style={styles.followBtn}>
                    <Text style={styles.btnText}>Follow</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginHorizontal: 16,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',        
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: '#E6E6E6',
        borderTopColor: '#E6E6E6',
    },
    author: {
        flexDirection: 'row',
        columnGap: 8,
        alignItems: 'center',
    },
    authorInfo: {
        flexDirection: 'column',
        rowGap: 4,
    },
    authorName: {
        fontSize: 14,
        fontWeight: 500,
    },
    authorUserName: {
        fontSize: 12,
        color: '#404040'
    },
    authorFollowersCount: {
        fontSize: 12,
        color: '#404040'
    },
    followBtn: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#0EA2DE',
        borderRadius: 5,
    },
    btnText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 500,
    },
})