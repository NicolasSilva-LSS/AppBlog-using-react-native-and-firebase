/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import ViewContainer, { styles } from "../components/ViewContainer";
import Colors from '../constants/Colors';

class Options extends Component
{
    render(){
        return (
            <ViewContainer backgroundColor={Colors.black}>
                <Text style={styles.textTitle}>General</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Privacy config</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Acessibility</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Notifications</Text>
                </TouchableOpacity>

                <Text style={styles.textTitle}>Visual</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Theme</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Visual Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Colors and Presentation</Text>
                </TouchableOpacity>

                <Text style={styles.textTitle}>Accounts</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Change username</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Log out</Text>
                </TouchableOpacity>
            </ViewContainer>
        )
    }
}

export default Options
