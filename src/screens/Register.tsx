/* eslint-disable prettier/prettier */
import React, { Component} from "react";
import { 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Text, 
    TextInput 
} from "react-native";
import { connect } from "react-redux";
import { createUser } from "../store/actions/user";

class Register extends Component
{
    state = {
        name: '',
        email: '',
        password: '',
    }

    componentDidUpdate = prevProps => {
        if(prevProps.isLoading && !this.props.isLoading){
            this.setState({
                name: '',
                email: '',
                password: '',
            })
            this.props.navigation.navigate('Profile')
        }
    }

    render(): React.ReactNode {
        return(
            <View style={styles.container}>
                <TextInput 
                    placeholder="Name" 
                    style={styles.input} 
                    autoFocus={false} 
                    value={this.state.name} 
                    onChangeText={name => this.setState({name})}/>
                <TextInput 
                    placeholder="Email" 
                    style={styles.input}
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}/>
                <TextInput 
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}/>
                <TouchableOpacity 
                    onPress={()=>{this.props.onCreateUser(this.state)}}
                    style={styles.button}>
                        <Text style={styles.buttonText}>Save</Text>
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
    },
    button:{
        marginTop: 30,
        padding: 10,
        //backgroundColor: '#4286f4'
    },
    buttonText:{
        fontSize: 20,
        color: '#111',
    },
    input:{
        marginTop: 20,
        width: '90%',
        //backgroundColor: '#EEE',
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#333',
        padding: 10,
        //color: '#FFF'
    }
})

//export default Register;

const mapStateToProps = ({user}) => {
    return{
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)