import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const resumeHeaders = {
  "Content-Type": "application/pdf",
  "Content-Disposition": 'inline; filename="Shabad_Vaswani_Resume.pdf"',
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
};

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
      headers: resumeHeaders,
    });
  } catch {
    // Fallback to the flat public copy
    const fallback = path.join(process.cwd(), "public", "resume.pdf");
    const data = await readFile(fallback);
    return new NextResponse(data, {
      headers: resumeHeaders,
    });
  }
}
