/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    Image, 
    Alert
} from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import icon from '../../assets/imgs/menu.png';
import offlineIcon from '../../assets/imgs/im-user-offline.510x512.png'
import { connect } from 'react-redux';
import { logout } from '../store/actions/user';
//import ViewContainer, { styles } from "../components/ViewContainer";
//import Colors from '../constants/Colors';

/*
class Profile extends Component{

    render(): React.ReactNode {

        return (
            <ViewContainer backgroundColor={Colors.red}>
                <Text style={styles.text}>Profile</Text>
                <TouchableOpacity style={_styles.button} onPress={() => this.props.navigation.navigate('Options')}>
                    <Text style={styles.text}>Options</Text>
                </TouchableOpacity>
            </ViewContainer>
        )
    }
}
*/

class Profile extends Component 
{
    logout = () => 
    {
        this.props.onLogout()
        this.props.navigation.navigate('Login')
    }

    render(): React.ReactNode {
        const options = {
            email: this.props.email,
            secure: true,
        }

        const name = this.props.name || ''
        const gravatar = this.props.email ? 
            <Gravatar options={{ email: this.props.email, secure: true}} style={styles.avatar}/> : null
        return(
            <>
                <View style={styles.rowContainer}>
                    <View style={styles.userContainer}>
                        <Text style={styles.user}>{name}</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.headerButton} 
                        onPress={() => this.props.navigation.navigate('Options')}>

                        <Image source={icon} style={styles.image}/>

                    </TouchableOpacity>
                </View>

                {
                (!this.props.name) ? 
                <View style={styles.container}>
                    <Text style={styles.text}>No users found...</Text>
                    <Image source={offlineIcon} style={styles.offAvatar}/>
                    <TouchableOpacity onPress={this.logout} style={styles.button}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </TouchableOpacity>
                </View> : 
                <View style={styles.container}>
                    <Gravatar options={options} style={styles.avatar}/>
                    <Text style={styles.nickname}>{this.props.name}</Text>
                    <Text style={styles.email}>{this.props.email}</Text>
                    <TouchableOpacity onPress={this.logout} style={styles.button}>
                        <Text style={styles.buttonText}>Log out</Text>
                    </TouchableOpacity>
                </View>
                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    rowContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#111',
        justifyContent: 'space-between'
    },
    image:{
        height: 25,
        width: 25,
        resizeMode: 'contain',
        tintColor: '#FFF',
    },
    title:{
        color: '#FFF',
        height: 30,
        fontSize: 20,
        paddingLeft: 10
    },
    headerButton:{
        padding: 10,
        backgroundColor: '#111'
    },

    text:{
        marginTop: 20,
        fontSize: 25,
        color: '#FFF'
    },
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#111'
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100,
    },
    offAvatar:{
        width: 150,
        height: 150,
        marginTop: 120,
    },
    nickname:{
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF'
    },
    email:{
        marginTop: 20,
        fontSize: 25,
        color: '#FFF'
    },
    button:{
        marginTop: 60,
        padding: 10,
        //backgroundColor: '#FFF'
    },
    buttonText:{
        fontSize: 20,
        color: '#FFF'
    },
    userContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    user:{
        fontSize: 20,
        color: '#FFF'
    },
})

const mapStateToProps = ({user}) => {
    return{
        email: user.email,
        name: user.name,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onLogout: () => dispatch(logout())
    }
}

//export default Profile;
export default connect(mapStateToProps, mapDispatchToProps)(Profile)

/*
const _styles = StyleSheet.create({
    button: {
        padding: 16,
        margin: 10,
        backgroundColor: Colors.steelBlue,
        borderRadius: 18
    }
});
*/