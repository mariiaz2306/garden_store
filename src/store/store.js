import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoriesReducer, categoryReducer } from "./reducers/categoryReducer";
import themeReducer from "./themeSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Объединение всех редьюсеров
const rootReducer = combineReducers({
  categories: categoriesReducer,
  nameOfCategory: categoryReducer,
  theme: themeReducer,
});

// Настройка конфигурации персистенции
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Создание стора с использованием configureStore
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
