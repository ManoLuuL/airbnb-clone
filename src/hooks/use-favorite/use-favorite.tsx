"use client";

import { useCallback, useMemo } from "react";

import { FavoriteParams } from "./types";
import axios from "axios";
import toast from "react-hot-toast";
import { useModalLogin } from "../use-modal-login";
import { useRouter } from "next/navigation";

export const useFavorite = (params: FavoriteParams) => {
  const { listingId, currentUser } = params;
  const router = useRouter();

  const loginModal = useModalLogin();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};
