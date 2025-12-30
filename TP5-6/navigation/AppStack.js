/**
 * Navigation Stack pour les tâches
 * 
 * Gère la navigation entre la liste des tâches
 * et l'écran de détails d'une tâche
 */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskListScreen from "../screens/TodoListScreen";
import TaskDetailsScreen from "../screens/TodoDetailsScreen";

const Stack = createNativeStackNavigator();

/**
 * Composant TasksNavigator
 * Configure le stack navigator pour les écrans de tâches
 */
export default function TasksNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6200ee',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Stack.Screen 
        name="TaskList" 
        component={TaskListScreen}
        options={{
          headerShown: false, // AppBar personnalisé utilisé à la place
        }}
      />
      <Stack.Screen 
        name="Details" 
        component={TaskDetailsScreen}
        options={{
          title: 'Détails de la tâche',
        }}
      />
    </Stack.Navigator>
  );
} 