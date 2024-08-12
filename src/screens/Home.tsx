/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    SafeAreaView, 
    FlatList 
} from 'react-native'
import Colors from '../constants/Colors'
import Post from '../components/Post'
import { fetchPosts } from '../store/actions/posts'

class Home extends Component
{   
    componentDidMount = () => {
        this.props.onFetchPosts()
    }

    render() 
    {
        return(
            <SafeAreaView style={styles.container}>
            <FlatList 
                data={this.props.posts}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => 
                    <Post key={item.id} {...item} />
                }/>
        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#F5FCFF'
        backgroundColor: '#111'
    },

})

//export default Home

const mapStateToProps = ({posts}) => {
    return{
        posts: posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)