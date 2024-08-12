/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/posts'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    Image, 
    Dimensions, 
    Platform, 
    ScrollView, 
    Alert, 
} from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

const noUser = 'You need to be logged in to add photos!'

class AddPhoto extends Component
{
    options = {
        saveToPhotos: true,
        mediaType: 'photo',
        maxWidth: 800,
        maxHeight: 600,
    }

    state = {
        uri: null,
        base64: null,
        image: null,
        comment: '',
    }

    componentDidUpdate = prevProps => {
        if(prevProps.loading && !this.props.loading) {
            this.setState({
                image: null,
                comment: ''
            })
            this.props.navigation.navigate('Home')
        }
    }

    captureImage = () => {
        launchCamera({
            mediaType: 'photo',
            includeBase64: true,
            saveToPhotos: true,
            maxHeight: 600,
            maxWidth: 800
        }, response => {
            if (!response.didCancel) {
                this.setState({ image: {uri: response.assets[0].uri, base64: response.assets[0].base64} })
            }
        })
    }

    pickImage = () => {
        launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 600,
            maxWidth: 800
        }, response => {
            if (!response.didCancel) {
                this.setState({ image: {uri: response.assets[0].uri, base64: response.assets[0].base64} })
            }
        })
    }

    selectType = () => {
        if(!this.props.name){
            Alert.alert('Error!', noUser)
            return
        }

        Alert.alert('Permission requested', 'Select the way you wanna share the photo',
            [
                {
                    text: 'Photos Galery',
                    onPress: () => this.pickImage(),
                    style: 'default',
                },
                {
                    text: 'Camera',
                    onPress: () => this.captureImage(),
                    style: 'default',
                },
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('Make this later...')
            }
        )
    }

    save = async () => {
        if(!this.props.name){
            Alert.alert('Error', noUser)
            return
        }

        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }],
        })
    }

    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <Text style={styles.title}>Share an image</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image}
                            style={styles.image} />                            
                    </View>
                    <TouchableOpacity onPress={this.selectType}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Select the photo</Text>
                    </TouchableOpacity>
                    <TextInput 
                        placeholder='Any comments about this?'
                        placeholderTextColor={'#808080'}
                        style={styles.input} 
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        editable={!!this.props.name} />
                    <TouchableOpacity 
                        onPress={this.save}
                        disabled={this.props.loading}
                        style={[styles.button, this.props.loading ? styles.buttonDisabled : null]}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scroll:{
        backgroundColor: '#111'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#111',
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 30,
        fontWeight: 'bold',
        color: '#FFF',
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#222',
        marginTop: 80,
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center',
    },
    button: {
        marginTop: 30,
        padding: 10,
        //backgroundColor: '#4286f4',
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',
    },
    input: {
        marginTop: 20,
        width: '90%',
        color: '#FFF',
        borderBottomWidth: 1,
        borderColor: '#FFF'
    },
    buttonDisabled: {
        backgroundColor: '#AAA',
    },
})

//export default AddPhoto

const mapStateToProps = ({user, posts}) => {
    return{
        email: user.email,
        name: user.name,
        loading: posts.isUploading,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)