import { serve } from "inngest/cloudflare";
import { inngest, functions } from "../../inngest";

export const onRequest = serve(inngest, functions);
