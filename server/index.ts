import { router, publicProcedure } from "./trpc";
import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const inputType = z.object({
  title: z.string(),
  description: z.string().min(10),
});

const appRouter = router({
  
  
  createTodo: publicProcedure.input(inputType).mutation(async (opts) => {
    const data = opts.input.title;
    console.log("From backend")
    return {
      id: "1",
      title: opts.input.title,
    };
  }),
});


const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;