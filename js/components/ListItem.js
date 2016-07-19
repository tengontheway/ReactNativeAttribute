/**
 * Created by qx on 7/18/16.
 * ListView的属性行
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class ListItem extends Component {
    static propTypes = {
        onPress: React.PropTypes.func,
        clickable: React.PropTypes.bool,      // default is true
        onRenderLineLeft: React.PropTypes.func,
        onRenderLineRight: React.PropTypes.func,
        title: React.PropTypes.string.isRequired,
        subTitle: React.PropTypes.string,
        marginLeft: React.PropTypes.number,
        marginRight: React.PropTypes.number,
        height: React.PropTypes.number,
    }

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isClicking: false
        };

        if (typeof(this.props.clickable) === "undefined") {
            this.clickable = true;
        } else {
            this.clickable = this.props.clickable;
        }
      }

    _onPress() {
        if (this.clickable && this.props.onPress) {
            this.props.onPress();
        }
    }

    onPressIn() {
        this.setState({
            isClicking: true
        });
    }

    onPressOut() {
        this.setState({
            isClicking: false
        });
    }

    _renderLineLeft() {

        return (
            <View>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }

    _renderLineRight() {
        return (
            <View>
                <Text style={{color: '#C7C7C7', fontWeight: 'bold',}}>></Text>
            </View>
        );
    }
    renderLine() {
        var left = this.props.onRenderLineLeft ? this.props.onRenderLineLeft() : this._renderLineLeft();
        var right = this.props.onRenderLineRight ? this.props.onRenderLineRight() : this._renderLineRight();
        return (
            <View style={[styles.gMarginLeft]}>
                <View style={[styles.left, this.props.marginLeft? {marginLeft: this.props.marginLeft} : null]}>
                {left}
                </View>
                <View style={{flex:1}}></View>
                <View style={[styles.right, this.props.marginRight? {marginRight: this.props.marginRight} : null]}>
                    {right}
                </View>
            </View>
        );
    }

    render() {
        var line = this.props.onRenderLine ? this.props.onRenderLine() : this.renderLine();
        return (
            <TouchableOpacity
                activeOpacity = {1}
                onPress={()=>this._onPress() }
                onPressIn={()=>this.onPressIn() }
                onPressOut={()=>this.onPressOut() } >
                    <View style={[styles.background, 
                        this.props.height && this.props.height >= 0? {height: this.props.height}:null, 
                        this.state.isClicking && this.clickable? {backgroundColor:'#D9D9D9'}:{backgroundColor:'#fff'}]}>
                        {line}
                    </View>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    background: {
        height: 40,
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
    },
    title: {
    }
});

