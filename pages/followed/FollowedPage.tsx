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

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
);

export default function FollowedPage() {
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
                    renderItem={({item}) => <Item title={item.title} />}
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