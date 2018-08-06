import React from 'react';
import {NativePropsBuilder, withStyleLoader} from 'native-components-infra';
import s from './css/resetStyles.css';

class App extends React.Component {
    
    
  render() {
      const styleParams = this.props.style.styleParams;
      const {height, width} = this.props.dimensions;
      const compStyle = {
          backgroundColor: _.get(styleParams, 'colors._backgroundColor.value'),
          color: _.get(styleParams, 'colors._titleColor.value'),
          width,
          height,
          fontSize: '20px'
      };
      console.log(this.props);
      return (<div style={compStyle}> Cart: {this.props.count} </div>);
  }
}

export default NativePropsBuilder(App);
