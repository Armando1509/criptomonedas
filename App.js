import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';


const App = () => {
  const [moneda, guardarMoneda] = useState('');
    const [criptomoneda, guardarCriptoMoneda] = useState('');
    const [consultarAPI, guardarConsultarAPI] = useState(false)
    const [resultado, guardarResultado] = useState({})

    useEffect(()=>{
      const cotizarCriptoMoneda = async () =>{
        if (consultarAPI){
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda},ETH&tsyms=${moneda}`
          const resultado = await axios.get(url)
          guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
         
          guardarConsultarAPI(false)
        }
      }
      cotizarCriptoMoneda()
    },[consultarAPI])


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
        <Cotizacion
          resultado={resultado}
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
