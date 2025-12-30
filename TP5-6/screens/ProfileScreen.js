/**
 * Écran de profil utilisateur
 * 
 * Affiche les informations de l'utilisateur connecté
 * et permet la déconnexion
 */

import { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

/**
 * Composant ProfileScreen
 * Interface de gestion du profil utilisateur
 */
export default function ProfileScreen() {
  const { currentUser, logoutUser } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>
            {currentUser?.username?.charAt(0)?.toUpperCase() || "?"}
          </Text>
        </View>
        
        <Text style={styles.usernameLabel}>Utilisateur</Text>
        <Text style={styles.username}>{currentUser?.username}</Text>
      </View>

      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={logoutUser}
        activeOpacity={0.8}
      >
        <Text style={styles.logoutButtonText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 32,
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#6200ee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarText: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
  usernameLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  username: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#d32f2f",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
}); 