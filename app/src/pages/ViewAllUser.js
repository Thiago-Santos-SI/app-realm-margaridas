import React from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

import Realm from 'realm';
//import IconButton from '@material-ui/core/IconButton';
//import { IconButton } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Icon from "react-native-vector-icons/FontAwesome";
import {Container} from "./styles";
import { deleteUserById } from '../Controllers/Controller'
import HomeScreen from "./HomeScreen";

let realm;

export default class ViewAllUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
      this.state = {
          hero: this.props.hero,
      };
    realm = new Realm({ path: 'UserDatabase.realm' });
    var user_details = realm.objects('user_details');
    this.state = {
      FlatListItems: user_details,
    };
  }

    deleteUserById = () => {
        if (!this.state.hero)
            return;

        let deleteHeroMsg = deleteUserById(this.state.hero);
        ToastAndroid.show(deleteHeroMsg.message, ToastAndroid.SHORT);
        if (deleteHeroMsg.result) {
            if (this.props.event)
                this.props.event.emit('onDeleteHero');
        }
    };




  render() {
    return (

      <View>

          <FlatList
              data={this.state.FlatListItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
            <View style={styles.View}>


                <View>
                    <Button title="Solid Button" onPress={this.deleteUserById}/>
                </View>

                <Text style={styles.Text}>ID: {item.user_id}</Text>

                <Text style={styles.Text}>Nome: {item.user_name}</Text>
              <Text style={styles.Text}>Quantidade: {item.user_contact}</Text>
              <Text style={styles.Text}>Preço: {item.user_address}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View: {
        padding: 20,
        borderRadius:4,
        backgroundColor: '#FFF',
        marginBottom: 15,
        marginTop: 15,
        marginLeft: 25,
        marginRight: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    Text: {
        fontSize:18,
        fontWeight: 'bold',
        color: '#333'
    },
    icon:{
        flex: 1,
        justifyContent: 'flex-end',
        borderRadius: 4,
        height: 30,

    },

});


ViewAllUser.navigationOptions = {
    title: 'ViewAll',
};
