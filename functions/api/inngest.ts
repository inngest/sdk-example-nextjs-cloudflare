import { createFunction } from "inngest";
import { serve } from "inngest/cloudflare";

const foo = createFunction("Foo", "demo/event.sent", () => {
  console.log("Got a demo event!");
});

export const onRequest = serve("Cloudflare Pages Example", [foo]);
