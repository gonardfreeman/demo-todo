import { NextResponse } from "next/server";

import { loadLast10, loadById } from "@/lib/prisma/todoResolver";

// /todos/api?id=11
export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");
	if (id === null) {
		return NextResponse.json(await loadLast10());
	}
	return NextResponse.json(await loadById(Number(id)));
}
