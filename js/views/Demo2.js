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
import ListItemStyles from '../components/ListItemStyles';


export default class Demo2 extends Component {
  constructor(props) {
      super(props);
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
        
        {firstSpace}

        <ListItem 
          title="头像"
          onPress={()=>{
            alert("QQ聊天");
          }}
          height= {60}
          onRenderLineRight={
            ()=> {
              return (
                <View style={ListItemStyles.lineContainer}>
                  <View style={ListItemStyles.listItemPaddingRight}>
                    <Image style={[ListItemStyles.cmMiddleIcon]} source={require('./img/icon.png')} />
                  </View>
                  <Text style={[ListItemStyles.textRight, {fontWeight: 'bold'}]}>></Text>
                  </View>
              );
            }
          }
        ></ListItem>

        {middleLine}

        <ListItem 
          title="我的二维码"
          onPress={()=>{
            alert("我的二维码");
          }}
          onRenderLineRight={
            ()=> {
              return (
                <View style={ListItemStyles.lineContainer}>
                  <View style={ListItemStyles.listItemPaddingRight}>
                    <Image style={[ListItemStyles.cmSmallIcon]} source={require('./img/icon.png')} />
                  </View>
                  <Text style={[ListItemStyles.textRight, {fontWeight: 'bold'}]}>></Text>
                  </View>
              );
            }
          }
        ></ListItem>

        {middleLine}

        <ListItem 
          title="QQ聊天"
          onPress={()=>{
            alert("QQ聊天");
          }}
        ></ListItem>

        {middleLine}

        <ListItem 
          title="微信聊天"
          onRenderLineLeft={
            ()=> {
              return (
                <View style={ListItemStyles.lineContainer}>
                  <Image style={ListItemStyles.cmSmallIcon} source={require('./img/icon.png')} />
                  <Text style={ListItemStyles.listItemPaddingLeft}>微信聊天</Text>
                </View>
              );
            }
          }
          onPress={
            ()=>{
              alert("微信聊天");
            }
          }
        >
        </ListItem>

        {middleLine}

        <ListItem 
          title="微信号"
          clickable={false}
          onRenderLineRight={
            ()=> {
              return (
                 <Text style={[ListItemStyles.listItemPaddingLeft, ListItemStyles.textRight]}>wc250en007</Text>
              );
            }
          }
        ></ListItem>




        {otherSpace}




        <ListItem 
          title="性别"
          onRenderLineRight={
            ()=> {
              return (
                 <View style={ListItemStyles.lineContainer}>
                    <Text style={[ListItemStyles.textRight, ListItemStyles.listItemPaddingRight]}>男</Text>
                    <Text style={[ListItemStyles.textRight, {fontWeight: 'bold'}]}>></Text>
                </View>
              );
            }
          }
          onPress={()=>{
            alert("性别");
          }}
        ></ListItem>

         {middleLine}

        <ListItem 
          title="仅提供预览,无法点击"
          clickable={false}
          onRenderLineRight={
            ()=> {
              return (
                 <Text style={[ListItemStyles.listItemPaddingLeft, ListItemStyles.textRight]}>已开启</Text>
              );
            }
          }
          onPress={()=>{
            alert("无法点击触发消息，仅提供预览");
          }}
        ></ListItem>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

});