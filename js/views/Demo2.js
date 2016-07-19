/**
 * Demo1:简单的实现了一份属性的样式，没有重用性可言
 * TODO: Demo2封装后可以重复使用
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ScrollView,
  Image
} from 'react-native';

import ListItem from '../components/ListItem';
import ListItemGroup from '../components/ListItemGroup';
import ListItemStyles, {ListItemTypes} from '../components/ListItemStyles';


export default class Demo2 extends Component {
  constructor(props) {
      super(props);

      this.data = [
        {
          type: ListItemTypes.T_F,
          title: '微信号',
          subTitle: '',
          img: null,
          clickable: true,
          height: -1,     //默认
          onPress: ()=>{ alert("onpress")},
          onRenderLineRight: () => {
            return (
                <View style={ListItemStyles.lineContainer}>
                  <View style={ListItemStyles.listItemPaddingRight}>
                    <Image style={[ListItemStyles.cmMiddleIcon]} source={require('./img/icon.png')} />
                  </View>
                  <Text style={[ListItemStyles.textRight, {fontWeight: 'bold'}]}>></Text>
                  </View>
              );
          },
          onRenderLineLeft: null,
        },
        {
          type: ListItemTypes.T_T,
          title: '微信号',
          subTitle: 'wc250en007',
          img: null,
          clickable: true,
          height: -1,     //默认
          onPress: ()=>{ alert("onpress")},
          onRenderLineRight: () => {
            return (
                <View style={ListItemStyles.lineContainer}>
                  <View style={ListItemStyles.listItemPaddingRight}>
                    <Image style={[ListItemStyles.cmMiddleIcon]} source={require('./img/icon.png')} />
                  </View>
                  <Text style={[ListItemStyles.textRight, {fontWeight: 'bold'}]}>></Text>
                  </View>
              );
          },
          onRenderLineLeft: null,
        },
        {
          type: ListItemTypes.T_SPF,
          title: '微信号',
          subTitle: 'wc250en007',
          img: require('./img/icon.png'),
          clickable: true,
          height: -1,     //默认
          onPress: ()=>{ alert("onpress")},
          onRenderLineRight: () => {
            return (
                <View style={ListItemStyles.lineContainer}>
                  <View style={ListItemStyles.listItemPaddingRight}>
                    <Image style={[ListItemStyles.cmMiddleIcon]} source={require('./img/icon.png')} />
                  </View>
                  <Text style={[ListItemStyles.textRight, {fontWeight: 'bold'}]}>></Text>
                  </View>
              );
          },
          onRenderLineLeft: null,
        }
      ];
  }

  _renderMiddleLine() {
    return (
      <View style={{backgroundColor: '#fff'}}>
        <View style={ListItemStyles.middleLine}>
        </View>
      </View>
    );
  }

  _renderGroupSpaceFrist() {
    return (
      <View style={ListItemStyles.itemGroupSpaceFirst}>
      </View>
    );
  }

  _renderGroupSpaceOthers() {
    return (
      <View style={ListItemStyles.itemGroupSpaceOthers}>
      </View>
    );
  }
  
  render() {
    var middleLine = this._renderMiddleLine();

    var firstSpace = this._renderGroupSpaceFrist();
    var otherSpace = this._renderGroupSpaceOthers();

    return (
      <ScrollView style={ListItemStyles.scrollViewBG}>
        <ListItemGroup data={this.data} firstGroup={true} />
        <ListItemGroup data={this.data} firstGroup={false} />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

});