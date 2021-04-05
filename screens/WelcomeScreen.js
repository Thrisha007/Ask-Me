import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert} from 'react-native'
import db from "../config"
import firebase from 'firebase'

export default class WelcomeScreen extends Component{

    constructor(){
        super()
        this.state = {
            emailId: "",
            password: ""
        }
    }

    userSignUp = (emailId, password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response)=>{
            return alert("User added successfully")})
        .catch(error => {
            var errorCode = error.ecode
            var errorMessage = error.message
            return alert("Error message")
        })
    }

    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then((response)=>{
            return alert("Successfully logged in")})
        .catch(error => {
            var errorCode = error.ecode
            var errorMessage = error.message
            return alert("Error message")
        })
    }

    render(){
        return(

        <View style = {styles.container}>
            <View>
            <Text>Ask Me!</Text>
            </View>

            <View>
                <TextInput
                    placeholder="abc@gmail.com"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    onChangeText={text => {
                        this.setState({
                            emailId: text
                        })
                        }}
                        style = {styles.loginBoxs}
                    />

                <TextInput
                    placeholder="password"
                    placeholderTextColor="gray"
                    secureTextEntry={true}
                    onChangeText={text => {
                        this.setState({
                            password: text
                        })
                    }}
                    style = {styles.loginBox}
                />

                <TouchableOpacity
                style = {[styles.button, {marginBottom: 20, marginTop:20}]}
                onPress = {()=>{
                    this.userSignUp(
                        this.state.emailId,
                        this.state.password
                    )
                }}
                >
                    <Text style = {styles.buttonText}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style = {styles.button}
                onPress = {()=>{
                    this.userLogin(
                    this.state.emailId,
                    this.state.password
                )}}
                >
                    <Text style = {styles.buttonText}>Login in</Text>
                </TouchableOpacity>
            </View>

        </View>
        )
    }
}

const styles = StyleSheet.create({
    loginBox: {
        width: "80%",
        height: 50,
        borderWidth: 1.5,
        borderColor: "#ffffff",
        fontSize: 20,
        paddingLeft: 10
      },
      container: {
        flex: 1,
        backgroundColor: "#6fc0b8"
      },
      button: {
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginBottom: 10,
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16
      },
      buttonText: {
        color: "#32867d",
        fontWeight: "200",
        fontSize: 20
      },
})