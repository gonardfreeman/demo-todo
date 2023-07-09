import { Suspense } from "react";
import MarginLayout from "@/components/server/layout/MarginLayout";
import Todos from "@/components/server/Todos";

function Home() {
	return (
		<MarginLayout>
			<h1 className="text-lg text-slate-700 dark:text-slate-100">Recent Todos:</h1>
			<Suspense fallback="Loading...">
				<Todos />
			</Suspense>
		</MarginLayout>
	);
}

export default Home;
