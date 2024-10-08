/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Gravatar } from 'react-native-gravatar';

export default props => 
{
    return(
        <SafeAreaView style={styles.container}>
            <Gravatar options={{ email: props.email, secure: true }} style={styles.avatar}/>
            <Text style={styles.nickname}>{props.nickname}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar:{
        height: 30,
        width: 30,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    nickname:{
        color: '#444',
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 'bold',
    }
})