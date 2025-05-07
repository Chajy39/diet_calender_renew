import { JoinProps } from "@/types/FormType";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import tw from "tailwind-styled-components";

const InputWrap = tw.div``;
const Subtitle = tw.h1`text-[1.2rem] font-semibold`;
const RowWrap = tw.div`flex items-center gap-2`;
const FormInput = tw.input`w-[30vw] border border-[#bbbbbb] rounded-md p-2 text-[0.75rem]`;
const RadioLabel = tw.label<JoinProps>`px-8 py-2 border-2 border-[#bbbbbb] rounded-sm font-semibold flex items-center gap-1`;
const LabelImg = tw(Image)<ImageProps>``;
const FormRadio = tw.input`hidden`;
const InfoWrap = tw.div`flex flex-col gap-2`;
const InputLabel = tw.p`w-16`;

const SecondStep = ({
  step,
  setStep,
  register,
  watch,
  getValues,
}: JoinProps) => {
  console.log("getValue", getValues("sex"));

  watch("sex");

  const stepComponents = [
    {
      title: "당신의 성별은 무엇인가요?",
      component: (
        <RowWrap>
          <RadioLabel
            key="input4-1"
            htmlFor="male"
            className={`${getValues("sex") === "남" && "border-[#44bb44]"}`}
          >
            <FormRadio
              id="male"
              type="radio"
              value="남"
              {...register("sex")}
              disabled={step !== 7}
            />
            남자
            <LabelImg
              src="/svg/ic_male.svg"
              alt="male"
              width={20}
              height={20}
            />
          </RadioLabel>
          <RadioLabel
            key="input4-2"
            htmlFor="female"
            className={`${getValues("sex") === "여" && "border-[#44bb44]"}`}
          >
            <FormRadio
              id="female"
              type="radio"
              value="여"
              {...register("sex")}
              disabled={step !== 7}
            />
            여자
            <LabelImg
              src="/svg/ic_female.svg"
              alt="female"
              width={20}
              height={20}
            />
          </RadioLabel>
        </RowWrap>
      ),
    },
    {
      title: "당신은 몇세인가요?",
      component: (
        <RowWrap>
          <FormInput
            key="input5"
            id="age"
            {...register("age", {})}
            disabled={step !== 9}
          />
          세
        </RowWrap>
      ),
    },
    {
      title: "당신의 신체 정보를 알려주세요",
      component: (
        <InfoWrap>
          <RowWrap>
            <InputLabel>키</InputLabel>
            <FormInput
              key="input6"
              id="height"
              {...register("height", {})}
              disabled={step !== 11}
            />
            cm
          </RowWrap>
          <RowWrap>
            <InputLabel>몸무게</InputLabel>
            <FormInput
              key="input7"
              id="weight"
              {...register("weight", {})}
              disabled={step !== 11}
            />
            kg
          </RowWrap>
        </InfoWrap>
      ),
    },
  ];

  return stepComponents
    .slice(0, Math.floor((step - 6) / 2) + 1)
    .map((item, idx) => {
      const isLast = idx === Math.floor((step - 6) / 2);
      return isLast ? (
        <InputWrap key={`step2${idx}`}>
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
        <InputWrap key={`step2${idx}`}>
          <Subtitle>{item.title}</Subtitle>
          {item.component}
        </InputWrap>
      );
    });
};
export default SecondStep;
