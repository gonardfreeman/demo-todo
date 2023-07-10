import Link from "next/link";

import DateComponent from "@/components/client/etc/Date";

import { loadLast10 } from "@/lib/prisma/todoResolver";

// TODO: https://codevoweb.com/setup-redux-toolkit-in-nextjs-13-app-directory/

async function Todos() {
	const todos = await loadLast10();

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
										href={`/todos/${todo.id}`}
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
