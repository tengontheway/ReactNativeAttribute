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
  cmSmallIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  cmMiddleIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
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
  },
  // 对象组的首间隔(从ScrollView到第一个元素)
  itemGroupSpaceFirst: {
    marginTop: 24,
  },
  itemGroupSpaceOthers: {
    marginTop: 32,
  }
});

var ListItemTypes = {
  T_F : 1,    //Text                    >
  T_T : 2,    //Text              Text  
  T_TF : 3,   //Text              Text  >
  T_SPF : 4,   //Text             SmallPic   >
  T_MPF : 5,   //Text             MiddlePic   >
  PT_F : 6,   //PicText                 >
};


export default ListItemStyles;
export {ListItemTypes};