// import { z } from "zod";

import type { User } from "@clerk/nextjs/dist/api";
import { clerkClient } from "@clerk/nextjs/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profileImageUrl: user.profileImageUrl,
  };
};

export const geolocationPinsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const geolocationPins = await ctx.prisma.geolocationPin.findMany({
      take: 100,
    });
    const users = (
      await clerkClient.users.getUserList({
        userId: geolocationPins.map((geolocationPin) => geolocationPin.userId),
        limit: 100,
      })
    ).map(filterUserForClient);
    console.log(users);

    return geolocationPins.map((geolocationPin) => ({
      geolocationPin,
      user: users.find((user) => user.id === geolocationPin.userId),
    }));
  }),
});
