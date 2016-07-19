/**
    根据数组列表来渲染数据
 */
'use strict';

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import ListItem from '../components/ListItem';
import ListItemStyles, {ListItemTypes} from '../components/ListItemStyles';

export default class ListItemGroup extends Component {
    // static propTypes = {
    //     data: React.propTypes.array.isRequired,
    //     firstGroup: React.propTypes.bool,       // 第一组间距小，后面组间距大
    // };

    constructor(props) {
        super(props);
        
        this.firstGroup = false;
        if (typeof(this.props.firstGroup) !== 'undefined') {
            this.firstGroup = this.props.firstGroup;
        }
    }

    _renderMiddleLine() {
        return (
        <View style={{backgroundColor: '#fff'}}>
            <View style={ListItemStyles.middleLine}>
            </View>
        </View>
        );
    }

    //  _renderGroupSpaceFrist() {
    //     return <View style={ListItemStyles.itemGroupSpaceFirst}>
    //     </View>
    // }

    // _renderGroupSpaceOthers() {
    //     return <View style={ListItemStyles.itemGroupSpaceOthers}>
    //     </View>
    // }

    LineT_F(elem) {
        return <ListItem 
          title={elem.title}
          clickable={elem.clickable}
          onPress={elem.onPress}
        ></ListItem>
    }
    LineT_T(elem) {
        return <ListItem 
          title={elem.title}
          clickable={elem.clickable}
          onPress={elem.onPress}
          onRenderLineRight={
            ()=> {
              return (
                 <Text style={[ListItemStyles.listItemPaddingLeft, ListItemStyles.textRight]}>{elem.subTitle}</Text>
              );
            }
          }
        ></ListItem>
    }

    lineT_SPF(elem) {
        return <ListItem 
                title={elem.title}
                clickable={elem.clickable}
                onPress={elem.onPress}
                onRenderLineRight={
                    ()=> {
                    return (
                        <View style={ListItemStyles.lineContainer}>
                        <View style={ListItemStyles.listItemPaddingRight}>
                            <Image style={[ListItemStyles.cmSmallIcon]} source={elem.img} />
                        </View>
                        <Text style={[ListItemStyles.textRight, {fontWeight: 'bold'}]}>></Text>
                        </View>
                    );
                    }
                }
                ></ListItem>  
    }

    render() {
        var middleLine = this._renderMiddleLine();
        // alert(middleLine);

        // var firstSpace = this._renderGroupSpaceFrist();
        // var otherSpace = this._renderGroupSpaceOthers();


        var lines = this.props.data.map((elem, index) => {
            // var line = index === this.props.data.length - 1 ?  null : middleLine;
            return (
                <View>
                {
                    elem.type === ListItemTypes.T_F ? this.LineT_F(elem) :
                    elem.type === ListItemTypes.T_T ? this.LineT_T(elem) : 
                    elem.type === ListItemTypes.T_SPF ? this.lineT_SPF(elem) : null 
                }

                {
                    index === this.props.data.length - 1 ?  null:
                    <View style={{backgroundColor: '#fff'}}>
                        <View style={ListItemStyles.middleLine}>
                        </View>
                    </View>
                }
                </View>
            );
        });

        return (
            <View>
                {
                    this.firstGroup ?
                    <View style={ListItemStyles.itemGroupSpaceFirst}>
                    </View>
                    :
                    <View style={ListItemStyles.itemGroupSpaceOthers}>
                    </View>
                }

                {lines}
            </View>
        );
    }
}