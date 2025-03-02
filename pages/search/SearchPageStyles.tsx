import {
    StyleSheet,
    Dimensions,
} from 'react-native';

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