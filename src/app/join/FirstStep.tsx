import { JoinProps } from "@/types/FormType";
import { motion } from "framer-motion";
import tw from "tailwind-styled-components";

const InputWrap = tw.div``;
const Subtitle = tw.h1`text-[1.2rem] font-semibold`;
const FormInput = tw.input`w-full border border-[#bbbbbb] rounded-md p-2 text-[0.75rem] mt-2`;
const InvalidWrap = tw.div`relative mt-1 text-[0.75rem] text-[#ff0000] before:content-[''] before:absolute before:top-[-40px] before:left-0 before:w-full before:h-9 before:border before:border-[#ff0000] before:rounded-md before:pointer-events-none`;

const FirstStep = ({
  step,
  setStep,
  register,
  watch,
  isRegister,
  formValid,
}: JoinProps) => {
  const password = watch("password");

  const stepComponents = [
    {
      title: "휴대폰 번호를 입력해주세요",
      component: (
        <div key="input1">
          <FormInput
            id="id"
            {...register("id", {
              required: "' - ' 를 제외하고 입력해주세요",
              pattern: {
                value: /^[0-9]+$/,
                message: "숫자만 입력해주세요.",
              },
              minLength: 10,
              maxLength: 11,
            })}
            placeholder="' - ' 를 제외하고 입력해주세요"
            disabled={step !== 1}
          />
          {isRegister ? (
            <InvalidWrap>이미 해당 번호로 가입했어요</InvalidWrap>
          ) : (
            !formValid[0] && (
              <InvalidWrap>입력하신 번호를 확인해주세요</InvalidWrap>
            )
          )}
        </div>
      ),
    },
    {
      title: "비밀번호를 입력해주세요",
      component: (
        <div key="input2">
          <FormInput
            id="password"
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              minLength: 8,
              maxLength: 16,
            })}
            placeholder="8 - 16자 이내로 입력해주세요"
            disabled={step !== 3}
          />
          {!formValid[1] && (
            <InvalidWrap>입력하신 비밀번호를 확인해주세요</InvalidWrap>
          )}
        </div>
      ),
    },
    {
      title: "비밀번호를 다시 입력해주세요",
      component: (
        <div key="input3">
          <FormInput
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: "비밀번호를 입력해주세요",
              validate: (value) =>
                value === password || "비밀번호가 일치하지 않습니다.",
            })}
            placeholder="8 - 16자 이내로 입력해주세요"
            disabled={step !== 5}
          />
          {!formValid[2] && (
            <InvalidWrap>비밀번호가 일치하지 않아요</InvalidWrap>
          )}
        </div>
      ),
    },
  ];

  return stepComponents.slice(0, Math.floor(step / 2) + 1).map((item, idx) => {
    const isLast = idx === Math.floor(step / 2);
    return isLast ? (
      <InputWrap key={`step1${idx}`}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => setStep((prev) => prev + 1)}
        >
          <Subtitle>{item.title}</Subtitle>
        </motion.div>
        {step % 2 === 1 && (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {item.component}
          </motion.div>
        )}
      </InputWrap>
    ) : (
      <InputWrap key={`step1${idx}`}>
        <Subtitle>{item.title}</Subtitle>
        {item.component}
      </InputWrap>
    );
  });
};
export default FirstStep;
