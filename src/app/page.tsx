import { Suspense } from "react";
import Todos from "@/components/Todos";

function Home() {
	return (
		<div className="w-full">
			<div className="mx-auto max-w-7xl">
				<h1 className="text-lg text-slate-700 dark:text-slate-100">Recent Todos:</h1>
				<Suspense fallback="Loading...">
					<Todos />
				</Suspense>
			</div>
		</div>
	);
}

export default Home;
