import { ModalRegisterStore } from "./types";
import { create } from "zustand";

export const useModalRegister = create<ModalRegisterStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
