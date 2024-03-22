import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';


import Header from './components/Header';
import Formulario from './components/Formulario';


const App = () => {
  const [moneda, guardarMoneda] = useState('');
    const [criptomoneda, guardarCriptoMoneda] = useState('');
    const [consultarAPI, guardarConsultarAPI] = useState(false)
  return (
    <>
      <View>
        <Header/>
        <Image
          style={styles.imagen}
          source={require('./img/cryptomonedas.png')}
        />
      </View>
      <View style={styles.contenido} >
        <Formulario
          moneda={moneda}
          guardarMoneda={guardarMoneda}
          criptomoneda={criptomoneda}
          guardarCriptoMoneda={guardarCriptoMoneda}
          consultarAPI={consultarAPI}
          guardarConsultarAPI={guardarConsultarAPI}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imagen:{
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },
  contenido:{
    marginHorizontal: '2.5%'
  }
});

export default App;
