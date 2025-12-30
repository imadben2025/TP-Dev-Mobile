/**
 * Navigation Drawer principale
 * 
 * Fournit un menu latéral pour naviguer entre
 * les différentes sections de l'application
 */

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";
import TasksNavigator from "./AppStack";
import ProfileScreen from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

/**
 * Composant MainDrawerNavigator
 * Configure le drawer avec toutes les routes principales
 */
export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#6200ee',
        drawerInactiveTintColor: '#666',
        headerShown: false,
      }}
    >
      <Drawer.Screen 
        name="Tasks" 
        component={TasksNavigator}
        options={{
          title: 'Mes Tâches',
          drawerIcon: () => <Text style={{fontSize: 18}}>📝</Text>,
        }}
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          title: 'Mon Profil',
          drawerIcon: () => <Text style={{fontSize: 18}}>👤</Text>,
          headerShown: true,
        }}
      />
    </Drawer.Navigator>
  );
} 