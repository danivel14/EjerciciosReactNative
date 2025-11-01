import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function Ejercicio2() {
  // Inicializa el contador en 0.
  const [contador, setContador] = useState<number>(0);

  // Muestra un mensaje en la consola cada vez que el contador cambie.
  useEffect(() => {
    console.log(`El contador ha cambiado a: ${contador}`);

    // Si el contador es múltiplo de 5, muestra el texto
    if (contador > 0 && contador % 5 === 0) {
      Alert.alert('¡Atención!', `Ha alcanzado un múltiplo de 5 (${contador})`);
    }
  }, [contador]); // se ejecuta cada vez que contador cambia

  // incrementa el contador
  const handlePress = () => {
    setContador((prevContador) => prevContador + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador con useState y useEffect</Text>
      <Text style={styles.counterText}>Contador: {contador}</Text>

      // botón que incremente el contador en 1 cada vez que se presione. 
      <Button title="Incrementar Contador" onPress={handlePress} color="#007bff" />

      {contador > 0 && contador % 5 === 0 ? (
        <Text style={styles.multipleMessage}>¡Múltiplo de 5 alcanzado!</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e1f5ffff', 
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
    color: '#3c6b66ff', 
  },
  counterText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  multipleMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c87843ff', 
    marginTop: 15,
    textAlign: 'center',
  },
});