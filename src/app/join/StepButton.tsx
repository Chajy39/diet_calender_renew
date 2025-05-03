import { JoinProps } from "@/types/FormType";
import Image, { ImageProps } from "next/image";
import tw from "tailwind-styled-components";

const ButtonWrap = tw.button`absolute bottom-4 right-8 p-2 rounded-lg bg-[#cecece]`;
const BtnImg = tw(Image)<ImageProps>``;

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
    }

    if (isValid) {
      setStep((prev) => prev + 1);
    }

    console.log("isValid", isValid);
  };

  return (
    <ButtonWrap onClick={CheckStep}>
      <BtnImg
        src="/svg/ic_arrow_right.svg"
        alt="NextStep"
        width={24}
        height={24}
      />
    </ButtonWrap>
  );
};

export default StepButton;
