/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, SafeAreaView, Image, Dimensions } from "react-native";

import Author from "./Author";
import Comments from "./Comments";
import AddComment from "./AddComment";

class Post extends Component
{
    render(): React.ReactNode {
        const addComment = this.props.name ? <AddComment postId={this.props.id}/> : null

        return(
            <SafeAreaView style={styles.container}>
                <Author email={this.props.email} nickname={this.props.nickname}/>
                <Image source={{uri: this.props.image}} style={styles.image} />
                <Comments comments={this.props.comments}/>
                {addComment}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain',
    }
});

//export default Post;

const mapStateToProps = ({user}) => {
    return{
        name: user.name
    }
}

export default connect(mapStateToProps)(Post)