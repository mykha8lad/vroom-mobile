import VideoPreview from '@/app/previews/Video/VideoPreview';
import FollowedItem from '@/app/previews/Followed/FollowedItem';

import { videos } from '../Recommended/RecommendedScreen';

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

const storyListData = [    
    {
        id: '1',
        title: 'All',
    },
    {
        id: '2',
        title: 'Today',
    },
    {
        id: '3',
        title: 'Videos',
    },
    {
        id: '4',
        title: 'Shorts',
    },
    {
        id: '5',
        title: 'Live',
    },
    {
        id: '6',
        title: 'Continue watching',
    },
    {
        id: '7',
        title: 'Unwatched',
    },
];

const followedList = [
    {
        id: '0',
        avatarUser: require('./test-images/View all.png'),
        channelName: 'View all',
    },
    {
        id: '1',
        avatarUser: require('./test-images/Avatar.png'),
        channelName: 'Arthas',
    },
    {
        id: '2',
        avatarUser: require('./test-images/Avatar-1.png'),
        channelName: 'Defun',
    },
    {
        id: '3',
        avatarUser: require('./test-images/Avatar-2.png'),
        channelName: 'Juxtop',
    },
    {
        id: '4',
        avatarUser: require('./test-images/Avatar-3.png'),
        channelName: 'Megal',
    },
    {
        id: '5',
        avatarUser: require('./test-images/Avatar-4.png'),
        channelName: 'Vsauce',
    },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
);

export default function FollowedScreen() {
    return(        
        <View style={{backgroundColor: '#fff', height: '100%'}}>

            <View style={styles.offersList}>
                <FlatList
                    data={followedList}
                    renderItem={({item}) => <FollowedItem preview={item} />}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={styles.offersList}>
                <FlatList
                    data={storyListData}
                    renderItem={({item}) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <FlatList                        
                data={videos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <VideoPreview preview={item} />}
                showsHorizontalScrollIndicator={false}
            />                                   
        </View>
    )
}

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',    
    },
    headerContainer: {
        marginTop: 12,
        marginBottom: 4,
        flexDirection: 'column',
        rowGap: 12,
    },
    navigationContainer: {
        paddingHorizontal: 16,        
        paddingTop: 12,
        paddingBottom: 21,
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderTopColor: '#E6E6E6',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.05,
    },
    toolsList: {
        flexDirection: 'row',
        columnGap: 27,
    },
    offersList: {
        paddingLeft: width * 0.05,
        marginBottom: 4,
        marginTop: 12,
    },
    toolsIcons: {
        height: 19,
        width: 19,
    },
    navigationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    navigationIcons: {
        height: 24,
        width: 24,
    },
    item: {
        backgroundColor: '#E6E6E6',  
        marginRight: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    item2: {
        backgroundColor: '#E6E6E6',  
        marginRight: 5,
        paddingVertical: 185,        
        borderRadius: 5,
    },
    itemTitle: {
        color: '#000',
    },
    tabBar: { backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#ddd' },
    tabIcon: { width: 24, height: 24, resizeMode: 'contain' },
})