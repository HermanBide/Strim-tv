//recommend users to logged in user

import { db } from "./db";
import { getSelf } from "./auth-services";

export const getRecommended = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  let userId;

  try {
    const self = await getSelf();
    userId = self?.id;
  } catch (error) {
    userId = null;
  }

  return userId ? await db.user.findMany({
    where: {
      NOT: {
        id: userId,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  }) : await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
