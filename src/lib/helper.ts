export type DarkLight = "dark" | "light";

export const getBrowserColorScheme = (): DarkLight => {
	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return "dark";
	} else {
		return "light";
	}
};

export function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
