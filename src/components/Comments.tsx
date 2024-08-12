/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet, Dimensions, Alert } from "react-native";

class Comments extends Component
{
    render(){
        let view = null
        if(this.props.comments)
        {
            view = this.props.comments.map((item, index) => {
                return(
                    <SafeAreaView style={styles.commentContainer} key={index}>
                        <Text style={styles.nickname}>{item.nickname}: </Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                    </SafeAreaView>
                )
            })
        }

        return(
            <SafeAreaView style={styles.container}>
                {view}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    conatiner:{
        flex: 1,
        margin: 10
    },
    commentContainer:{
        flexDirection: 'row',
        marginTop: 5,
    },
    nickname:{
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#d3d3d3'
    },
    comment:{
        color: '#d3d3d3'
    }
})

export default Comments;