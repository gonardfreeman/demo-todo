import Image from "next/image";
import Link from "next/link";

function Header() {
	return (
		<header className="w-full z-50 top-0 sticky bg-white dark:bg-transparent border-b-2 border-slate-500">
			<div className="mx-auto max-w-7xl">
				<Link href="/">
					<Image src="/logo.svg" alt="Demo App Logo" width={200} height={100} />
				</Link>
			</div>
		</header>
	);
}

export default Header;
