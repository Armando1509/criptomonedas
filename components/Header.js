import React from 'react';
import {Text, StyleSheet, Platorm, View, Platform} from 'react-native';

const Header = () => {
  return (
    <>
      <View>
        <Text style={styles.encabezado}>Criptomonedas</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    fontSize: 25,
    backgroundColor: '#5e49e2',
    paddingBottom: 10,
    textAlign: 'center',
    color: '#fff',
    marginBottom:30
  },
});

export default Header;
