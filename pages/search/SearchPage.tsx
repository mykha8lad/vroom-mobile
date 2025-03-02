import { useState } from 'react';
import { styles } from './SearchPageStyles';
import RecommendedChannel from '@/widgets/Followed/RecommendedChannel/RecommendedChannel';
import { searchListData } from '@/shared/api/testData';

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

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
);

export default function SearchPage() {
    const [text, setText] = useState('');

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter"                        
                        value={text}
                        onChangeText={setText}
                    />
                    {text.length > 0 && (   
                        <TouchableOpacity onPress={() => setText('')}>
                            <Text>X</Text>
                        </TouchableOpacity>   
                    )}   
                </View>

                <View style={styles.offersList}>                                
                    <FlatList
                        data={searchListData}
                        renderItem={({item}) => <Item title={item.title} />}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>


            <ScrollView style={styles.contentContainer}>
                <RecommendedChannel/>
            </ScrollView>
        </View>
    )
}