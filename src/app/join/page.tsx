"use client";

import loginController from "@/libs/loginController";
import { JoinFormType } from "@/types/FormType";
import { useState } from "react";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import StepButton from "./StepButton";
import { useRouter } from "next/navigation";

const JoinWrap = tw.form`relative w-full h-[80vh] flex flex-col py-[15%] px-[6%] gap-8`;

const JoinPage = () => {
  const router = useRouter();
  const { register, trigger, handleSubmit, watch, getValues } =
    useForm<JoinFormType>();
  const [step, setStep] = useState<number>(0);
  const [formValid, setFormValid] = useState<boolean[]>([true, true, true]);
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const checkId = async () => {
    try {
      const oParams = {
        id: getValues("id"),
      };
      const response = await loginController.checkId(oParams);

      if (response && response.data) {
        if (response.code === "0001") {
          setIsRegister(true);
          return false;
        } else {
          return true;
        }
      }
      return false;
    } catch (e) {
      console.error("checkId err =>", e);
      setIsRegister(true);
      return false;
    }
  };

  const join = async (data: JoinFormType) => {
    try {
      const response = await loginController.join(data);

      if (response && response.data) {
        console.log(response.msg);
        if (response.code === "0000") {
          router.replace("/login");
        }
      }
    } catch (e) {
      console.error("join err =>", e);
      setIsRegister(true);
    }
  };

  const checkValid = async () => {
    const validTemp = [...formValid];
    if (step === 1) {
      const idValid = await trigger("id");
      validTemp[0] = idValid;
    } else if (step === 3) {
      const pwValid = await trigger("password");
      validTemp[1] = pwValid;
    } else if (step === 5) {
      const confirmPwValid = await trigger("confirmPassword");
      validTemp[2] = confirmPwValid;
    }
    setFormValid(validTemp);
    console.log("checkValid", validTemp);
  };

  return (
    <JoinWrap onSubmit={handleSubmit(join)}>
      {step < 6 ? (
        <FirstStep
          step={step}
          setStep={setStep}
          register={register}
          watch={watch}
          trigger={trigger}
          isRegister={isRegister}
          formValid={formValid}
        />
      ) : (
        <SecondStep
          step={step}
          setStep={setStep}
          register={register}
          trigger={trigger}
          watch={watch}
          getValues={getValues}
          formValid={formValid}
        />
      )}
      <StepButton
        step={step}
        setStep={setStep}
        register={register}
        trigger={trigger}
        handleSubmit={handleSubmit}
        checkId={checkId}
        checkValid={checkValid}
      />
    </JoinWrap>
  );
};
export default JoinPage;
