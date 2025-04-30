import { useState } from 'react';
import Video from '@/widgets/Videos/VideoChannel/Video';
import FollowedRowItem from '@/widgets/Followed/FollowedRowItem/FollowedRowItem';
import { videos } from '@/shared/api/testData';
import { followedStoryListData } from '@/shared/api/testData';
import { followedList } from '@/shared/api/testData';
import { styles } from './FollowedPageStyles';

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
} from 'react-native';

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

export default function FollowedPage() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    
    const handlePress = (id: string) => {
        setSelectedId(id); // обновляем выбранный элемент
    };

    return(        
        <View style={{backgroundColor: '#fff', height: '100%'}}>

            <View style={styles.offersList}>
                <FlatList
                    data={followedList}
                    renderItem={({item}) => <FollowedRowItem preview={item} />}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={styles.offersList}>                
                <FlatList
                    data={followedStoryListData}
                    renderItem={({ item }) =>
                        <Item
                            title={item.title || ""}
                            isSelected={item.id === selectedId} // проверяем, выбран ли элемент
                            onPress={() => handlePress(item.id)} // обновляем состояние при нажатии
                        />                        
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