"use client";

import { toastState } from "@/contexts/toast";
import { resetRecoil, setRecoil } from "recoil-nexus";

interface ToastFunction {
  (message: string, type?: string, time?: number, color?: string): void;
}

export const useToast = () => {
  const showToast: ToastFunction = (message, type, time, color) => {
    setRecoil(toastState, {
      message,
      isVisible: true,
      type: type || "success",
      color,
    });

    setTimeout(() => {
      resetRecoil(toastState);
    }, time || 1500);
  };

  return showToast;
};
