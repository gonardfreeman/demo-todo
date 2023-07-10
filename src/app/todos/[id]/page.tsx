import { Suspense } from "react";

import type { TodoProps } from "@/lib/pages/todo";

import MarginLayout from "@/components/server/layout/MarginLayout";
import { loadById } from "@/lib/prisma/todoResolver";

async function TodoComponent({ params }: TodoProps) {
	const todo = await loadById(Number(params.id));
	if (todo === null) {
		return null;
	}
	return (
		<Suspense fallback="Loading...">
			<MarginLayout>
				<h1 className="flex text-lg">{todo.title}</h1>
			</MarginLayout>
		</Suspense>
	);
}

import { generateMetadata } from "@/lib/pages/todo";
export { generateMetadata };

export default TodoComponent;
