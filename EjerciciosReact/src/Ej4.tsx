import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function Ejercicio4() {
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setCargando(false); // Cambia el estado a false después de 3 seg
    }, 3000); //  = 3 segundos en miliseg

    // Limpia el temporizador si  se desmonta antes de que termine el setTimeout
    return () => clearTimeout(timer);
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulación de carga</Text>
      // Si cargando === true, muestra "Cargando...".
      // Si cargando === false, muestra "Bienvenido a la aplicación". 
      {cargando ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007bff" />
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      ) : (
        <Text style={styles.welcomeText}>¡Bienvenido a la aplicación!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff0f5', 
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    minHeight: 180, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#cc3366', 
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 22,
    marginTop: 15,
    color: '#555',
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#28a745',
    textAlign: 'center',
  },
});