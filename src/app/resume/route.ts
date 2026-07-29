import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-static";

/** Serve the resume PDF at /resume (e.g. https://shabad.tech/resume). */
export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "resume",
    "Shabad_Vaswani_Resume.pdf",
  );

  try {
    const data = await readFile(filePath);
    return new NextResponse(data, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'inline; filename="Shabad_Vaswani_Resume.pdf"',
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    // Fallback to the flat public copy
    const fallback = path.join(process.cwd(), "public", "resume.pdf");
    const data = await readFile(fallback);
    return new NextResponse(data, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'inline; filename="Shabad_Vaswani_Resume.pdf"',
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  }
}
