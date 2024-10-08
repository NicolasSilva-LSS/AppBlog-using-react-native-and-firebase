/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../store/actions/posts";
import { SafeAreaView, Text, StyleSheet, TextInput, TouchableWithoutFeedback as TWF, Alert,  } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends Component
{
    state = {
        comment: '',
        editMode: false,
    }

    handleAddComment = () => 
    {
        this.props.onAddComment({
            postId: this.props.postId,
            comment:{
                nickname: this.props.name,
                comment: this.state.comment,
            }
        })

        this.setState({comment: '', editMode: false})
    }

    render() {
        let commentArea = null
        if(this.state.editMode)
        {
            commentArea = (
                <SafeAreaView style={styles.container}>
                    <TextInput 
                        placeholder='Comment...' 
                        placeholderTextColor={'#808080'}
                        style={styles.input} 
                        autoFocus={true} 
                        value={this.state.comment} 
                        onChangeText={comment => this.setState({comment})}
                        onSubmitEditing={this.handleAddComment}
                    />
                    <TWF onPress={() => this.setState({editMode: false})}>
                        <Text style={styles.text}>X</Text>
                    </TWF>
                </SafeAreaView>
            )
        }else
        {
            commentArea = (
                <TWF onPress={() => this.setState({editMode: true})}>
                    <SafeAreaView style={styles.container}>
                        <Text style={styles.caption}>add a comment...</Text>
                    </SafeAreaView>
                </TWF>
            )
        }

        return(
            <SafeAreaView style={{flex: 1}}>
                {commentArea}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    caption:{
        marginLeft: 10,
        fontSize: 14,
        color: '#808080',
    },
    input:{
        width: '80%',
        color: '#f8f8ff'
    },
    text:{
        color: '#f8f8ff',
        width: 25,
        height: 25
    }
})

//export default AddComment;

const mapStateToProps = ({user}) => {
    return{
        name: user.name,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAddComment: payload => dispatch (addComment(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)