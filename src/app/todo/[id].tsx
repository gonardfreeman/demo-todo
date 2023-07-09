import prisma from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

import { Metadata } from "next";

type Props = {
	params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

async function TodoComponent({ params }: Props) {
	try {
		const todo = await prisma.todo.findUniqueOrThrow({ where: { id: Number(params.id) } });
		return (
			<div className="w-full">
				<h1 className="flex text-lg">{todo.title}</h1>
			</div>
		);
	} catch (err) {
		if (err instanceof PrismaClientKnownRequestError) {
			return <div>{err.message}</div>;
		}
	} finally {
		prisma.$disconnect();
	}
	return <div>Not Found</div>;
}

export default TodoComponent;
