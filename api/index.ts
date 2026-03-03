import type { VercelRequest, VercelResponse } from "@vercel/node";
import { app, setupApp } from "../server/index";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    await setupApp();
    return app(req as any, res as any);
}
