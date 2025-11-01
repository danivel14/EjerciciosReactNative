import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';

interface UserState {
  nombre: string;
  edad: string; 
}

export default function Ejercicio1() {
  const [usuario, setUsuario] = useState<UserState>({ nombre: '', edad: '' });

  // para cambios en el TextInput del nombre
  const handleNombreChange = (text: string) => {
    setUsuario((prevUsuario) => ({ ...prevUsuario, nombre: text }));
  };

  // maneja el cambio en el TextInput de la edad
  const handleEdadChange = (text: string) => {
    if (text === '' || /^\d+$/.test(text)) { // Puede ser vacio o solo dígitos
      setUsuario((prevUsuario) => ({ ...prevUsuario, edad: text }));
    } else {
      Alert.alert('Error de entrada', 'La edad debe ser un valor numérico.');
    }
  };

  // Para validar edad y que no este vacia
  const edadEsValida: boolean = usuario.edad !== '' && /^\d+$/.test(usuario.edad);
  const nombreEstaVacio: boolean = usuario.nombre.trim() === '';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manejo de estado con useState</Text>

      // dos TextInput para escribir nombre y edad. 
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        value={usuario.nombre}
        onChangeText={handleNombreChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese su edad"
        keyboardType="numeric" 
        value={usuario.edad}
        onChangeText={handleEdadChange}
      />

     // Muestra el mensaje condicionalmente
      {!nombreEstaVacio && edadEsValida ? (
        <Text style={styles.message}>
          Hola, {usuario.nombre}. Tienes {usuario.edad} años.
        </Text>
      ) : (
        <Text style={styles.placeholderMessage}>Por favor, ingrese su nombre y una edad válida.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '90%',
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  message: {
    fontSize: 18,
    marginTop: 15,
    textAlign: 'center',
    color: '#28a745',
    fontWeight: '500',
  },
  placeholderMessage: {
    fontSize: 16,
    marginTop: 15,
    textAlign: 'center',
    color: '#6c757d',
  },
});