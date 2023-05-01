import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const geolocationPinsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.geolocationPin.findMany();
  }),
});
