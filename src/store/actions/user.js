/* eslint-disable prettier/prettier */
import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT, 
    LOADING_USER, 
    USER_LOADED 
} from "./actionTypes"
import axios from "axios"

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyDfBkc0FOgAZ6WjXeyS5Z8hzW-LnnGhZcs'

export const userLogged = function(user) //export const login = user =>... is the same
{
    return{
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = function()
{
    return{
        type: USER_LOGGED_OUT,
    }
}

export const createUser = function(user)
{
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true,
        })
            .catch(err => console.log(err))
            .then(res => {
                if(res.data.localId){
                    axios.put(`/users/${res.data.localId}.json`, {
                        name: user.name,
                    })
                        .catch(err => console.log(err))
                        .then(() => {
                            console.log('New user successfully created')
                            dispatch(login(user))
                        })
                }
            })
    }
}

export const loadingUser = function()
{
    return{
        type: LOADING_USER
    }
}

export const userLoaded = function()
{
    return{
        type: USER_LOADED
    }
}

export const login = function(user)
{
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true,
        })
            .catch(err => console.log(err))
            .then(res => {
                if(res.data.localId){
                    user.token = res.data.idToken
                    axios.get(`/users/${res.data.localId}.json`)
                        .catch(err => console.log(err))
                        .then(res => {
                            delete user.password
                            user.name = res.data.name
                            dispatch(userLogged(user))
                            dispatch(userLoaded())
                        })
                }
            })
    }
}