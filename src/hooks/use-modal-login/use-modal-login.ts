import { ModalLoginStore } from "./types";
import { create } from "zustand";

export const useModalLogin = create<ModalLoginStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
