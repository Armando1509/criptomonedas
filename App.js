import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Header from './components/Header';
import Formulario from './components/Formulario';

const App = () => {
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
        <Formulario/>
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