import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import DateComponent from "@/components/Date";
import Link from "next/link";

type HomePageTodo = Pick<Todo, "id" | "title" | "createdDate" | "description">;

async function Todos() {
	let todos: HomePageTodo[] = [];
	try {
		todos = await prisma.todo.findMany({
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
	} catch (err) {
		console.error(err);
	} finally {
		prisma.$disconnect();
	}

	return (
		<ul className="w-1/2">
			{todos.map((todo, index) => {
				return (
					<li key={todo.id}>
						<div className="w-full">
							<div className="flex justify-between">
								<div className="flex gap-2">
									<span>{index + 1}.</span>
									<Link
										className="hover:text-sky-500 dark:hover:text-sky-400"
										href={`/todo/${todo.id}`}
									>
										{todo.title}
									</Link>
								</div>
								<DateComponent dateISO={todo.createdDate.toISOString()} />
							</div>
							{todo.description && (
								<div className="truncate text-sm text-slate-400 w-1/2 h-10 mt-1">
									{todo.description}
								</div>
							)}
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default Todos;
