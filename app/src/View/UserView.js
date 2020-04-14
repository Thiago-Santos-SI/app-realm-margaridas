import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToastAndroid,
} from 'react-native';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { deleteUserById } from '../Controllers/Controller';
import HomeScreen from "../pages/HomeScreen";


class UserView extends Component<Props> {

    constructor(props: Props) {
        super(props);

        this.state = {
            hero: this.props.hero,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ hero: nextProps.hero });
    }

    goToScreenUpdateHero = () => {
        if (!this.state.hero || !this.props.navigation)
            return;

        const { navigate } = this.props.navigation;
        navigate('HomeScreen', { hero: this.state.hero.clone(), event: this.props.event })
    };

    deleteUserById = () => {
        if (!this.state.hero)
            return;

        let deleteHeroMsg = deleteUserById(this.state.hero);
        ToastAndroid.show(deleteHeroMsg.message, ToastAndroid.SHORT);
        if (deleteHeroMsg.result) {
            if (this.props.event)
                this.props.event.emit('onDeleteHero');
        }
    }
}
