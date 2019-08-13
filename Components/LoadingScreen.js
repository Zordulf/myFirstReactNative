import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class LoadingScreen extends Component {
    state = { animating: true }
    
    closeActivityIndicator = () => setTimeout(() => this.setState({
    animating: false }), 5000)
    
    componentDidMount = () => this.closeActivityIndicator()
    render() {
        const animating = this.state.animating
        return (
            <View style = {styles.container}>
            <ActivityIndicator
                animating = {animating}
                color = '#bc2b78'
                size = "large"
                style = {styles.activityIndicator}/>
            </View>
        )
    }
}
export default LoadingScreen

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        position: "absolute",
        backgroundColor: 'white',
        height: 150,
        width: 150
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})