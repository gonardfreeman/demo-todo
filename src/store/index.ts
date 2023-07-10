import { configureStore } from "@reduxjs/toolkit";
import themeSelectorReducer from "./themeSelectorSlice";

import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { todoApiSlice } from "./todoApiSlice";

export const store = configureStore({
	reducer: {
		themeSelector: themeSelectorReducer,
		[todoApiSlice.reducerPath]: todoApiSlice.reducer,
	},
	devTools: process.env.NODE_ENV !== "production",
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
