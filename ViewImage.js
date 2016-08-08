import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native'

let windowWidth = Dimensions.get('window').width

class ViewImage extends Component {
  constructor(props) {
    super(props);
    //this.editMyData = this.editMyData.bind(this);
    this.state = {};
  }
  propTypes:{
    source: React.propTypes.string
  }



  render () {
    return (
      <View style={styles.container}>
        <Image source={{uri:this.props.source}} style={{width: windowWidth, height: windowWidth}}/>
        <View style={styles.statusBar}>
          <TouchableHighlight onPress={this.props.closeModal.bind(this)} >
            <Text>
              VOLVER
            </Text>
          </TouchableHighlight>
        </View>
      </View>
		)
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

export default ViewImage
