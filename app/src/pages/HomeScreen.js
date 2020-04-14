import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Mybutton from './components/Mybutton';
import Realm from 'realm';
import ViewAllUser from "./ViewAllUser";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container } from './styles'

import User from "../model/User";
let realm;

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    super(props);
    realm = new Realm({ path: 'UserDatabase.realm', schema: [User.schema],});

  }


  render() {
    return (

      <Container
        style={styles.View
        }>

          <Mybutton
          title="Adicionar material"
          customClick={() => this.props.navigation.navigate('Register')}
        />
        <Mybutton
          title="Atualizar material"
          customClick={() => this.props.navigation.navigate('Update')}
        />
        <Mybutton
          title="Ver materiais"
          customClick={() => this.props.navigation.navigate('ViewAll')}
        />
        <Mybutton
          title="Deletar produtos"
          customClick={() => this.props.navigation.navigate('Delete')}
        />

          <Mybutton
              title="Calcular preço de produto"
              customClick={() => this.props.navigation.navigate('calcula')}
          />

        <ViewAllUser>

        </ViewAllUser>
      </Container>



    );
  }
}

HomeScreen.navigationOptions = {
    title: 'HomeScreen',
};

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: '#B25AE5',
        flexDirection: 'column',
    },
    Text: {
        alignItems:'center',
        fontSize: 25,
        color: '#000000',
        fontWeight:'bold'
    }
});

export default HomeScreen;
