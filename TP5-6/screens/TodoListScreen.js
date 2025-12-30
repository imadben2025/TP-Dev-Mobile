/**
 * Écran de liste des tâches
 * 
 * Affiche toutes les tâches de l'utilisateur
 * et permet la navigation vers les détails
 */

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTask } from "../store/todosSlice";
import AppBar from "../components/AppBar";

/**
 * Composant TaskListScreen
 * Gère l'affichage de la liste complète des tâches
 */
export default function TaskListScreen({ navigation }) {
  const tasksList = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  /**
   * Initialisation: charge des tâches exemple au premier rendu
   * Dans une vraie app, ces données viendraient d'une API
   */
  useEffect(() => {
    dispatch(addTask({ 
      id: Date.now(), 
      title: "Terminer le projet TaskFlow",
      completed: false 
    }));
    dispatch(addTask({ 
      id: Date.now() + 1, 
      title: "Réviser les concepts React Native",
      completed: false 
    }));
    dispatch(addTask({ 
      id: Date.now() + 2, 
      title: "Publier sur GitHub",
      completed: false 
    }));
  }, []);

  /**
   * Navigation vers l'écran de détails d'une tâche
   * @param {Object} task - La tâche sélectionnée
   */
  const navigateToTaskDetails = (task) => {
    navigation.navigate("Details", task);
  };

  /**
   * Rendu d'un élément de la liste
   */
  const renderTaskItem = ({ item }) => (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => navigateToTaskDetails(item)}
      activeOpacity={0.7}
    >
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <AppBar title="Mes Tâches" />
      <FlatList
        data={tasksList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTaskItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Aucune tâche pour le moment</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    padding: 16,
  },
  taskItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  taskTitle: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  arrow: {
    fontSize: 24,
    color: "#6200ee",
    fontWeight: "bold",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#999",
  },
});