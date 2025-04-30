// import React, { useState } from 'react'
// import {
//     View,
//     FlatList,
//     Text,
//     TouchableOpacity,
// } from 'react-native';
// import DiscoverIcon from '@/shared/icons/Discover.svg'

// import Video from '@/widgets/Videos/VideoRecommended/Video';

// import { videos } from '@/shared/api/testData';
// import { storyListData } from '@/shared/api/testData';

// import { styles } from './RecommendedPageStyles';

// const Item = ({ title, isSelected, onPress }: { title: string, isSelected: boolean, onPress: () => void }) => (
//     <TouchableOpacity
//         style={[
//             styles.item,
//             { backgroundColor: isSelected ? "#000000" : "#E6E6E6" }, 
//         ]}
//         onPress={onPress}
//     >
//         {/* Всегда оборачиваем текст в <Text> */}
//         <Text style={{ color: isSelected ? "#ffffff" : "#000000" }}>
//             {title || " "} {/* Не передаем пустую строку */}
//         </Text>
//     </TouchableOpacity>
// );

// export default function RecommendedPage() {
//     const [selectedId, setSelectedId] = useState<string | null>(null);

//     const handlePress = (id: string) => {
//         setSelectedId(id); // обновляем выбранный элемент
//     };

//     return(
//         <View style={{backgroundColor: '#fff', height: '100%'}}>
//             <View style={styles.offersList}>
                
//                 <FlatList
//                     data={[{ id: "0", icon: true }, ...storyListData]}
//                     renderItem={({ item }) =>
//                         item.icon ? (
//                             <TouchableOpacity style={styles.item}>
//                                 <DiscoverIcon width={17} height={17} />
//                             </TouchableOpacity>
//                         ) : (
//                             <Item
//                             title={item.title || ""}
//                             isSelected={item.id === selectedId} // проверяем, выбран ли элемент
//                             onPress={() => handlePress(item.id)} // обновляем состояние при нажатии
//                         />
//                         )
//                     }
//                     keyExtractor={item => item.id}
//                     horizontal={true}
//                     showsHorizontalScrollIndicator={false}
//                 />
//             </View>

//             <FlatList
//                 data={videos}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => <Video preview={item} />}
//                 showsHorizontalScrollIndicator={false}
//             />                                   
//         </View>
//     )
// }

import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

import DiscoverIcon from '@/shared/icons/Discover.svg';
import { storyListData } from '@/shared/api/testData';
import VideoPreviewForList from '@/widgets/Videos/VideoRecommended/Video';
import { styles } from './RecommendedPageStyles';
import { useVideoStore } from '@/shared/store/useStore'; // убедись, что путь правильный

const Item = ({ title, isSelected, onPress }: { title: string, isSelected: boolean, onPress: () => void }) => (
    <TouchableOpacity
        style={[
            styles.item,
            { backgroundColor: isSelected ? "#000000" : "#E6E6E6" },
        ]}
        onPress={onPress}
    >
        <Text style={{ color: isSelected ? "#ffffff" : "#000000" }}>
            {title || " "}
        </Text>
    </TouchableOpacity>
);

export default function RecommendedPage() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const { videos, fetchVideos } = useVideoStore();    

    useEffect(() => {
        fetchVideos();
    }, []);

    const handlePress = (id: string) => {
        setSelectedId(id);
    };

    return (
        <View style={{ backgroundColor: '#fff', height: '100%' }}>
            {/* Категории */}
            <View style={styles.offersList}>
                <FlatList
                    data={storyListData} // можешь вернуть storyListData если нужно
                    renderItem={({ item }) =>
                        item.icon ? (
                            <TouchableOpacity style={styles.item}>
                                <DiscoverIcon width={17} height={17} />
                            </TouchableOpacity>
                        ) : (
                            <Item
                                title={item.title || ""}
                                isSelected={item.id === selectedId}
                                onPress={() => handlePress(item.id)}
                            />
                        )
                    }
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/* Список видео */}
            {videos.length === 0 ? (
                <View style={{ padding: 20 }}>
                    <ActivityIndicator size="large" color="#000" />
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>Загрузка видео...</Text>
                </View>
            ) : (
                <FlatList
                    data={videos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <VideoPreviewForList preview={item} />}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    );
}
