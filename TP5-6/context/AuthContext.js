/**
 * Contexte d'authentification
 * 
 * Gère l'état global de l'authentification utilisateur
 * dans toute l'application via le Context API de React
 */

import { createContext, useState } from "react";

// Création du contexte d'authentification
export const AuthContext = createContext();

/**
 * Provider d'authentification
 * Fournit les méthodes de connexion/déconnexion à toute l'application
 * 
 * @param {Object} props - Les propriétés du composant
 * @param {React.ReactNode} props.children - Les composants enfants
 */
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  /**
   * Connecte un utilisateur en définissant son nom d'utilisateur
   * @param {string} username - Le nom d'utilisateur à connecter
   */
  const authenticateUser = (username) => {
    setCurrentUser({ username });
  };

  /**
   * Déconnecte l'utilisateur actuel en réinitialisant l'état
   */
  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        currentUser, 
        authenticateUser, 
        logoutUser 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
} 