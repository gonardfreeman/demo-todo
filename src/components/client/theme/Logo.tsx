"use client";
import Image from "next/image";

import { useAppSelector } from "@/store/storeTypes";

function Logo() {
	const themeName = useAppSelector((state) => state.themeSelector.theme);
	return (
		<Image
			src={`/logo${themeName === "dark" ? "-dark" : ""}.png`}
			alt="Todo App Logo"
			width={200}
			height={40}
			className="h-10 object-contain"
		/>
	);
}

export default Logo;
