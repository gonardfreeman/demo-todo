import prisma from "@/lib/prisma";
import MarginLayout from "@/components/MarginLayout";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import type { TodoProps } from "@/lib/pages/todo";

import { generateMetadata } from "@/lib/pages/todo";
import { Suspense } from "react";

export { generateMetadata };

async function TodoComponent({ params }: TodoProps) {
	try {
		const todo = await prisma.todo.findUniqueOrThrow({ where: { id: Number(params.id) } });
		return (
			<Suspense fallback="Loading...">
				<MarginLayout>
					<h1 className="flex text-lg">{todo.title}</h1>
				</MarginLayout>
			</Suspense>
		);
	} catch (err) {
		if (err instanceof PrismaClientKnownRequestError) {
			return <MarginLayout>{err.message}</MarginLayout>;
		}
	} finally {
		prisma.$disconnect();
	}
	return <MarginLayout>Not Found</MarginLayout>;
}

export default TodoComponent;
