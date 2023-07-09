import { useRef, useEffect, RefObject } from "react";

import CurrentThemeIcon from "./CurrentThemeIcon";
import type { Theme } from "@/store/themeSelectorSlice";

import { capitalize } from "@/lib/helper";
import { setTheme, setPopupState } from "@/store/themeSelectorSlice";
import { useAppDispatch, useAppSelector } from "@/store/storeTypes";

const AVAILABLE_THEMES = ["light", "dark", "auto"];

function ThemeIconList({ buttonRef }: { buttonRef: RefObject<HTMLButtonElement> }) {
	const popupRef = useRef<HTMLUListElement>(null);

	const dispatch = useAppDispatch();
	const isOpen = useAppSelector((state) => state.themeSelector.isOpen);
	const themeName = useAppSelector((state) => state.themeSelector.theme);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				popupRef.current &&
				!popupRef.current.contains(e.target as Node) &&
				buttonRef.current &&
				!buttonRef.current.contains(e.target as Node)
			) {
				dispatch(setPopupState(false));
			}
		};
		if (isOpen) {
			window.addEventListener("click", handleClickOutside);
		}

		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, [isOpen, dispatch]);

	const handleThemeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { name },
		} = e;
		dispatch(setTheme(name as Theme));
		if (name === "auto") {
			localStorage.removeItem("theme");
			document.documentElement.classList.remove("dark");
			return;
		}
		localStorage.setItem("theme", name);
		document.documentElement.classList.toggle("dark", name === "dark");
	};

	if (!isOpen) {
		return null;
	}
	return (
		<ul
			ref={popupRef}
			role="listbox"
			className="absolute top-full right-0 text-sm font-semibold z-50 w-32 rounded-lg mt-8 overflow-hidden py-1 text-slate-700 dark:text-slate-50 bg-slate-50 dark:bg-slate-600 shadow-lg ring-1 ring-slate-900/10 dark:ring-0"
		>
			{AVAILABLE_THEMES.map((theme) => (
				<li
					key={theme}
					role="option"
					aria-selected={theme === themeName}
					className={`hover:bg-slate-700/10 dark:hover:bg-slate-100/10 ${
						theme === themeName ? `fill-sky-400/20 stroke-sky-500 text-sky-500` : ""
					}`}
				>
					<button
						onClick={handleThemeChange}
						name={theme}
						className="text-center inline-flex px-5 py-2.5 gap-4"
					>
						<CurrentThemeIcon name={theme} />
						{capitalize(theme)}
					</button>
				</li>
			))}
		</ul>
	);
}

export default ThemeIconList;
