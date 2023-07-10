import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Todo } from "@prisma/client";
import { HomePageTodo } from "@/lib/prisma/todoResolver";

export const todoApiSlice = createApi({
	reducerPath: "todoApi",
	refetchOnFocus: true,
	baseQuery: fetchBaseQuery({
		baseUrl: "/todos/api",
	}),
	endpoints(builder) {
		return {
			fetchLast10Todos: builder.query<HomePageTodo[], void>({
				query(): string {
					return "/";
				},
			}),
			fetchById: builder.query<Todo, number | void>({
				query(id: number): string {
					return `/?id=${id}`;
				},
			}),
		};
	},
});

export const { useFetchLast10TodosQuery } = todoApiSlice;
