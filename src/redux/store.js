import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth/authSlice';
import { favoriteReducer } from './favorite/favoriteSlice';
import { categoriesReducer } from './categories/categoriesSlice';
import { glassesReducer } from './glasses/glassesSlice';
import { ingredientsReducer } from './ingredients/ingredientsSlice';
// import { recipesReducer } from './recipes/recipesSlice';
import { recipeReducer } from './recipe/recipeSlice';
import { myRecipesReduser } from './myRecipes/myRecipesSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    favorites: favoriteReducer,
    categories: categoriesReducer,
    glasses: glassesReducer,
    ingredients: ingredientsReducer,
    // recipes: recipesReducer,
    recipe: recipeReducer,
    myRecipes: myRecipesReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);