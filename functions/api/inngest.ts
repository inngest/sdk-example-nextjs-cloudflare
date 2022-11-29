import { serve } from "inngest/cloudflare";
import fns from "../../inngest";

export const onRequest = serve("Cloudflare Pages Example", fns);
