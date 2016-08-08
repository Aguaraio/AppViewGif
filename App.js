import React, {Component} from 'react';
import {View, Navigator} from 'react-native';
//import { Router, Scene } from 'react-native-router-flux';
//import ModalExample from './ModalExample';
import BarcodeScannerApp from './BarcodeScanner';
import ViewImage from './ViewImage';

class App extends Component{
  renderScene (route, navigator) {
      if (route.name === 'BarcodeScanner') {
        return <BarcodeScannerApp navigator={navigator} {...route.passProps} />
      }
      if (route.name === 'ViewImage') {
        return <ViewImage navigator={navigator} {...route.passProps} />
      }
    }

    configureScene (route) {
      return Navigator.SceneConfigs.FloatFromBottom
    }

    render () {
      return (
        <Navigator
          configureScene={this.configureScene.bind(this)}
          style={{ flex: 1, backgroundColor: 'white' }}
          initialRoute={{ name: 'BarcodeScanner' }}
          renderScene={this.renderScene.bind(this)} />
      )
    }
}
export default App
