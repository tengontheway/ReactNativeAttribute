/**
 * Created by qx on 7/18/16.
 * ListView的属性行: 左边是文本
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import ListItem from './ListItem';

export default class ListItemText extends Component {

    // 构造
      constructor(props) {
        super(props);
          this.state = {
              text: 'test'
          }
      }

    render() {
        var has_sub_title = this.props.subTitle;
        return (
            <ListItem
                onRenderLineLeft={()=>onRenderLineLeft()}
                onRenderLineRight={()=>onRenderLineRight()}
                {...this.props}
            />
        );
    }

    onRenderLineLeft() {
         
    }

    onRenderLineRight() {

    }
}

var styles = StyleSheet.create({
    background: {
        height: 50,
    },
    gMarginLeft: {
        flex: 1,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    left: {
        justifyContent: 'flex-start'
    },
    right: {
        justifyContent: 'flex-end',
        marginRight: 20,
    }
});

