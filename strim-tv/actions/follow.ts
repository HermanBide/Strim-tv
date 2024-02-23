"use server";

import { revalidatePath } from "next/cache";
import { followUser, unFollowUser } from "@/lib/follow-service";

export const onFollow = async (id: string) => {
  try {
    const followedUser = await followUser(id);
    //revalidate path
    revalidatePath("/");

    if (followedUser) {
      revalidatePath(`${followedUser?.following?.username}`);
    }
    return followedUser;
  } catch (error) {
    console.log(error, "Something went wrong")
    throw new Error(`internal error: ${error}`);
  }
};

export const onUnfollow = async (id: string) => {
  try {
    const unfollowedUser = await unFollowUser(id);
    revalidatePath("/");

    if (unfollowedUser) {
      revalidatePath(`/${unfollowedUser?.following.username}`);
    }

    return unfollowedUser;
  } catch (error) {
    console.log(error, "onUnFollow Error");
    throw new Error(`internal error: ${error}`);
  }
};
