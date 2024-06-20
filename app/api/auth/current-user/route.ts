import { validateRequest } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const { user } = await validateRequest();

  if (!user || user === null)
    return new NextResponse("Not authenticated", { status: 401 });

  return new NextResponse(JSON.stringify(user), { status: 200 });
}
