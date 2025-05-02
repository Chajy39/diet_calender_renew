import { atom } from "recoil";

export type ToastType = {
  isVisible: boolean;
  message: string;
  type: string;
  color?: string;
};
export const toastState = atom<ToastType>({
  key: "toastState",
  default: { message: "", isVisible: false, type: "success" },
});
