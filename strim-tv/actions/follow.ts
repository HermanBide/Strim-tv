"use server"

import { revalidatePath } from "next/cache"
import { followUser, unFollowUser } from "@/lib/follow-service"
import { getSelf } from "@/lib/auth-services"
import { db } from "@/lib/db"

export const onFollow = async (id: string) => {
    try {
        const followedUser = await followUser(id)
        //revalidate path
        revalidatePath("/")
        if(followedUser) {
            revalidatePath(`${followedUser.following.username}`)
        }
        return followedUser
    } catch (error: any) {
    //   throw new Error(`internal error: ${error}`)  
    if (error?.message === "Already following") {
        // Handle the "Already following" error
        console.error("User is already following this user.");
        // You can choose to display a message to the user or perform a different action here
      } else {
        // For other errors, rethrow the error
        throw new Error(`Internal error: ${error}`);
      }
    }
}

export const onUnFollow = async ( id: string) => {
    try {
        const unfollowedUser = await unFollowUser(id)
        revalidatePath("/")

        if(unfollowedUser) {
            revalidatePath(`/${unfollowedUser.following?.username}`)
        }

        return unfollowedUser
    } catch (error) {
        console.log(error)
       throw new Error(`internal error: ${error}`) 

    }
}