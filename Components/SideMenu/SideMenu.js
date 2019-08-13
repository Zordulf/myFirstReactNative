
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.menuHeader}>
          <Image style={{height: 150, width: 150 }} source={require("./wolf.png")} />
          <Text style={{color: 'white'}}>{"\n"}Zorell Gerente</Text>
        </View>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle} onPress={this.navigateToScreen('Calculator')}>
              Calculator
            </Text>           
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle} onPress={this.navigateToScreen('About')}>
              About
            </Text>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>ver 0.5 - Z, Gerente</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;