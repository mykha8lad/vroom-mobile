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
import RecommendedItem from '@/app/previews/Recommended/RecommendedItem';

const searchListData = [
    {
        id: '0',
        title: '',
    },
    {
        id: '1',
        title: 'All',
    },
    {
        id: '2',
        title: 'Gaming',
    },
    {
        id: '3',
        title: 'Black Myth: Wukong',
    },
    {
        id: '4',
        title: 'Live',
    },
    {
        id: '5',
        title: 'Video Game walkthroughs',
    },
    {
        id: '6',
        title: 'Audio commentaries',
    },
    {
        id: '7',
        title: 'History',
    },
    {
        id: '8',
        title: 'Algebra',
    },
    {
        id: '9',
        title: 'Role-Playing Games',
    },
    {
        id: '10',
        title: 'Science',
    },
    {
        id: '11',
        title: 'Comedy',
    },
    {
        id: '12',
        title: 'Pop Music',
    },
    {
        id: '13',
        title: 'Cars',
    },
    {
        id: '14',
        title: 'Nature',
    },
    {
        id: '15',
        title: 'Recently uploaded',
    },
    
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
);

export default function SearchScreen() {
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
                <RecommendedItem/>
            </ScrollView>
        </View>
    )
}

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        backgroundColor: '#fff',
        height: '100%'
    },
    headerContainer: {
        rowGap: 8,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
        borderRadius: 8,
        marginHorizontal: 16,
        paddingHorizontal: 8,
        height: 38,
    },
    offersList: {
        paddingLeft: 16,
        marginBottom: 4,
    },
    item: {
        backgroundColor: '#E6E6E6',  
        marginEnd: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    input: {
        fontSize: 14,
        flex: 1,
        color: '#333',
        textAlignVertical: 'center', // Центрируем текст по вертикали
        paddingVertical: 0,
    },
    contentContainer: {
        paddingVertical: 10,
    },
})