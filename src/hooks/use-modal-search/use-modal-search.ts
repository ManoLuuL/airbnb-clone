import { ModalSearchStore } from "./types";
import { create } from "zustand";

export const useModalRent = create<ModalSearchStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
