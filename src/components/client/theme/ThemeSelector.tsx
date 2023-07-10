"use client";
import { useRef, useEffect } from "react";

import { setPopupState, setTheme } from "@/store/themeSelectorSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import CurrentThemeIcon from "./CurrentThemeIcon";
import ThemeIconList from "./ThemeIconList";

function ThemeSelector() {
	const dispatch = useAppDispatch();

	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!("theme" in localStorage)) {
			dispatch(setTheme("auto"));
			return;
		}
		dispatch(setTheme(localStorage.theme));
	});

	const isOpen = useAppSelector((state) => state.themeSelector.isOpen);
	const themeName = useAppSelector((state) => state.themeSelector.theme);

	const handleOpenPopup = () => {
		dispatch(setPopupState(!isOpen));
	};

	return (
		<>
			<div className="relative flex flex-col align-middle">
				<button onClick={handleOpenPopup} ref={buttonRef}>
					<CurrentThemeIcon name={themeName} />
				</button>
				<ThemeIconList buttonRef={buttonRef} />
			</div>
		</>
	);
}

export default ThemeSelector;
