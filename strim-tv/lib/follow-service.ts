import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-services";

// export const getFollowedUsers = async () => {
//   try {
//     const self = await getSelf();

//     const followedUsers = db.follow.findMany({
//       where: {
//         followerId: self.id,
//         following: {
//           blocking: {
//             none: {
//               blockedId: self.id,
//             },
//           },
//         },
//       },
//       include: {
//         following: {
//           include: {
//             stream: {
//               select: {
//                 isLive: true,
//               },
//             },
//           },
//         },
//       },
//       orderBy: [
//         {
//           following: {
//             stream: {
//               isLive: "desc",
//             },
//           },
//         },
//         {
//           createdAt: "desc"
//         },
//       ]
//     });

//     return followedUsers;
//   } catch {
//     return [];
//   }
// };

export const isFolloingUser = async (id: string) => {
  try {
    const self = await getSelf();
    const otherUser = await db.user.findUnique({ where: { id } });

    if (!otherUser) {
      throw new Error("user not found");
    }

    if (otherUser.id === self?.id) {
      return true;
    }

    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: self?.id,
        followingId: otherUser.id,
      },
    });
    return !!existingFollow;
  } catch (error) {
    return false;
  }
};

export const followUser = async (id: string) => {
  const self = await getSelf();

  const otherUser = await db.user.findUnique({ where: { id } });

  if (!otherUser) {
    throw new Error("user not found");
  }

  if (otherUser.id === self?.id) {
    throw new Error("Cannot follow yourself");
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self?.id,
      followingId: otherUser.id,
    },
  });

  if (existingFollow) {
    throw new Error("Already following");
  }

  const follow = await db.follow.create({
    data: {
      followerId: self?.id ?? "", // Provide a default value if self?.id is undefined
      followingId: otherUser.id,
    },
    include: {
      following: true,
      follower: true,
    },
  });
  return follow;
};

export const unFollowUser = async (id: string) => {
  try {
    const self = await getSelf();

    const otherUser = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!otherUser) throw new Error("user not found");

    if (otherUser.id === self?.id) {
      throw new Error("cannot unfollow yourself");
    }

    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: self?.id,
        followingId: otherUser.id,
      },
    });

    if (!existingFollow) {
      throw new Error("Not following");
    }

    const follow = await db.follow.delete({
      where: {
        id: existingFollow.id,
      },
      include: {
        following: true,
      },
    });

    return follow;
  } catch (err) {
    console.error(err, "unFollowUser Err");
    throw new Error("Error retrieving the data");
  }
};

export const getFollowedUsers = async () => {
  try {
    const self = await getSelf();
    const followedUsers = await db.follow.findMany({
      where: {
        followerId: self.id,
        following: {
          blocking: {
            none: {
              blockedId: self.id,
            },
          },
        },
      },
      include: {
        following: {
          include: {
            stream: {
              select: {
                isLive: true
              }
            },
          },
        },
      },
    });
    return followedUsers;
  } catch (err) {
    console.log(err, "");
    return [];
  }
};
