function MarginLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full">
			<div className="mx-auto max-w-7xl">{children}</div>
		</div>
	);
}

export default MarginLayout;
