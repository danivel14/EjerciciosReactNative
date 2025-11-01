import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';

import Ejercicio1 from './src/Ej1';
import Ejercicio2 from './src/Ej2';
import Ejercicio3 from './src/Ej3';
import Ejercicio4 from './src/Ej4';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.mainTitle}>Ejercicios de React Native</Text>

        <Ejercicio1 />
        <View style={styles.separator} />
        <Ejercicio2 />
        <View style={styles.separator} />
        <Ejercicio3 />
        <View style={styles.separator} />
        <Ejercicio4 />
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollViewContent: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    alignItems: 'center', 
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 30,
    textAlign: 'center',
  },
  separator: {
    height: 30, 
    backgroundColor: 'transparent', 
    marginVertical: 10, 
  },
});
