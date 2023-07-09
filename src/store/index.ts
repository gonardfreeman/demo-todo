import { configureStore } from "@reduxjs/toolkit";
import themeSelectorReducer from "./themeSelectorSlice";

export const store = configureStore({
	reducer: {
		themeSelector: themeSelectorReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
