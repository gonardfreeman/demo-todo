import prisma from "@/lib/prisma/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

import { Metadata } from "next";

export type TodoProps = {
	params: { id: string };
};

export async function generateMetadata({ params }: TodoProps): Promise<Metadata> {
	try {
		const todo = await prisma.todo.findUniqueOrThrow({ where: { id: Number(params.id) } });
		return {
			title: todo.title,
			description: todo.description || "Todo",
		};
	} catch (err) {
		if (err instanceof PrismaClientKnownRequestError) {
			return {
				title: "Not Found",
				description: err.message,
			};
		}
		return {
			title: "Not Found",
		};
	} finally {
		prisma.$disconnect();
	}
}
