/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 
 
 *  当前页实现了:
 *  
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';

import Demo1 from './js/views/Demo1';
import Demo2 from './js/views/Demo2';
import Util from './js/views/utils';

import ListItem from './js/components/ListItem';
import ListItemStyles from './js/components/ListItemStyles';


class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days:[{
        key:0,
        title:"Demo1",
        component: Demo1,
        isFA: false,
        size: 48,
        color: "#ff856c",
        hideNav: false,
      },{
        key:1,
        title:"A weather app",
        component: Demo2,
        isFA: false,
        size:60,
        color:"#90bdc1",
        hideNav: true,
      }]
    }
  }

  _jumpToDemo(index) {
    this.props.navigator.push({
      title: this.state.days[index].title,
      component: this.state.days[index].component,
      navigationBarHidden: this.state.days[index].hideNav,
    })
  }

  render() {
    var onThis = this;
    var boxs = this.state.days.map(function(elem, index) {
      return(
        <TouchableHighlight key={elem.key} style={[styles.touchBox, index%3==2?styles.touchBox2:styles.touchBox1]} underlayColor="#eee" onPress={()=> onThis._jumpToDemo(index)}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxText}>Demo{index+1}</Text>
          </View>
        </TouchableHighlight>
      );
    });
    return (
      <ScrollView>
        <View style={styles.touchBoxContainer}>
          {boxs}
        </View>
      </ScrollView>
    );
  }
}


class ReactNativeAttribute extends Component {
  constructor(props) {
      super(props);
  }
  
  
  render() {
    return (
      <NavigatorIOS
        ref='nav'
        style={styles.container}
        initialRoute={{
          title:"React Native Attr",
          component: MainView,
          backButtonTitle: 'back',
          shadowHidden: true,
        }}
        itemWrapperStyle={styles.itemWrapper}
        tintColor="#777"
      />
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#eee',
  },
  container: {
    flex: 1,
  },
  touchBoxContainer:{
    flexDirection: "row", 
    flexWrap:"wrap",
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox1:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox2:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
  },
  boxContainer:{
    alignItems:"center",
    justifyContent:"center",
    width: Util.size.width/3,
    height:Util.size.width/3,
  },
  boxText:{
    position:"absolute",
    bottom:15,
    width:Util.size.width/3,
    textAlign:"center",
    left: 0,
    backgroundColor:"transparent"
  },
  itemWrapper:{
    backgroundColor: '#f3f3f3'
  },
});

AppRegistry.registerComponent('ReactNativeAttribute', () => ReactNativeAttribute);
