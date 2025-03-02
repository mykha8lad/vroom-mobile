import {
    View,
    FlatList,
    Text,
} from 'react-native';

import Video from '@/widgets/Videos/VideoRecommended/Video';

import { videos } from '@/shared/api/testData';
import { storyListData } from '@/shared/api/testData';

import { styles } from './RecommendedPageStyles';

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
);

export default function RecommendedPage() {
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
                renderItem={({ item }) => <Video preview={item} />}
                showsHorizontalScrollIndicator={false}
            />                                   
        </View>
    )
}