"use client";

import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

const PROPS = {
	className: "w-8 h-8",
};

const CurrentThemeIcon = ({ name }: { name: string }) => {
	if (name === "light") {
		return <SunIcon {...PROPS} />;
	}
	if (name === "dark") {
		return <MoonIcon {...PROPS} />;
	}
	return <ComputerDesktopIcon {...PROPS} />;
};

export default CurrentThemeIcon;
