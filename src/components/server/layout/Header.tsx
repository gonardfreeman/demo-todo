import Link from "next/link";

import Logo from "@/components/client/theme/Logo";
import ThemeSelector from "@/components/client/theme/ThemeSelector";

function Header() {
	return (
		<header className="w-full z-50 h-14 top-0 sticky border-b-2 border-slate-500 dark:border-slate-100">
			<div className="mx-auto max-w-7xl flex justify-between py-2">
				<Link href="/">
					<Logo />
				</Link>
				<ThemeSelector />
			</div>
		</header>
	);
}

export default Header;
