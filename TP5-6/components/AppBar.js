/**
 * Composant AppBar
 * 
 * Barre d'application personnalisée affichant le titre
 * et un bouton de déconnexion rapide
 */

import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

/**
 * Barre de navigation supérieure
 * @param {Object} props - Propriétés du composant
 * @param {string} props.title - Titre à afficher dans la barre
 */
export default function AppBar({ title }) {
  const { logoutUser } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ backgroundColor: '#6200ee' }}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity 
          onPress={logoutUser}
          activeOpacity={0.7}
          style={styles.logoutButton}
        >
          <Text style={styles.logoutText}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#6200ee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  logoutButton: {
    padding: 8,
  },
  logoutText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});