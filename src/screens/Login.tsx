/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component} from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput,
} from 'react-native';
import { connect } from "react-redux";
import { login } from "../store/actions/user";

class Login extends Component
{
    state = {
        name: 'Temporário',
        email: '',
        password: '',
    }

    componentDidUpdate = prevProps => {
        if(prevProps.isLoading && !this.props.isLoading){
            this.props.navigation.navigate('Home')
        }
    }

    login = () => {
        this.props.onLogin({...this.state})
        //this.props.navigation.navigate('Profile')
    }

    render(): React.ReactNode {
        return(
            <View style={styles.container}>
                <TextInput
                    placeholder="Email..." 
                    style={styles.input} 
                    autoFocus={false} 
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    placeholderTextColor={'#808080'}/>

                <TextInput 
                    placeholder="Password..."
                    style={styles.input}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    placeholderTextColor={'#808080'}/>

                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Register')}} style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    input:{
        marginTop: 20,
        width: '90%',
        //backgroundColor: '#EEE',
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#FFF',
        color: '#FFF'
    },
    button:{
        marginTop: 30,
        padding: 10,
        //backgroundColor: '#FFF'
    },
    buttonText:{
        fontSize: 20,
        color: '#FFF'
    }
})

const mapStateToProps = ({user}) => {
    return{
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onLogin: user => dispatch(login(user))
    }
}

//export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login)