import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import LoadingScreen from './Components/LoadingScreen';

class AboutScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View>
                    <Text>About Screen</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AboutScreen;