/* eslint-disable prettier/prettier */
import React, {Component} from "react";
import { 
    StyleSheet,
    Text,
    SafeAreaView,
    Platform,
    Image,
    View,

} from "react-native";
import icon from '../../assets/imgs/icon.png';

class Header extends Component 
{
    render(): React.ReactNode {
        
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image}/>
                    <Text style={styles.title}>BlogApp</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 6,
        borderBottomWidth: 1,
        borderColor: '#ff1493',
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        height: 20,
        width: 20,
        resizeMode: 'contain',
    },
    title:{
        color: '#d3d3d3',
        height: 30,
        fontSize: 20,
        paddingLeft: 10
    },
})

export default Header;