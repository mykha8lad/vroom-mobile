import React, { useState } from 'react'
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';
import DiscoverIcon from '@/shared/icons/Discover.svg'

import Video from '@/widgets/Videos/VideoRecommended/Video';

import { videos } from '@/shared/api/testData';
import { storyListData } from '@/shared/api/testData';

import { styles } from './RecommendedPageStyles';

const Item = ({ title, isSelected, onPress }: { title: string, isSelected: boolean, onPress: () => void }) => (
    <TouchableOpacity
        style={[
            styles.item,
            { backgroundColor: isSelected ? "#000000" : "#E6E6E6" }, 
        ]}
        onPress={onPress}
    >
        {/* Всегда оборачиваем текст в <Text> */}
        <Text style={{ color: isSelected ? "#ffffff" : "#000000" }}>
            {title || " "} {/* Не передаем пустую строку */}
        </Text>
    </TouchableOpacity>
);

export default function RecommendedPage() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handlePress = (id: string) => {
        setSelectedId(id); // обновляем выбранный элемент
    };

    return(
        <View style={{backgroundColor: '#fff', height: '100%'}}>
            <View style={styles.offersList}>
                
                <FlatList
                    data={[{ id: "0", icon: true }, ...storyListData]}
                    renderItem={({ item }) =>
                        item.icon ? (
                            <TouchableOpacity style={styles.item}>
                                <DiscoverIcon width={17} height={17} />
                            </TouchableOpacity>
                        ) : (
                            <Item
                            title={item.title || ""}
                            isSelected={item.id === selectedId} // проверяем, выбран ли элемент
                            onPress={() => handlePress(item.id)} // обновляем состояние при нажатии
                        />
                        )
                    }
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <FlatList
                data={videos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Video preview={item} />}
                showsHorizontalScrollIndicator={false}
            />                                   
        </View>
    )
}