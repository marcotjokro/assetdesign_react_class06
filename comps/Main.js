import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage } from '.././redux/actions';

import Settings from './Settings';

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Settings />
      </View>
    );
  }
}

function  grabVar(state){
	return {
		mainPage: state.Settings.page
	}
}

export default connect(grabVar)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});