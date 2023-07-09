import Link from "next/link";

const linkClassName = "hover:text-slate-900 dark:hover:text-slate-300";

function Footer() {
	return (
		<footer className="w-full bg-white dark:bg-transparent text-slate-500 leading-6">
			<div className="mx-auto max-w-7xl flex-none text-sm">
				<h2 className="font-semibold dark:text-slate-200">Quick Links</h2>
				<ul>
					<li>
						<Link href="/" className={linkClassName}>
							Home
						</Link>
					</li>
					<li>
						<Link href="https://github.com/gonardfreeman" target="_blank" className={linkClassName}>
							GitHub
						</Link>
					</li>
					<li>
						<Link
							href="https://www.linkedin.com/in/dmytro-bondarenko-06747310b/"
							target="_blank"
							className={linkClassName}
						>
							LinkedIn
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
