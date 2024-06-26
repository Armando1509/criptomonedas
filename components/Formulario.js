import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, TouchableHighlight, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Formulario = ({
  moneda,
  guardarMoneda,
  criptomoneda,
  guardarCriptoMoneda,
  guardarConsultarAPI,
  consultarAPI,
}) => {
  const [criptomonedas, guardarCriptoMonedas] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);
      guardarCriptoMonedas(resultado.data.Data);
    };
    consultarApi();
  }, []);

  const obtenerMoneda = moneda => {
    guardarMoneda(moneda);
  };

  const obtenerCriptoMoneda = cripto => {
    guardarCriptoMoneda(cripto);
  };
  const cotizarPrecio = () => {
    if (moneda.trim() === '' || criptomoneda.trim() === '') {
      mostrarAlerta();
      return;
    }
    guardarConsultarAPI(true)
  };
  const mostrarAlerta = () => {
    Alert.alert('Error...', 'Ambos campos son obligatorios', [{text: 'OK'}]);
  };
  return (
    <>
      <View>
        <Text style={styles.label}>Moneda</Text>
        <Picker
          selectedValue={moneda}
          onValueChange={moneda => obtenerMoneda(moneda)}>
          <Picker.Item label="-- Selecione --" value="" />
          <Picker.Item label="Dolar Americano" value="USD" />
          <Picker.Item label="Peso Mexicano" value="MXN" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Libra Esterlina" value="GBP" />
        </Picker>
        <Text style={styles.label}>Criptomoneda</Text>
        <Picker
          selectedValue={criptomoneda}
          onValueChange={cripto => obtenerCriptoMoneda(cripto)}>
          <Picker.Item label="- Seleccione -" value="" />
          {criptomonedas.map(cripto => (
            <Picker.Item
              key={cripto.CoinInfo.Id}
              label={cripto.CoinInfo.FullName}
              value={cripto.CoinInfo.Name}
            />
          ))}
        </Picker>
        <TouchableHighlight
          onPress={() => cotizarPrecio()}
          style={styles.btnCotizar}>
          <Text style={styles.textoCotizar}>Cotizar</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
  },
  btnCotizar: {
    backgroundColor: '#5e49e2',
    padding: 10,
    marginTop: 20,
  },
  textoCotizar: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Formulario;
