// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { styles } from './VideoPlayerPageStyles';
// import { useRoute } from '@react-navigation/native';

// import AddToPlaylistIcon from '@/shared/icons/video-player-page-icons/AddToPlaylist.svg'
// import DislikeIcon from '@/shared/icons/video-player-page-icons/Dislike.svg'
// import LikeIcon from '@/shared/icons/video-player-page-icons/Like.svg'
// import ReportIcon from '@/shared/icons/video-player-page-icons/Report.svg'
// import ShareIcon from '@/shared/icons/video-player-page-icons/Share.svg'

// import BottomShadow from '@/widgets/BottomShadow/BottomShadow';
// import Video from '@/widgets/Videos/VideoRecommended/Video';
// import { videos } from '@/shared/api/testData';

// import {
//     ScrollView,
//     StatusBar,
//     Platform,
//     View,
//     Text,
//     Image,
//     TouchableOpacity,
//     FlatList,
// } from 'react-native';

// const VideoPlayer = () => {
//     return (
//         <View>
//             {/* Здесь будет находиться плеер */}
//             <Image source={require('./img/Video.png')} />
//             <View style={styles.descriptionContainer}>
//                 <Text style={styles.title}>
//                     Giving you guys a chance....
//                 </Text>
//                 <View style={styles.info}>
//                     <Text style={styles.infoText}>
//                         50K views
//                     </Text>
//                     <Text style={styles.infoText}>
//                         2 hours ago
//                     </Text>
//                 </View>
//             </View>
//         </View>
//     );
// };

// const Author = () => {
//     return (
//         <View style={styles.authorContainer}>
//             <View style={styles.authorInfo}>
//                 <TouchableOpacity style={styles.authorLink}>
//                     <Image source={require('./img/Avatar.png')} />
//                     <Text style={styles.authorName}>PewDiePie</Text>
//                 </TouchableOpacity>
//                 <Text style={styles.authorFollowers}>110M followers</Text>
//             </View>
//             <TouchableOpacity style={styles.followBtn}>
//                 <Text style={styles.followBtnText}>Follow</Text>
//             </TouchableOpacity>            
//         </View>
//     );
// };

// const Interactions = () => {
//     return (
//         <View style={styles.interactionsContainer}>
//             <View style={styles.likesDislikesContainer}>
//                 <View style={styles.ldCont}>
//                     <TouchableOpacity>
//                         <LikeIcon />
//                     </TouchableOpacity>
//                     <Text>1.1K</Text>
//                 </View>
//                 <View style={styles.ldCont}>
//                     <TouchableOpacity>
//                         <DislikeIcon />
//                     </TouchableOpacity>
//                     <Text>233</Text>
//                 </View>
//             </View>

//             <View style={styles.linksRow}>
//                 <TouchableOpacity>
//                     <ShareIcon />
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <AddToPlaylistIcon />
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <ReportIcon />
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const Comments = () => {
//     return (
//         <View style={styles.commentsContainer}>
//             <View style={styles.commentsHeader}>
//                 <Text style={styles.commentsTitle}>
//                     Comments
//                 </Text>
//                 <Text style={styles.commentsCount}>
//                     1K
//                 </Text>
//             </View>
//             <TouchableOpacity style={styles.commentsContent}>
//                 <Image source={require('./img/Avatar1.png')} />
//                 <Text style={styles.comment} numberOfLines={2} ellipsizeMode="tail">
//                     Felix legit sparked my interest with philosophy and it has affected my life for the good. Finished Epictetus, M. Aurelius and Seneca, added Cicero and Plato.
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const VideoList = () => {
//     return (
//         <FlatList
//             data={videos}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => <Video preview={item} />}
//             showsHorizontalScrollIndicator={false}
//         />    
//     );
// };

// export default function VideoPlayerPage() {
//     const route = useRoute();
//     const { videoId } = route.params as { videoId: string };

//     const [videoData, setVideoData] = useState<any>(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchVideo();
//     }, []);

//     const fetchVideo = async () => {
//         try {
//         const res = await axios.get(`https://back.buhprogsoft.com.ua/api/Videos/${videoId}`);
//         console.log(res.data);
        
//         // setVideoData(res.data);

//         } catch (err) {
//         console.error('Ошибка при получении видео:', err);
//         } finally {
//         setLoading(false);
//         }
//     };

//     return (
//         <View>
//             <StatusBar translucent barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />            

//             <FlatList
//                 data={[]}
//                 renderItem={() => null}
//                 ListHeaderComponent={() => (
//                     <>
//                         <VideoPlayer />
//                         <Author />
//                         <Interactions />
//                         <Comments />
//                         <View style={{ marginTop: 16 }}>
//                             <VideoList />
//                         </View>
//                     </>
//                 )}
//                 showsVerticalScrollIndicator={false}
//             />

//             <BottomShadow />
//         </View>
//     )
// }

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { useUserStore } from '@/shared/store/useStore';
import { useVideoStore } from '@/shared/store/useStore';
import { Video } from 'expo-av';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Platform,
    ActivityIndicator,
} from 'react-native';

import { styles } from './VideoPlayerPageStyles';
import AddToPlaylistIcon from '@/shared/icons/video-player-page-icons/AddToPlaylist.svg';
import DislikeIcon from '@/shared/icons/video-player-page-icons/Dislike.svg';
import LikeIcon from '@/shared/icons/video-player-page-icons/Like.svg';
import ReportIcon from '@/shared/icons/video-player-page-icons/Report.svg';
import ShareIcon from '@/shared/icons/video-player-page-icons/Share.svg';

import BottomShadow from '@/widgets/BottomShadow/BottomShadow';
import VideoPreviewForList from '@/widgets/Videos/VideoRecommended/Video';

const BASE_URL = 'https://back.buhprogsoft.com.ua';

const VideoPlayer = ({ uri }: { uri: string }) => {
    const videoRef = useRef(null);

    if (!uri) {
        return <Text>⏳ Загрузка видео...</Text>;
    }            

    return (
        <Video
            ref={videoRef}
            source={{ uri }}
            style={{ width: '100%', height: 220, backgroundColor: '#000' }}
            useNativeControls
            resizeMode="contain"
            shouldPlay
            onError={(err) => console.log('❌ Video error:', err)}
        />
    );
};

const Author = ({ user }: any) => {
    // const { user: currentUser } = useUserStore();
    // subscribeToUser unsubscribeFromUser

    // if (!user || !currentUser) return null;
    // const isCurrentUser = currentUser.id === user.id;

    // допустим, currentUser.subscriptions — это массив ID, на кого мы подписаны
    // const isSubscribed = currentUser.subscriptions?.includes(user.id);

    // const handleFollowPress = async () => {
    //     if (isSubscribed) {
    //         await unsubscribeFromUser(user.id);
    //     } else {
    //         await subscribeToUser(user.id);
    //     }
    // };

    return (
        <View style={styles.authorContainer}>
            <View style={styles.authorInfo}>
                <TouchableOpacity style={styles.authorLink}>
                    <Image
                        source={
                            user.avatar
                                ? { uri: user.avatar }
                                : require('../../assets/images/main-images/profile-images/Avatar.png')
                        }
                        style={{ width: 40, height: 40, borderRadius: 20 }}
                    />
                    <Text style={styles.authorName}>{user.userName || 'Автор'}</Text>
                </TouchableOpacity>
                <Text style={styles.authorFollowers}>
                    {user.followersCount || 0} followers
                </Text>
            </View>

            {/* {!isCurrentUser && ( */}
                <TouchableOpacity
                    style={[
                        styles.followBtn,
                                        // isSubscribed ? '#E6E6E6' :
                        { backgroundColor:  '#007AFF' },
                    ]}
                    // onPress={handleFollowPress}
                    >
                
                {/* // isSubscribed ? '#000' : */}
                    <Text style={[styles.followBtnText, { color:  '#fff' }]}>
                        {/* {isSubscribed ? 'Following' : 'Follow'} */}
                        Following
                    </Text>
                </TouchableOpacity>
            {/* )} */}
        </View>
    );
};

const Interactions = ({ likes = 0 }: { likes: number }) => (
    <View style={styles.interactionsContainer}>
        <View style={styles.likesDislikesContainer}>
            <View style={styles.ldCont}>
                <TouchableOpacity><LikeIcon /></TouchableOpacity>
                <Text>{likes}</Text>
            </View>
            <View style={styles.ldCont}>
                <TouchableOpacity><DislikeIcon /></TouchableOpacity>
                <Text>–</Text>
            </View>
        </View>

        <View style={styles.linksRow}>
            <TouchableOpacity><ShareIcon /></TouchableOpacity>
            <TouchableOpacity><AddToPlaylistIcon /></TouchableOpacity>
            <TouchableOpacity><ReportIcon /></TouchableOpacity>
        </View>
    </View>
);

const Comments = ({ comments = [] }: { comments: any[] }) => (
    <View style={styles.commentsContainer}>
        <View style={styles.commentsHeader}>
            <Text style={styles.commentsTitle}>Comments</Text>
            <Text style={styles.commentsCount}>{comments.length}</Text>
        </View>
        {comments.map((comment, index) => (
            <TouchableOpacity key={index} style={styles.commentsContent}>
                <Image
                    source={{ uri: 'https://placehold.co/100x100?text=C' }}
                    style={{ width: 36, height: 36, borderRadius: 18 }}
                />
                <Text style={styles.comment} numberOfLines={2}>
                    {comment.content}
                </Text>
            </TouchableOpacity>
        ))}
    </View>
);

const VideoList = () => {
    const { videos } = useVideoStore();
    return (
        <FlatList
            data={videos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <VideoPreviewForList preview={item} />}
            scrollEnabled={false}
        />
    );
};

export default function VideoPlayerPage() {
    const route = useRoute();
    const { video } = route.params as { video: any };

    const [videoData, setVideoData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchVideo();          
    }, []);

    const fetchVideo = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/Videos/${video.id}`);
            setVideoData(res.data);
            console.log('👤 Пользователь в видео:', res.data.user); // ← вот так правильно
        } catch (err) {
            console.error('Ошибка при получении видео:', err);
        } finally {
            setLoading(false);
        }
    };

    if (loading || !videoData) {
        return <ActivityIndicator size="large" color="#000" style={{ flex: 1, justifyContent: 'center' }} />;
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />
            <FlatList
                data={[]}
                renderItem={() => null}
                ListHeaderComponent={() => (
                    <>
                        <VideoPlayer uri={`https://back.buhprogsoft.com.ua${videoData.videoUrl}`} />
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.title}>{videoData.title}</Text>
                            <View style={styles.info}>
                                <Text style={styles.infoText}>{videoData.viewsCount ?? 0} views</Text>
                                <Text style={styles.infoText}>{new Date(videoData.createdAt).toLocaleDateString()}</Text>
                            </View>
                        </View>
                        <Author user={videoData.user} />
                        <Interactions likes={videoData.likesCount} />
                        <Comments comments={videoData.comments} />
                        <View style={{ marginTop: 16 }}>
                            <VideoList />
                        </View>
                    </>
                )}
                showsVerticalScrollIndicator={false}
            />
            <BottomShadow />
        </View>
    );
}
