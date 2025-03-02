import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './VideoStyles';

import MoreIcon from './icons/More.svg'

const Video = ({ preview }: any) => {    
    return (
        <View style={styles.container}>            
            <TouchableOpacity>
                <Image source={preview.videoPreview} style={styles.video} resizeMode="cover" />
            </TouchableOpacity>
            
            <View style={styles.infoContainer}>
                <Image source={preview.avatar} style={styles.thumbnail} />
                <View style={styles.timeView}>
                    <Text style={styles.timeText}>{preview.time}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{preview.titleVideo}</Text>
                    <View style={styles.subTitleRow}>
                        <Text style={styles.subTitle}>{preview.channelName}</Text>
                        <Text style={styles.sep}>·</Text>
                        <Text style={styles.subTitle}>{preview.views} views</Text>
                        <Text style={styles.sep}>·</Text>
                        <Text style={styles.subTitle}>{preview.date} ago</Text>
                    </View>
                </View>
                <MoreIcon/>
            </View>
        </View>
    );
};

export default Video;