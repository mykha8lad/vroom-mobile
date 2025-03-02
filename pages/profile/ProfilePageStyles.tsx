import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    avatarContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
    },
    headerContainer: {
        flexDirection: 'column',
        rowGap: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    userInfoContainer: {
        rowGap: 4,
        alignItems: 'center',
    },
    profileNavContainer: {
        flexDirection: 'column',
        rowGap: 8,
        marginVertical: 16,           
    },
    avatar: {
        width: "100%",
        height: "100%",
    },
    userNameText: {
        fontSize: 20,
    },
    nickNameText: {
        fontSize: 14,
        color: '#0EA2DE',
    },
    placeholder: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
    },
    editIcon: {
        width: 120,
        height: 120,        
    },
    profileNavButton: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E6E6E6',
        padding: 12,
        justifyContent: 'space-between',
        marginHorizontal: 16,
        alignItems: 'center',
    },
    profileNavButtonRow: {
        flexDirection: 'row',
        columnGap: 12,
        alignItems: 'center'
    },
    profileNavButtonText: {
        fontSize: 16,
    },
    videosRow: {
        marginLeft: 16,        
    }
});