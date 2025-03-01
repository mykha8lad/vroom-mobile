import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import MoreIcon from './icons/More.svg'
import CommentsIcon from './icons/Comments.svg'
import DislikeIcon from './icons/Dislike.svg'
import LikeIcon from './icons/Like.svg'
import ShareIcon from './icons/Share.svg'

const PostPreview = ({ preview }: any) => {
    return (
        <View style={styles.postContainer}>
            <View style={styles.authorInfoRow}>
                <View style={styles.authorInfo}>
                    <Image source={preview.avatar} resizeMode="cover" />
                    <View>
                        <Text>{preview.userName}</Text>
                        <Text style={{fontSize: 12, color: '#808080'}}>{preview.postDate}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <MoreIcon/>
                    </TouchableOpacity>
                </View>
            </View>
                
            <View style={styles.postContent}>                
                <View>
                    <Text>{preview.postDescription}</Text>
                </View>
                <View>
                    <Image source={preview.postImage} resizeMode="cover" />
                </View>
            </View>

            <View style={styles.footerPost}>
                <View style={styles.ratingRow}>
                    <View>
                        <TouchableOpacity style={styles.ratingItem}>
                            <LikeIcon/>
                            <Text>{preview.likes}</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.ratingItem}>
                            <DislikeIcon/>
                            <Text>{preview.dislikes}</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.ratingItem}>
                            <CommentsIcon/>
                            <Text>{preview.comments}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <TouchableOpacity>
                        <ShareIcon/>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    postContainer: {
        flexDirection: 'column',
        rowGap: 8,
        marginBottom: 17,
    },
    authorInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 16,
    },
    authorInfo: {
        flexDirection: 'row',
        columnGap: 8,
        alignItems: 'center',
    },
    postContent: {
        flexDirection: 'column',
        rowGap: 8,
    },
    footerPost: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 16,
        alignItems: 'center',
    },
    ratingRow: {
        flexDirection: 'row',
        columnGap: 20,
    },
    ratingItem: {
        flexDirection: 'row',
        columnGap: 8,
        alignItems: 'center',
    },
})

export default PostPreview;