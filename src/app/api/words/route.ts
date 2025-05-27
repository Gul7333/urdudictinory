// app/api/words/route.ts
import { NextResponse } from "next/server";
import { listofword } from "@/lib/dictionory";

export async function GET() {
  const words = listofword();
  return NextResponse.json(words);
}
