import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, TextInput } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage } from '.././redux/actions';
import { ChangeItems } from '.././redux/actions';

class Settings extends React.Component {
	
	state = {
		text: "Hi"
	}
	
	componentWillMount=async()=>{
		try {
			var name = await AsyncStorage.getItem("Name");
			this.setState({
				text: name
			})
		} catch (error) {
			alert(error);
		} 
	}
	
	handleGetItems=async()=>{
		var resp = await fetch("http://testserver1234.herokuapp.com/getItems");
		var arrays = await resp.json();
		console.log(arrays);

		/*
			No Async/Await:
			fetch("http://testserver1234.herokuapp.com/getItems").then((resp)=>{
				return resp.json();
			}).then((json)=>{
				console.log(json);
			})
		*/
		
		//Updating UI with Information
		this.props.dispatch(ChangeItems(arrays));
		
		/*
			this.setState({
				items: arrays
			})
		*/
		
	}
	
	handleTextInput=async(text)=>{
		try {
			await AsyncStorage.setItem("Name", text);
		} catch (error) {
			alert(error);
		}
	}
	
	render() {
    
		var allItems = this.props.mainItems.map((obj, index)=>{
			return (
				<View key={index}>
					<Text>{obj.title} - {obj.desc}</Text>
					<Text>{obj.x} - {obj.y}</Text>
				</View>
			)
		})
		
		return (
      <View>
				<TextInput
					placeholder="Name"
					onChangeText={this.handleTextInput}
					/>
				<Button 
					title="Get Items"
					onPress={this.handleGetItems}
					/>
				<Text>{this.state.text}</Text>
				{allItems}
			</View>
    );
  }
}

function grabVar(state){
	return {
		mainPage: state.Settings.page,
		mainItems: state.Settings.items
	}
}

export default connect(grabVar)(Settings);