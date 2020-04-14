import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';


export const Container = styled(LinearGradient).attrs({
    colors:['#7159c1', '#9b49c1'],
    start:{x: 0, y: 0},
    end:{x: 1, y: 1},
})`
  flex: 1;
`;
