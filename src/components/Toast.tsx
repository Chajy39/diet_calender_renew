"use client";

import { toastState, ToastType } from "@/contexts/toast";
import { useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";

const ToastContainer = tw.div`fixed z-10 t-0 l-0 w-full h-full`;
const ToastWrap = tw.div`flex gap-4 px-4 py-2 rounded-md border-[#44bb44]`;

const Toast = () => {
  const toastFlag = useRecoilValue<ToastType>(toastState);

  return (
    toastFlag.isVisible && (
      <ToastContainer>
        <ToastWrap style={{ backgroundColor: toastFlag.color || "#44bb44" }}>
          {toastFlag.message}
        </ToastWrap>
      </ToastContainer>
    )
  );
};
export default Toast;
