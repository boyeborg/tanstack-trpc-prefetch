import { initTRPC } from "@trpc/server";
import { sleep } from "./helpers";

const t = initTRPC.create();

let count = 0;

export const appRouter = t.router({
	hello: t.procedure.query(async () => {
    await sleep(200 + Math.random() * 800);
    return ++count;
  }),
});

export type AppRouter = typeof appRouter;
