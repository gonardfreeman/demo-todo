import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { type DarkLight } from "@/lib/helper";

export type Theme = DarkLight | "auto";

export interface ThemeSelectorState {
	isOpen: boolean;
	theme: Theme;
}

const initialState: ThemeSelectorState = {
	isOpen: false,
	theme: "auto",
};

const themeSlice = createSlice({
	initialState,
	name: "themeSelector",
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.theme = action.payload;
		},
		setPopupState: (state, action: PayloadAction<boolean>) => {
			state.isOpen = action.payload;
		},
	},
});

export const { setTheme, setPopupState } = themeSlice.actions;
export default themeSlice.reducer;
