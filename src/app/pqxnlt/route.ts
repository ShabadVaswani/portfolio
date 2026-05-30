import { NextResponse } from "next/server";

const CREDLY_BADGE_URL =
  "https://www.credly.com/earner/earned/badge/f39068e6-9031-47d5-a1a5-a480f371f05q";

/** Cloudflare error page backup lives in ./cloudflare-error-page.ts — preview at /pqxnlt/error */
export async function GET() {
  return NextResponse.redirect(CREDLY_BADGE_URL, 307);
}
