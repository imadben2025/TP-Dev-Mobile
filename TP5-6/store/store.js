/**
 * Configuration du store Redux
 * 
 * Point central de la gestion d'état de l'application
 * Utilise Redux Toolkit pour une configuration simplifiée
 */

import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./todosSlice";

/**
 * Store Redux configuré avec tous les reducers de l'application
 */
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  // Le middleware par défaut de Redux Toolkit inclut redux-thunk
  // et des vérifications de développement utiles
});