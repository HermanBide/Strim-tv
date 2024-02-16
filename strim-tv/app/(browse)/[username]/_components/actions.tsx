"use client";

import { Button } from "@/components/ui/button";
import { onFollow, onUnFollow } from "../../../../actions/follow";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { unFollowUser } from "@/lib/follow-service";
import { onBlock } from "@/actions/block";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransaction] = useTransition();
  const [following, setFollowing] = useState(isFollowing); // Manage isFollowing state

  // const handleFollow = () => {
  //   startTransaction(() => {
  //     onFollow(userId)
  //       .then((data) =>
  //         toast.success(`You are now following ${data?.following.username}`)
  //       )
  //       .catch(() => toast.error("Something went wrong"));
  //   });
  // };

  // const handleUnfollow = () => {
  //   startTransaction(() => {
  //     onUnFollow(userId)
  //       .then((data) =>
  //         toast.success(`You have unfollowed ${data.following.username}`)
  //       )
  //       .catch(() => toast.error("Something went wrong"));
  //   });
  // };

  const handleFollow = () => {
    startTransaction(() => {
      onFollow(userId)
        .then((data) => {
          toast.success(
            `You are now following the user ${data.following.username}`
          );
          setFollowing(true); // Update isFollowing state after successful follow
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const handleUnfollow = () => {
    startTransaction(() => {
      onUnFollow(userId)
        .then((data) => {
          toast.success(
            `You have unfollowed the user ${data.following.username}`
          );
          setFollowing(false); // Update isFollowing state after successful unfollow
        })
        .catch((error) => {
          console.log(error)
          toast.error("Something went wrong");
        });
    });
  };

  const onClick = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  const handleBlock = () => {
    startTransaction(() => {
      onBlock(userId)
      .then((data) => toast.success(`Unblocked the user ${data?.blocked.username}`))
      .catch(() => toast.error("something went wrong"))
    })
  }

  return (
    <>
    <Button disabled={isPending} onClick={onClick} variant="primary">
      {/* {following ? "Unfollow" : "Follow"} */}
      {following ? "Unfollow" : "Follow"}
      {/* {following ? "follow" : "UnFollow"} */}
    </Button>
    <Button onClick={handleBlock} disabled={isPending}>
      Block User
    </Button>
    </>
  );
};
