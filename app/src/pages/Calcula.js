import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Realm from 'realm';
import HomeScreen from "./HomeScreen";
let realm;

export default class Calcular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [],
        };
        realm = new Realm({ path: 'UserDatabase.realm' });
        var user_details = realm.objects('user_details');
        this.state = {
            FlatListItems: user_details,
        };
    }
    ListViewItemSeparator = () => {
        return (
            <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
        );
    };
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.FlatListItems}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.View}>

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
    }
});


Calcular.navigationOptions = {
    title: 'calcula',
};
