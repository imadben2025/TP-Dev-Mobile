/**
 * Slice Redux pour la gestion des tâches
 * 
 * Utilise Redux Toolkit pour simplifier la création d'actions
 * et de reducers avec une logique immuable intégrée
 */

import { createSlice } from "@reduxjs/toolkit";

/**
 * État initial: tableau vide de tâches
 */
const initialTasksState = [];

/**
 * Slice Redux pour gérer les opérations CRUD sur les tâches
 */
const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasksState,
  reducers: {
    /**
     * Ajoute une nouvelle tâche au tableau
     * @param {Array} state - L'état actuel des tâches
     * @param {Object} action - L'action contenant la tâche à ajouter
     */
    addTask: (state, action) => {
      state.push(action.payload);
    },
    
    /**
     * Supprime une tâche par son identifiant
     * @param {Array} state - L'état actuel des tâches
     * @param {Object} action - L'action contenant l'ID de la tâche à supprimer
     * @returns {Array} Nouveau tableau sans la tâche supprimée
     */
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    
    /**
     * Met à jour le statut d'une tâche
     * @param {Array} state - L'état actuel des tâches
     * @param {Object} action - L'action contenant l'ID et le nouveau statut
     */
    toggleTaskStatus: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

// Export des actions pour utilisation dans les composants
export const { addTask, deleteTask, toggleTaskStatus } = tasksSlice.actions;

// Export du reducer pour la configuration du store
export default tasksSlice.reducer;
