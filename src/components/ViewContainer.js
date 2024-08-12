/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: 'white',
        marginLeft: 10,
    },
    textTitle:{
        fontSize: 24,
        color: 'white',
        marginLeft: 10,
        color: '#666',
        marginTop: 5,
    },
    button: {
        borderBottomWidth: 2,
        borderColor: '#555',
        flexDirection: 'row',
        width: '90%',
        //height: 40,
        marginTop: 5,
        paddingTop: 5,
        marginBottom: 5,
        paddingBottom: 5,
    }
})

const ViewContainer = ({children, backgroundColor}) => {
    return (
        <View style={[styles.container, {backgroundColor}]}>
            {children}
        </View>
    )
}

export default ViewContainer
