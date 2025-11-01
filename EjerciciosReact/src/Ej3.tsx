import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Ejercicio3() {
  // estado hora para almacenar la hora actual.
  const [hora, setHora] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      setHora(new Date()); // Actualiza la hora cada segundo
    }, 1000);

    return () => {
      clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar y limpiar al desmontar

  // para formatear la hora a HH:mm:ss
  const formatTime = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reloj en tiempo real</Text>
      // formato HH:mm:ss 
      <Text style={styles.clockText}>{formatTime(hora)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f8f0', 
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
    marginBottom: 30,
    color: '#218838', 
  },
  clockText: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});