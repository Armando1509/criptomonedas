import {Image, StyleSheet, Text, View, ScrollView, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';

const App = () => {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptoMoneda] = useState('');
  const [consultarAPI, guardarConsultarAPI] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false)

  useEffect(() => {
    const cotizarCriptoMoneda = async () => {
      if (consultarAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda},ETH&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        guardarCargando(true)
        //Ocultar el sppiner y mostrar resultado
        setTimeout(() => {
          guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);

        guardarConsultarAPI(false);
        guardarCargando(false)

        }, 3000);
      }
    };
    cotizarCriptoMoneda();
  }, [consultarAPI]);
// mostrar el spinner
const componente = cargando? <ActivityIndicator size='large' color='#5e49e2' /> : <Cotizacion resultado={resultado} />
  return (
    <>
      <ScrollView>
        <View>
          <Header />
          <Image
            style={styles.imagen}
            source={require('./img/cryptomonedas.png')}
          />
        </View>
        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            guardarMoneda={guardarMoneda}
            criptomoneda={criptomoneda}
            guardarCriptoMoneda={guardarCriptoMoneda}
            consultarAPI={consultarAPI}
            guardarConsultarAPI={guardarConsultarAPI}
          />
        </View>
        <View style={{marginTop: 40}}>

        {componente}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
