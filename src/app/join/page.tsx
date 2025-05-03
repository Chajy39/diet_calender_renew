"use client";

import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import FirstStep from "./FirstStep";
import { JoinFormType } from "@/types/FormType";
import { useForm } from "react-hook-form";
import StepButton from "./StepButton";
import SecondStep from "./SecondStep";
import loginController from "@/libs/loginController";

const JoinWrap = tw.div`relative w-full h-[80vh] flex flex-col py-[10%] px-[6%] gap-8`;

const JoinPage = () => {
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

  useEffect(() => {
    console.log("step", step);
  }, [step]);

  return (
    <JoinWrap>
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
          formValid={formValid}
        />
      )}
      <StepButton
        step={step}
        setStep={setStep}
        register={register}
        trigger={trigger}
        checkId={checkId}
        checkValid={checkValid}
      />
    </JoinWrap>
  );
};
export default JoinPage;
