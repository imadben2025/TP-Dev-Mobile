/**
 * TaskFlow - Application principale
 * 
 * Point d'entrée de l'application TaskFlow qui gère:
 * - La configuration du store Redux pour la gestion d'état globale
 * - Le contexte d'authentification pour la gestion des utilisateurs
 * - La navigation conditionnelle basée sur l'état de connexion
 */

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { useContext } from "react";

import AuthProvider, { AuthContext } from "./context/AuthContext";
import MainDrawerNavigator from "./navigation/AppDrawer";
import LoginScreen from "./screens/LoginScreen";
import { store } from "./store/store";

/**
 * Navigateur racine qui détermine quel écran afficher
 * en fonction de l'état d'authentification de l'utilisateur
 */
function RootNavigator() {
  const { currentUser } = useContext(AuthContext);
  
  // Affiche le drawer principal si connecté, sinon l'écran de connexion
  return currentUser ? <MainDrawerNavigator /> : <LoginScreen />;
}

/**
 * Composant principal de l'application
 * Configure les providers nécessaires dans le bon ordre
 */
export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}