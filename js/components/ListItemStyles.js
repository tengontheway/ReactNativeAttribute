import {
    StyleSheet,
    PixelRatio
} from 'react-native';
import Dimensions from 'Dimensions';

var winWidth = Dimensions.get('window').width;
var winHeight = Dimensions.get('window').height;

const ListItemStyles = StyleSheet.create({
  scrollViewBG: {
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cmIcon: {
    width: 20,
    height: 20,
  },
  lineContainer: {
      flexDirection:'row', 
      alignItems: 'center',
  },
  // 左边渲染间距
  listItemPaddingLeft: {
    paddingLeft: 5,
  },
  // 右边渲染间距
  listItemPaddingRight: {
    paddingRight: 5,
  },
  textRight: {
    color: '#C7C7C7'
  },
  middleLine: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#C7C7C7',
    marginLeft: 20,
    marginRight: 20,
  }
});

export default ListItemStyles;