import { JoinProps } from "@/types/FormType";
import Image, { ImageProps } from "next/image";
import tw from "tailwind-styled-components";

const NextButtonWrap = tw.button`absolute bottom-4 right-4 p-2 rounded-lg bg-[#44bb44]`;
const BtnImg = tw(Image)<ImageProps>``;
const CompleteButtonWrap = tw.button`absolute bottom-4 left-8 right-8 width-auto py-2 rounded-lg bg-[#44bb44] text-white`;

const StepButton = ({
  step,
  setStep,
  trigger,
  checkId,
  checkValid,
}: JoinProps) => {
  const CheckStep = async () => {
    checkValid();

    let isValid = false;

    if (step < 2) {
      isValid = await checkId();
      isValid = await trigger("id");
    } else if (step < 4) {
      isValid = await trigger("password");
    } else if (step < 6) {
      isValid = await trigger("confirmPassword");
    } else if (step < 8) {
      isValid = await trigger("sex");
    } else if (step < 10) {
      isValid = await trigger("age");
    } else if (step < 12) {
      isValid = (await trigger("height")) && (await trigger("weight"));
    }

    if (isValid) {
      setStep((prev) => prev + 1);
    }

    console.log("isValid", isValid);
  };

  return step === 11 ? (
    <CompleteButtonWrap type="submit">완료</CompleteButtonWrap>
  ) : (
    <NextButtonWrap onClick={CheckStep}>
      <BtnImg
        src="/svg/ic_arrow_right.svg"
        alt="NextStep"
        width={24}
        height={24}
      />
    </NextButtonWrap>
  );
};

export default StepButton;
