import { createFunction } from "inngest";
import { register } from "inngest/cloudflare";

const foo = createFunction("Foo", "demo/event.sent", () => {
  console.log("Got a demo event!");
});

export const onRequest = register("Cloudflare Pages Example", "", [foo]);
