import { cloudflareErrorResponse } from "../cloudflare-error-page";

/** Backup preview of the Cloudflare error page */
export async function GET() {
  return cloudflareErrorResponse();
}
