import React, { Component } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Vibration,
  View
} from 'react-native';
//import {Actions} from 'react-native-router-flux';
import BarcodeScanner from 'react-native-barcodescanner';
import ViewImage from './ViewImage';
var qrString = '';
class BarcodeScannerApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      barcode: '',
      cameraType: 'back',
      text: 'QR GYM',
      torchMode: 'off',
      type: 'QR_CODE',
      viewFinderHeight:200,
      viewFinderWidth:200,
      timePassed:false
    };
  }

//componentDidMount(){
//  this.setTimeout( ()=> {
//    this.setTimePassed();
//  },2000);
//}

  setTimePassed(){
    this.setState({timePassed:true});
  }

  renderCamera(){
    if(this.state.timePassed){
      return(
        <View style={styles.container}>
          <View style={styles.statusBar}>
            <Text style={styles.statusBarText}>Cargando...</Text>
          </View>
        </View>

      );
    }else{
      return(
        <View style={styles.container}>
          <BarcodeScanner
            onBarCodeRead={this.barcodeReceived.bind(this)}
            style={{ flex: 1 }}
            torchMode={this.state.torchMode}
            cameraType={this.state.cameraType}
            viewFinderHeight={this.state.viewFinderHeight}
            viewFinderWidth={this.state.viewFinderWidth}
          />
          <View style={styles.statusBar}>
            <Text style={styles.statusBarText}>{this.state.text}</Text>
          </View>
        </View>
      );
    }
  }



  _closeModal(){
    this.props.navigator.pop(); //REVISAR BIEN ACá
    qrString = '';

    //this.setTimeout( ()=> {
      //this.setTimePassed();
    //},2000);
  }

  barcodeReceived(e) {
    if ((e.data !== qrString || e.data !== this.state.barcode) && e.type == this.state.type)
    {
      Vibration.vibrate();

      this.setState({
        barcode: e.data,
        text: `${e.data}`,
        type: e.type,
      });

      this.props.navigator.push({
            name: 'ViewImage',
            passProps: {
              closeModal: this._closeModal,
              source:e.data
            }
          });
          qrString = e.data;

          console.log("CARGADO"); //Debug en chrome
          console.log(e.type); //Debug en chrome
    }
  }

  render() {
    return (
      this.renderCamera()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarText: {
    fontSize: 20,
  },

});

export default BarcodeScannerApp
