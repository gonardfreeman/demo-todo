import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getBrowserColorScheme, type DarkLight } from "@/lib/helper";

export type Theme = DarkLight | "auto";

export interface ThemeSelectorState {
	isOpen: boolean;
	theme: Theme;
}

if (
	localStorage.theme === "dark" ||
	(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
	document.documentElement.classList.add("dark");
} else {
	document.documentElement.classList.remove("dark");
}

let startTheme = getBrowserColorScheme();
if ("theme" in localStorage) {
	startTheme = localStorage.theme;
}

const initialState: ThemeSelectorState = {
	isOpen: false,
	theme: startTheme,
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
