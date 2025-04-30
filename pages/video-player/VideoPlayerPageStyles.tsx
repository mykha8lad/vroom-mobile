import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

export const styles = StyleSheet.create({
    descriptionContainer: {
        paddingHorizontal: 16,
        flexDirection: 'column',
        rowGap: 4,
        marginTop: 14,
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
    },
    info: {
        flexDirection: 'row',
        columnGap: 8,
    },
    infoText: {
        fontSize: 12,
        color: '#808080',
    },

    authorContainer: {
        paddingVertical: 4,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    authorInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    authorLink: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
    },
    authorName: {
        fontSize: 18,
        fontWeight: 400,
    },
    authorFollowers: {
        fontSize: 12,
        color: '#404040',  
        marginLeft: 8, 
    },
    followBtn: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: '#0EA2DE',
        borderRadius: 5,
    },
    followBtnText: {
        fontSize: 14,
        color: '#fff',
    },

    interactionsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        marginTop: 16,
    },
    likesDislikesContainer: {
        flexDirection: 'row',
        columnGap: 24,
    },
    ldCont: {
        flexDirection: 'row',
    },
    linksRow: {
        flexDirection: 'row',
        columnGap: 24,
    },


    commentsContainer: {
        flexDirection: 'column',
        rowGap: 4,
        paddingHorizontal: 16,
        marginTop: 16,
    },
    commentsHeader: {
        flexDirection: 'row',
        columnGap: 8,
    },
    commentsTitle: {
        fontSize: 14,
        fontWeight: 500,
    },
    commentsCount: {
        fontSize: 14,
        color: '#808080',
    },
    commentsContent: {
        flexDirection: 'row',
        columnGap: 4,
        backgroundColor: '#E6E6E6',
        borderRadius: 8,
        padding: 8,
    },
    comment: {
        fontSize: 12,
        flex: 1,        
    },
})