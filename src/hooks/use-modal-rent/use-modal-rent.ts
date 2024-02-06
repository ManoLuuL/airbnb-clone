import { ModalRentStore } from "./types";
import { create } from "zustand";

export const useModalSearch = create<ModalRentStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
