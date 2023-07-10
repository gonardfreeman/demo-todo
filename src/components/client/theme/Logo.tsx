"use client";
import Image from "next/image";

import { useAppSelector } from "@/store/storeTypes";

function Logo() {
	const themeName = useAppSelector((state) => state.themeSelector.theme);
	return (
		<Image
			priority
			width={200}
			height={40}
			alt="Todo App Logo"
			className="h-10 object-contain"
			src={`/logo${themeName === "dark" ? "-dark" : ""}.png`}
		/>
	);
}

export default Logo;
