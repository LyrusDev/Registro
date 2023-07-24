import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, Image, View, Alert } from 'react-native';

export default function App() {
  const mensaje = () => {
    Alert.alert('Alerta', 'Los datos han sido registrados');
  }
  
  return (
    <ImageBackground style={styles.container} source={require('./assets/img/fondo.jpg')}>

      <Text style={styles.txtTitulo}>Formulario de registro</Text>

      {/* Los View sirven como contenedores, simulando un div de HTML */}
      <View style={styles.containerForm}>
        <View style={styles.containerForms}>
          <Text style={styles.txtForm}>Nombre:</Text>
          <TextInput style={styles.inpForm}
            placeholder='Ingrese su nombre'
            placeholderTextColor={'#fff'}
            
          />
        </View>

        <View style={styles.containerForms}>
          <Text style={styles.txtForm}>Apellido:</Text>
          <TextInput style={styles.inpForm}
            placeholder='Ingrese su apellido'
            placeholderTextColor={'#fff'}
          />
        </View>

        <View style={styles.containerForms}>
          <Text style={styles.txtForm}>Correo:</Text>
          <TextInput style={styles.inpForm}
            placeholder='Ingrese su correo'
            placeholderTextColor={'#fff'}
            textContentType='emailAddress'
          />
        </View>

        <View style={styles.containerForms}>
          <Text style={styles.txtForm}>Contraseña:</Text>
          <TextInput style={styles.inpForm}
            placeholder='Ingrese su contraseña'
            placeholderTextColor={'#fff'}
            textContentType='newPassword'
          />
        </View>

        <View style={styles.containerForms}>
          <TouchableOpacity style={styles.btn} onPress={mensaje}>
            <Text style={styles.txtBtn}>Enviar</Text>
            <Image
              source={require('./assets/img/send.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  txtTitulo: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 25
  },

  containerForm: {
    flexDirection: 'column',
    gap: 20
  },

  containerForms: {
    flexDirection: 'row',
    // gap: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtForm: {
    color: '#fff',
    width: '20%',
    marginRight: 10
  },

  inpForm: {
    borderColor: '#9626f7',
    borderWidth: 1,
    borderRadius: 7,
    color: '#fff',
    height: 36,
    width: '56%',
    paddingLeft: 10
  },

  btn: {
    backgroundColor: '#9626f7',
    borderRadius: 7,
    height: 40,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5
  },

  txtBtn: {
    fontSize: 16
  }

});
