import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
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
// import { productReducer } from '../slices/Product';
import productApi, { productReducer } from "../features/admin/productApi";
import authApi, { authReducer } from "../features/auth/authApi";
import { authSliceReducer } from "../features/auth/authSlice";
import { filterReducer } from "../features/filter/filterSlice";
import { cartReducer } from "../features/cart/cartSlice";
import categoryApi, { categoryReducer } from "../features/categories/categoriesApi";
import { categoryIDReducer } from "../features/categories/categoriesSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Authentication","cart"],
};
const rootReducer = combineReducers({
  [productApi.reducerPath]: productReducer,
  [authApi.reducerPath]: authReducer,
  [categoryApi.reducerPath]: categoryReducer,
  Authentication: authSliceReducer,
  filterProduct:filterReducer,
  cart: cartReducer,
  categoryId: categoryIDReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productApi.middleware, authApi.middleware,categoryApi.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default persistStore(store);
