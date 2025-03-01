import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const FollowedItem = ({ preview }: any) => {    
    return (
        <TouchableOpacity style={styles.container}>    
            <View>
                <Image source={preview.avatarUser} />
            </View>
            <View>
                <Text style={styles.channelName}>{preview.channelName}</Text>
            </View>            
        </TouchableOpacity>
    );
};

export default FollowedItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginEnd: 4,
    },
    channelName: {
        fontSize: 12,
    },
})