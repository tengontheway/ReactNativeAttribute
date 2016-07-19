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
  
  render() {
    return (
      <ScrollView style={ListItemStyles.scrollViewBG}>
        <ListItem 
          title="QQ聊天"
          onPress={()=>{
            alert("QQ聊天");
          }}
        ></ListItem>

        <ListItem 
          title="微信聊天"
          onRenderLineLeft={
            ()=> {
              return (
                <View style={ListItemStyles.lineContainer}>
                  <Image style={ListItemStyles.cmIcon} source={require('./img/icon.png')} />
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

        <ListItem 
          title="微信号"
          onRenderLineRight={
            ()=> {
              return (
                 <Text style={[ListItemStyles.listItemPaddingLeft, ListItemStyles.textRight]}>wc250en007</Text>
              );
            }
          }
          onPress={()=>{
            alert("微信号：wc250en007");
          }}
        ></ListItem>

        <ListItem 
          title="性别"
          onRenderLineRight={
            ()=> {
              return (
                 <View style={ListItemStyles.lineContainer}>
                    <Text style={[ListItemStyles.textRight, ListItemStyles.listItemPaddingRight]}>你好</Text>
                    <Text style={[ListItemStyles.textRight, {fontWeight: 'bold'}]}>></Text>
                </View>
              );
            }
          }
          onPress={()=>{
            alert("性别");
          }}
        ></ListItem>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

});