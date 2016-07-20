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

     _renderGroupSpaceFrist() {
        return <View style={ListItemStyles.itemGroupSpaceFirst}>
        </View>
    }

    _renderGroupSpaceOthers() {
        return <View style={ListItemStyles.itemGroupSpaceOthers}>
        </View>
    }

    LineT_F(elem) {
        return <ListItem 
          title={elem.title}
          height={elem.height}
          clickable={elem.clickable}
          onPress={elem.onPress}
        ></ListItem>
    }
    LineT_T(elem) {
        return <ListItem 
          title={elem.title}
          height={elem.height}
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

    LineT_TF(elem) {
        return <ListItem 
          title={elem.title}
          height={elem.height}
          clickable={elem.clickable}
          onPress={elem.onPress}
          onRenderLineRight={
            ()=> {
              return (
                 <View style={ListItemStyles.lineContainer}>
                    <Text style={[ListItemStyles.textRight, ListItemStyles.listItemPaddingRight]}>{elem.subTitle}</Text>
                    <Text style={[ListItemStyles.textRight, {fontWeight: 'bold'}]}>></Text>
                </View>
              );
            }
          }
        ></ListItem>
    }

    lineT_PF(elem, type) {
        return <ListItem 
                title={elem.title}
                height={elem.height}
                clickable={elem.clickable}
                onPress={elem.onPress}
                onRenderLineRight={
                    ()=> {
                    return (
                        <View style={ListItemStyles.lineContainer}>
                        <View style={ListItemStyles.listItemPaddingRight}>
                            <Image style={[type === 'small' ? ListItemStyles.cmSmallIcon : ListItemStyles.cmMiddleIcon]} source={elem.img} />
                        </View>
                        <Text style={[ListItemStyles.textRight, {fontWeight: 'bold'}]}>></Text>
                        </View>
                    );
                    }
                }
                ></ListItem>  
    }

    linePT_F(elem) {
        return <ListItem 
                title={elem.title}
                height={elem.height}
                clickable={elem.clickable}
                onPress={elem.onPress}
                onRenderLineLeft={
                    ()=> {
                    return (
                        <View style={ListItemStyles.lineContainer}>
                        <Image style={ListItemStyles.cmSmallIcon} source={elem.img} />
                        <Text style={ListItemStyles.listItemPaddingLeft}>{elem.title}</Text>
                        </View>
                    );
                    }
                }
                ></ListItem>  
    }

    lineCustom(elem) {
        return <ListItem 
                title={elem.title}
                height={elem.height}
                clickable={elem.clickable}
                onPress={elem.onPress}
                onRenderLineLeft={elem.onRenderLineLeft}
                onRenderLineRight={elem.onRenderLineRight}
                ></ListItem>
    }

    render() {
        // 所有行={行 + 分割线}
        var rows = this.props.data.map((elem, index) => {
            return (
                <View key={index}>
                {
                    elem.type === ListItemTypes.T_F ? this.LineT_F(elem) :
                    elem.type === ListItemTypes.T_T ? this.LineT_T(elem) : 
                    elem.type === ListItemTypes.T_TF ? this.LineT_TF(elem) :
                    elem.type === ListItemTypes.T_SPF ? this.lineT_PF(elem, 'small') : 
                    elem.type === ListItemTypes.T_MPF ? this.lineT_PF(elem, 'middle') : 
                    elem.type === ListItemTypes.PT_F ? this.linePT_F(elem) : 
                    elem.type === ListItemTypes.CUSTOM ? this.lineCustom(elem) :null 
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

        // 间距 + 所有行
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

                {rows}
            </View>
        );
    }
}