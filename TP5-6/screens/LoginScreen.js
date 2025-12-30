/**
 * Écran de connexion
 * 
 * Interface utilisateur simple permettant l'authentification
 * par saisie de nom d'utilisateur
 */

import { useState, useContext } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  KeyboardAvoidingView,
  Platform 
} from "react-native";
import { AuthContext } from "../context/AuthContext";

/**
 * Composant LoginScreen
 * Gère l'interface de connexion utilisateur
 */
export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const { authenticateUser } = useContext(AuthContext);

  /**
   * Gère la soumission du formulaire de connexion
   */
  const handleLogin = () => {
    if (username.trim()) {
      authenticateUser(username.trim());
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>TaskFlow</Text>
        <Text style={styles.subtitle}>Gérez vos tâches efficacement</Text>

        <TextInput
          style={styles.input}
          placeholder="Entrez votre nom d'utilisateur"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.loginButtonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#6200ee",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: "center",
    color: "#666",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    padding: 14,
    borderRadius: 8,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#6200ee",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
}); 