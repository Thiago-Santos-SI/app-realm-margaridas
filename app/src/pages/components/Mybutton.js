/*Custom Button*/
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
      <Icon style={styles.icon}>{props.name}</Icon>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#7802BC',
    color: '#ffffff',
    padding: 5,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 4
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
  },
  icon:{

    color:"#FFF"
  }
});
export default Mybutton;
