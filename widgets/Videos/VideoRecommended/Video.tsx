import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './VideoStyles';
import { IVideo } from "@/entities/video/model/types";
import MoreIcon from './icons/More.svg'
import { FC } from "react";

// interface VideoProps {
//     readonly video: IVideo,
// }

// const Video: FC<VideoProps> = ({ video }) => {
//     const videoAvatar = video.avatar ? { uri: video.avatar } : undefined;
//     const authorAvatar = video.author.avatar ? { uri: video.author.avatar } : undefined;   

//     return (
//         <View style={styles.container} key={video.id}>          
//             <TouchableOpacity>
//                 <Image source={videoAvatar} style={styles.video} resizeMode="cover" />
//             </TouchableOpacity>
            
//             <View style={styles.infoContainer}>
//                 <Image source={authorAvatar} style={styles.thumbnail} />
//                 <View style={styles.timeView}>
//                     <Text style={styles.timeText}>{video.time}</Text>
//                 </View>
//                 <View style={styles.textContainer}>
//                     <Text style={styles.title}>{video.title}</Text>
//                     <View style={styles.subTitleRow}>
//                         <Text style={styles.subTitle}>{video.author.userName}</Text>
//                         <Text style={styles.sep}>·</Text>
//                         <Text style={styles.subTitle}>{video.views} views</Text>
//                         <Text style={styles.sep}>·</Text>
//                         <Text style={styles.subTitle}>{video.date} ago</Text>
//                     </View>
//                 </View>
//                 <MoreIcon/>
//             </View>
//         </View>
//     );
// };
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