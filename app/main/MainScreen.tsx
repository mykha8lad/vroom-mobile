import React from 'react';
import { styles } from './stylesMain';
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
        id: '0',
        title: ' ',
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
];



type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
);

type ItemProps2 = {title: string};

const Item2 = ({title}: ItemProps) => (
    <View style={styles.item2}>
      <Text>{title}</Text>
    </View>
);

export default function MainScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#0EA2DE' barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />

            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Image style={{height: 24, width: 100}} source={require('@/assets/images/main-images/logotype.png')}/>

                    <View style={styles.toolsList}>
                        <TouchableOpacity>
                            <Image style={styles.toolsIcons} source={require('@/assets/images/main-images/add_video.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={styles.toolsIcons} source={require('@/assets/images/main-images/notifications.png')}/>
                        </TouchableOpacity>
                    </View>
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
            </View>

            <View>
                <View style={styles.offersList}>
                    <FlatList
                        data={storyListData}
                        renderItem={({item}) => <Item2 title={item.title} />}
                        keyExtractor={item => item.id}                        
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

            <View style={styles.navigationContainer}>
                <View style={styles.navigationRow}>
                    <View>
                        <TouchableOpacity>
                            <Image style={styles.navigationIcons} source={require('@/assets/images/main-images/recommended.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image style={styles.navigationIcons} source={require('@/assets/images/main-images/briefs.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image style={styles.navigationIcons} source={require('@/assets/images/main-images/search.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image style={styles.navigationIcons} source={require('@/assets/images/main-images/followed.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image style={styles.navigationIcons} source={require('@/assets/images/main-images/avatar.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}