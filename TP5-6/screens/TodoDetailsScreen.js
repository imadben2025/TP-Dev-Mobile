/**
 * Écran de détails d'une tâche
 * 
 * Affiche les informations détaillées d'une tâche
 * et permet sa suppression
 */

import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { deleteTask } from "../store/todosSlice";

/**
 * Composant TaskDetailsScreen
 * Gère l'affichage et la suppression d'une tâche spécifique
 */
export default function TaskDetailsScreen({ route, navigation }) {
  const { id, title } = route.params;
  const dispatch = useDispatch();

  /**
   * Gère la suppression de la tâche avec confirmation
   */
  const handleDeleteTask = () => {
    Alert.alert(
      "Confirmer la suppression",
      `Êtes-vous sûr de vouloir supprimer "${title}" ?`,
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Supprimer",
          style: "destructive",
          onPress: () => {
            dispatch(deleteTask(id));
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentCard}>
        <Text style={styles.label}>Tâche</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={handleDeleteTask}
        activeOpacity={0.8}
      >
        <Text style={styles.deleteButtonText}>🗑️ Supprimer cette tâche</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  contentCard: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  deleteButton: {
    backgroundColor: "#d32f2f",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});