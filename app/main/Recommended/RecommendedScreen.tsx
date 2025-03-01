import VideoPreview from '@/app/previews/Video/VideoPreview';

import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
    Text,
} from 'react-native';

export const videos = [
    {
        id: "1",
        titleVideo: "I Drew Every Day for 365 Days..... *it was painful*",
        channelName: "PewDiePie",
        videoPreview: require('../../../assets/images/video-images/previews/Thumbnail.png'),
        avatar: require('../../../assets/images/video-images/avatars/Avatar.png'),
        views: '1.4M',
        date: '1 day',
        time: '16:52',
    },
    {
        id: "2",
        titleVideo: "6 UI Hacks I Wish I Knew As A Beginner",
        channelName: "Tim Gabe",
        videoPreview: require('../../../assets/images/video-images/previews/image.png'),
        avatar: require('../../../assets/images/video-images/avatars/Avatar-1.png'),
        views: '835K',
        date: '1 year',
        time: '11:11',
    },
    {
        id: "3",
        titleVideo: "MKBHD's Wallpaper App Could be Way Better - My Review & Redesign",
        channelName: "PewDiePie",
        videoPreview: require('../../../assets/images/video-images/previews/image-1.png'),
        avatar: require('../../../assets/images/video-images/avatars/Avatar.png'),
        views: '1.4',
        date: '1',
        time: '16:52',
    },    
];

const storyListData = [
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

export default function RecommendedScreen() {
    return(
        <View style={{backgroundColor: '#fff', height: '100%'}}>
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