import prisma from "@/lib/prisma/prisma";
import { Todo } from "@prisma/client";

export type HomePageTodo = Pick<Todo, "id" | "title" | "createdDate" | "description">;

export const loadLast10 = async (): Promise<Array<HomePageTodo>> => {
	try {
		const todos = await prisma.todo.findMany({
			select: {
				id: true,
				title: true,
				description: true,
				createdDate: true,
			},
			orderBy: {
				createdDate: "desc",
			},
			take: 10,
		});
		return todos;
	} catch (err) {
		console.error(err);
		return [];
	} finally {
		prisma.$disconnect();
	}
};

export const loadById = async (id: number): Promise<Todo | null> => {
	if (isNaN(id)) {
		return null;
	}
	try {
		const todo = await prisma.todo.findUnique({
			where: {
				id,
			},
		});
		return todo;
	} catch (err) {
		console.error(err);
		return null;
	} finally {
		prisma.$disconnect();
	}
};
