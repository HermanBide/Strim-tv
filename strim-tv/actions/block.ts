"use server"

import { revalidatePath } from "next/cache";
// import { RoomServiceClient } from "livekit-server-sdk";

import { getSelf } from "@/lib/auth-services";
import { blockUser, unblockUser } from "@/lib/block-service"

export const onBlock = async (id: string) => {
    // TODO: Adapt to disconnect from livestream
    // TODO: Allow ability to kick out the guest
    const self = await getSelf();
  
    let blockedUser;
  
    try {
      blockedUser = await blockUser(id);
    } catch {
      // This means user is a guest
    }
  
    // try {
    //   await roomService.removeParticipant(self.id, id);
    // } catch {
    //   // This means user is not in the room
    // }
  
    revalidatePath(`/u/${self.username}/community`);
  
    return blockedUser;
  };
  
  export const onUnblock = async (id: string) => {
    const self = await getSelf();
    const unblockedUser = await unblockUser(id);
  
    revalidatePath(`/u/${self.username}/community`);
    return unblockedUser;
  };